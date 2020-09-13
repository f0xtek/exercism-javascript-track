const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const getColorIndex = color => COLORS.indexOf(color);

export const decodedValue = colors => Number(colors.slice(0,2).map(getColorIndex).join(''));
