module.exports = function toReadable(number) {
	let oneToNine = {
		'0': '',
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
	function oneToNineCalc(number) {
		return oneToNine[number.toString()];
	}

	let tenToNineteen = {
		'10': 'ten',
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
	function tenToNineteenCalc(number) {
		return tenToNineteen[number.toString()];
	}

	let tenths = {
		'2': 'twenty',
		'3': 'thirty',
		'4': 'forty',
		'5': 'fifty',
		'6': 'sixty',
		'7': 'seventy',
		'8': 'eighty',
		'9': 'ninety'
	};
	function tenthsCalc(number) {
		let arr = [];
		return (tenths[(number.toString())[0]] + ' ' + oneToNineCalc(number.toString()[1])).trim();
	}

	let hundreds = {
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
	function hundredsCalc(number) {
		let num = Number(number.toString().slice(1));
		if (num <= 9) {
			return (hundreds[(number.toString())[0]] + ' ' + oneToNineCalc(num)).trim();
		} else if (num <= 19) {
			return (hundreds[(number.toString())[0]] + ' ' + tenToNineteenCalc(num)).trim();
		} else if (num >= 20) {
			return (hundreds[(number.toString())[0]] + ' ' + tenthsCalc(num)).trim();
		}
	}

	switch (number.toString().length) {
		case 1:
			if (number === 0) {
				return 'zero'
			};
			return oneToNineCalc(number);
			break;
		case 2:
			if (number <= 19) {
				return tenToNineteenCalc(number);
			} else if (number >= 20) {
				return tenthsCalc(number);
			}
			break;
		case 3:
			return hundredsCalc(number);
			break;
		default:
			break;
	}
}