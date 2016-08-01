'use strict';

describe('script', function () {
	var inputElem
	var outputElem

	beforeEach(function(){
		inputElem = document.querySelector('.message-field')
		outputElem = document.querySelector('.message-formatted')
	})

	it('input element exist', function () {
		expect(inputElem).toBeDefined()
	})

	it('output element exist', function () {
		expect(outputElem).toBeDefined()
	})

	it('left spaces are trimmed', function () {
		inputElem.value = '  test'
		expect(outputElem).toEqual('test')
	})
})

