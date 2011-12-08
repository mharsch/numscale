var should = require('should');

var numscale = require('../numscale');
var input = {};

describe('numscale', function () {

	describe('scale function', function () {
		it('should return a string', function () {
			input.value = 1;
			input.powerOf = 10;
			numscale.scale(input).should.be.a('string');
		});

		it('should return 1K given 1024 powerOf 2', function () {
			input.value = 1024;
			input.powerOf = 2;
			numscale.scale(input).should.eql('1K');
		});

		it('should return 1K given 1000 powerOf 10', function () {
			input.value = 1000;
			input.powerOf = 10;
			numscale.scale(input).should.eql('1K');
		});

		it('should return 900K given 900,000 base_10', function () {
			input.value = 900000;
			input.powerOf = 10;
			numscale.scale(input).should.eql('900K');
		});

		it('should return 1.5K given 1500 powerOf 10', function () {
			input.value = 1500;
			input.powerOf = 10;
			numscale.scale(input).should.eql('1.5K');
		});

		it('should return 1.5G given (1024^3 * 1.5) powerOf 2',
		    function () {
			input.value = 1610612736;
			input.powerOf = 2;
			numscale.scale(input).should.eql('1.5G');
		});
	

		it('should not accept an invalid powerOf arg', function () {
			input.powerOf = 8;
			should.throws(function () {
				numscale.scale(input);
			});
		});

		it('should accept maxLen and not exceed it', function () {
			input.value = 1600;
			input.powerOf = 2;
			input.maxLen = 4;
			numscale.scale(input).length.should.be.below(5);
			numscale.scale(input).should.eql('1.6K');
		});

		it('should indicate failure (Err) if maxLen is too small',
		    function () {
			input.value = 1023;
			input.powerOf = 2;
			input.maxLen = 3
			numscale.scale(input).should.match(/^Err/);
		});

		it('should handle the zero case',
		    function () {
			input.value = 0;
			numscale.scale(input).should.eql('0');
		});
	


	});
});
