const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};
//------------------------------
function decode(expr) {
	let res = [];
	expr = expr.split('**********');
	expr.forEach(element => res.push(decodeWord(element)))
	return res.join(' ')
}
//----------------------------
function decodeWord(word) {
	let res = '';
	word = separate(word);
	word.forEach(element => res += decodeLetter(element));
	return res
}
//----------------------------
function separate(word) {
	let res = [];
	for (let i = 0; i < word.length; i += 10) {
		res.push(word.slice(i, i + 10));
	}
	return res
}
//----------------------------
function decodeLetter(letter) {
	let res = '',
		a = '';
	for (let i = 0; i < 10; i += 2) {
		a = letter.slice(i, i + 2);
		res += a == '10' ? '.' : a == '11' ? '-' : '';
	}
	return MORSE_TABLE[res]
}

module.exports = {
	decode
}