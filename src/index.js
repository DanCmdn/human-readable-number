module.exports = function toReadable(number) {
	let num = number.toString();
	for (let i = number.toString().length; i < 3; i++) {
		num = `-${num}`;
	}

	let oneToNine = {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine'
	};
	let hundreds = oneToNine.map(element => {
		element += ' hundreed';
	})
	let hundreds['-'] = '';
	let hundreds = {
		'-': '',
		'1': 'one hundred',
		'2': 'two hundred',
		'3': 'three hundred',
		'4': 'four hundred',
		'5': 'five hundred',
		'6': 'six hundred',
		'7': 'seven hundred',
		'8': 'eight hundred',
		'9': 'nine hundred'
	};
	let firstPos = hundreds[num[0]]

	let tenUnderTwenty = {
		'-0': 'zero',
		'-1': 'one',
		'-2': 'two',
		'-3': 'three',
		'-4': 'four',
		'-5': 'five',
		'-6': 'six',
		'-7': 'seven',
		'-8': 'eight',
		'-9': 'nine',
		'01': 'one',
		'02': 'two',
		'03': 'three',
		'04': 'four',
		'05': 'five',
		'06': 'six',
		'07': 'seven',
		'08': 'eight',
		'09': 'nine',
		'10': 'ten'
		'11': 'eleven',
		'12': 'twelve',
		'13': 'thirteen',
		'14': 'fourteen',
		'15': 'fifteen',
		'16': 'sixteen',
		'17': 'seventeen',
		'18': 'eighteen',
		'19': 'nineteen'
	};
	let tenAfterTwenty;

	let secondPos = tenUnderTwenty['' + num[1] + num[2]];
	let arr = [];
	return arr.concat(firstPos, secondPos).join(' ');
}