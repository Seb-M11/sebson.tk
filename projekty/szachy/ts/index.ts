import VTag from './vtag';

const board = VTag.select('.board');

board.append(new VTag('div', new VTag('div').multiply(8)).multiply(8));

VTag.select('#light-squares-color').listen('input', ({ target }) => {
  board.setCSSProperty(
    '--light-squares-color',
    (target as HTMLInputElement).value
  );
});
VTag.select('#dark-squares-color').listen('input', ({ target }) => {
  board.setCSSProperty(
    '--dark-squares-color',
    (target as HTMLInputElement).value
  );
});
