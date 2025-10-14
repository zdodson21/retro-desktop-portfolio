calculator: 
	emcc -Os src/components/programs/calculator/calculator.c -o src/wasm/calculator.wasm --no-entry

test-calculator: clean-calculator-test
	gcc src/components/programs/calculator/test/calculator_test.c src/components/programs/calculator/test/helper.c src/components/programs/calculator/calculator.c -o calculator_test

clean-calculator-test:
	rm -f calculator_test
