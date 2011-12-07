exports.scale = function (input) {
	// input should be an object with members 'value', 'powerOf', 'maxLen'

	var num = input.value;
	var result = '';
	var suffix = ['', 'K', 'M', 'G', 'T', 'P'];
	var index = 0, save = 0;
	var divisor;
	var powerOf = input.powerOf || 10;
	var maxLen = input.maxLen || 20;

	if (powerOf == 10) {
		divisor = 1000;
	} else if (powerOf == 2){
		divisor = 1024;
	} else {
		throw('invalid powerOf argument');
	}

	while (num >= divisor) {
		save = num;
		num = num / divisor;
		index++;
	}

	if (index > (suffix.length - 1))
		throw('input value too big');

	maxLen -= suffix[index].length; // allow for suffix character(s)

	result = num.toString();

	for (var p = result.length; result.length > maxLen; p--) {
		if (p < 1) {
			result = 'Err';
			break;
		} else {
			result = num.toPrecision(p);
		}
	}

	return (result + suffix[index]);
};
