const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const getIndex = color => COLORS.indexOf(color);

export const decodedValue = colors => Number(colors.slice(0,2).map(color => getIndex(color)).join(''));
