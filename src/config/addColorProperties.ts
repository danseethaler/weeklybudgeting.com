import _ from 'lodash';

// Convert hex values into RGBA to enable opacity and brightness values
// Pulled from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
const hexToRgb = (hex: string, opacity = 1, brightness = 1) => {
  let hexLetters = hex.replace('#', '');

  if (hexLetters.length === 3) {
    hexLetters = hexLetters
      .split('')
      .map((letter) => letter + letter)
      .join('');
  }

  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexLetters);
  if (!result) {
    throw new Error('Invalid hex provided');
  }

  // Remove first result of entire string
  result.shift();

  // Math.round needed for IE
  return `rgba(${result
    .map((value) => Math.round(parseInt(value, 16) * brightness))
    .join(', ')}, ${opacity})`;
};

const rgbWithProperties = (rgb, opacity, brightness) => {
  // Get the three rgb values
  const rgbValues = rgb.match(/\d+/g).splice(0, 3);

  return `rgba(${rgbValues.map((value) => Math.round(value * brightness)).join(', ')}, ${opacity})`;
};

// Take a hex or rbg color and
const addColorProperties = (hexOrRgb, opacity = 1, brightness = 1) => {
  const isRgbValue = _.includes(hexOrRgb, '(');
  if (isRgbValue) {
    return rgbWithProperties(hexOrRgb, opacity, brightness);
  }

  return hexToRgb(hexOrRgb, opacity, brightness);
};

export default addColorProperties;
