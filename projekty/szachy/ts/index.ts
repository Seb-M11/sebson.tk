import VTag from './vtag';

const div = new VTag('div');
div.append(div, 8);
VTag.select('.board').append(div, 8);
