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
	} else if (powerOf == 2) {
		divisor = 1024;
	} else {
		throw (new Error('invalid powerOf argument'));
	}

    if (input.value < Number.MIN_SAFE_INTEGER ||
        input.value > Number.MAX_SAFE_INTEGER) {
        return ('Err');
    }

	while (num >= divisor) {
		save = num;
		num = num / divisor;
		index++;
	}

	maxLen -= suffix[index].length; // allow for suffix character(s)

	result = num.toString();

	for (var p = result.length; result.length > maxLen; p--) {
        if (p < 1) return ('Err');
		result = num.toPrecision(p);
	}

	return (result + suffix[index]);
};

exports.padl = function (str, len) {
	// pad the left side of a string with spaces until it reaches 'len'
	
	var rval = '', i;

	for (i = 0; i < len - str.length; i++)
		rval += ' ';

	rval += str;

	return (rval);
}

exports.padr = function (str, len) {
	// pad the right side of a string with spaces until it reaches 'len'
	
	var rval = '', i;

	rval += str;

	for (i = 0; i < len - str.length; i++)
		rval += ' ';

	return (rval);
}
