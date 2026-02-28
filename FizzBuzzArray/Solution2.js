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
            if ([...replace].some(char => !isNaN(char))) {
                getIndex.push(Number(item))
            } else {
                let replace = item.replaceAll(numOneStr,stringOne).replaceAll(numTwoStr,stringTwo)
                getIndex.push(replace)
            }
        } else {
            getIndex.push(Number(item))
        }
     });
    return getIndex

   
}

console.log("result")
//console.log("33".includes("3"))
console.log(solution(integerList))

