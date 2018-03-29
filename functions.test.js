const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions");

test("returnTwo should return 2", () => {
    expect(returnTwo()).toEqual(2);
});

test("greeting should return Hello, Name.", () => {
    expect(greeting("James")).toEqual("Hello, James.");
    expect(greeting("Jill")).toEqual("Hello, Jill.");
});

describe("Math Functions", () => {
    test("add should return the sum of the two numbers", () => {
        expect(add( 1, 2 )).toEqual( 3 );
        expect(add( 5, 9 )).toEqual( 14 );
    }); 
    test("multiply() should return a dynamic product based on two number parameters.", () => {
        expect( multiply( 1, 2 ) ).toEqual( 2 );
        expect( multiply( 5, 9 ) ).toEqual( 45 );
      });
    
      test("divide() should return a dynamic quotient based on two number parameters.", () => {
        expect( divide( 2, 1 ) ).toEqual( 2 );
        expect( divide( 9, 3 ) ).toEqual( 3 );
      });
    
      test("subtract() should return a dynamic difference based on two number parameters.", () => {
        expect( subtract( 2, 1 ) ).toEqual( 1 );
        expect( subtract( 9, 3 ) ).toEqual( 6 );
      });
});



