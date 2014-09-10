#numscale.js

A Node.js module for converting numbers into pretty strings with suffixes
to indicate scale (Kilo, Mega, Giga, etc.)

##Examples:

	>var ns = require('numscale');
	>var myThroughput = {value: 1000000000, powerOf: 10, maxLen: 5};
	>ns.scale(myThroughput)
	'1G'

	>var myCapacity = {value: 1073741824, powerOf: 2, maxLen: 5};
	>ns.scale(myCapacity)
	'1G'

	>var myCounter = {value: 654345443, powerOf: 10, maxLen: 6};
	>ns.scale(myCounter)
	'654.3M'

	>var myMemory = {value: 43322466, powerOf: 2, maxLen: 7};
	>ns.scale(myMemory)
	'41.316M'

##Usage:

The scale() method takes an object argument.  The members of the argument object
are as follows:

* value (required) - the number to be scaled and formatted
* powerOf (optional) - either 2 or 10: sets scaling factor (defaults to 10)
* maxLen (optional) - maximum length of the string to be returned (default 20)

'value' must be a non-negative positive integer within the safe JavaScript range.
