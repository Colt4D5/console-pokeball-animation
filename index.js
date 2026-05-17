import chalk from 'chalk';
import { pokeball, ditto } from './lib/frames.js';

const COLORS = {
  pink: [197, 123, 230],
  white: [255, 255, 255],
  red: [255, 0, 0],
  black: [0, 0, 0],
  green: [0, 255, 0],
  blue: [0, 0, 255],
  yellow: [255, 249, 188],
}

let pokeballAnimation;
let dittoAnimation;
let frame = 0;
let currentAnimation = pokeball;
let dittoIsIdle = false;

function animate() {
  console.clear();
  process.stdout.write('\x1b[2J\x1b[H');

    currentAnimation[frame % currentAnimation.length].forEach(line => { 
      let coloredLine = '';
      for (const char of line) {
        if (char === '_') {
          coloredLine += ' ';
          continue;
        }
        const colorKey = getColorKey(char);
        const color = COLORS[colorKey] || COLORS.white;
        coloredLine += chalk.rgb(...color)('█');
      }
      console.log(coloredLine);
    });

  frame++;
  if (!dittoIsIdle && frame >= currentAnimation.length) {
    clearInterval(pokeballAnimation);
    frame = 0;
    currentAnimation = ditto;
    dittoAnimation = setInterval(animate, 300);
    dittoIsIdle = true;
  }
}

pokeballAnimation = setInterval(animate, 50);

function getColorKey(char) {
  switch (char) {
    case 'p': return 'pink';
    case 'r': return 'red';
    case 'b': return 'black';
    case 'g': return 'green';
    case 'y': return 'yellow';
    case 'w': return 'white';
    default: return 'white';
  }
}