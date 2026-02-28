// create my array of number(integers)

const integerList = Array.from({length:100},(_,i) =>i+1);
//console.log(integerList)
//Create my Function

function solution(integerList,stringOne = "Fizz", stringTwo = "Buzz" , numOne = 3, numTwo= 5){
    // 1. transorm my integer list as a list of strings
    let stringList = integerList.map((v,_) =>JSON.stringify(v));
    //return stringList

    // 2. trnaform numOne and numTwo as string
    numOneStr = JSON.stringify(numOne);
    numTwoStr = JSON.stringify(numTwo);
    //return [numOneStr,numTwoStr]

    // 3. retrive the index where numOne and numTwo are present on list of strings.
    // 4. extract the vule and tranform it adding Fizz or Buzz 
    let getIndex = new Array();

     stringList.forEach((item, _) => {
        if (item.includes(numOneStr)||item.includes(numTwoStr) ) {
            let replace = item.replaceAll(numOneStr,stringOne).replaceAll(numTwoStr,stringTwo)
            getIndex.push(replace)
        } else {
            getIndex.push(Number(item))
        }
     });
    return getIndex

   
}

console.log("result")
//console.log("33".includes("3"))
console.log(solution(integerList))

// the solution is this --> not sure if that is corect 
// [
//   1,          2,       'Fizz',     4,       'Buzz',     6,
//   7,          8,       9,          10,      11,         12,
//   '1Fizz',    14,      '1Buzz',    16,      17,         18,
//   19,         20,      21,         22,      '2Fizz',    24,
//   '2Buzz',    26,      27,         28,      29,         'Fizz0',
//   'Fizz1',    'Fizz2', 'FizzFizz', 'Fizz4', 'FizzBuzz', 'Fizz6',
//   'Fizz7',    'Fizz8', 'Fizz9',    40,      41,         42,
//   '4Fizz',    44,      '4Buzz',    46,      47,         48,
//   49,         'Buzz0', 'Buzz1',    'Buzz2', 'BuzzFizz', 'Buzz4',
//   'BuzzBuzz', 'Buzz6', 'Buzz7',    'Buzz8', 'Buzz9',    60,
//   61,         62,      '6Fizz',    64,      '6Buzz',    66,
//   67,         68,      69,         70,      71,         72,
//   '7Fizz',    74,      '7Buzz',    76,      77,         78,
//   79,         80,      81,         82,      '8Fizz',    84,
//   '8Buzz',    86,      87,         88,      89,         90,
//   91,         92,      '9Fizz',    94,      '9Buzz',    96,
//   97,         98,      99,         100
// ]