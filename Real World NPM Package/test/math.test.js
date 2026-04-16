const {add,multiply} = require('../src/utils/Math.js')

test("the sum of two numbers",()=>{
    const array =[1,2,3,4,5];
    expect(add(8,2)).toEqual(10)
})

test("the multiply of two numbers",()=>{
    const array =[1,2,3,4,5];
    expect(multiply(8,2)).toEqual(6)
})