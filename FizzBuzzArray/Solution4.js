const integerList = Array.from({ length: 100 }, (_, i) => i + 1);

//Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz", and any number divisible by both three and five with the word "fizzbuzz".

function solution(integerList,stringOne = "Fizz", stringTwo = "Buzz" , numOne = 3, numTwo= 5){
    let result = new Array
    
    integerList.forEach(element => {
        const isFizz = n => n % numOne ===0;
        const isBuzz = n => n % numTwo ===0;
        // if (isFizz(element)&&isBuzz(element)) result.push("FizzBuzz") ;
        // if (isFizz(element)) result.push("Fizz");
        // if (isBuzz(element)) result.push("Buzz");
        if () {
            
        } else {
            
        }


    });
}

console.log(solution(integerList))