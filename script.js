console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');

    let ages = [];
        ages.push(3, 9, 23, 64, 2, 8, 28, 93) // pushing the required numbers into the array
    console.log(ages);

console.log('');



console.log('1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array ') ;
{
    let result = ages[ages.length - 1] - ages[0]
    console.log(result)
}
console.log('');



console.log('1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).');

    ages.push(50);
    console.log(ages);
{
    let result = ages[ages.length - 1] - ages[0]
    console.log(result);
}
console.log('');



console.log('1c. Use a loop to iterate through the array and calculate the average age. ');

    let sum = 0;

    for (let i = 0; i < ages.length; i ++) {
    sum += ages[i];
}
    const averageAge = sum / ages.length;
    console.log(averageAge);
    console.log('');



console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');

    let names = [];
    names.push('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');
    console.log(names);
console.log('');



console.log('2a. Use a loop to iterate through the array and calculate the average number of letters per name.');

    let totalLetters = 0;
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length;
    }

    const averageLetters = totalLetters / names.length;
    console.log(averageLetters);
    console.log('');



console.log('2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

    let allNames = '';
    for (let i = 0; i < names.length; i++) {
        allNames += names[i] + ' ';
    }
    console.log(allNames);
    console.log('');



console.log('3. How do you access the last element of any array?');
    
    console.log('   By using index "arrayName.length - 1" because this is where the last element in any array is located.');
    console.log('');

    

console.log('4. How do you access the first element of any array?');

    console.log('   You can access the first element of an array by using "arrayName[0]" because the first element is located at index 0. ');
    console.log('');



console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');

    let nameLengths = [];

    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }

    console.log(nameLengths); 
    console.log('');



console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ');

    let sum1 = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        sum1 += nameLengths[i];
    }
    console.log(sum1);
    console.log('');



console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times')

    function repeatWord(word, n) {
        let repeatedWord = "";
        for (let i = 0; i < n; i++) {
            repeatedWord += word;
        }
        return repeatedWord;
    }

    console.log(repeatWord('Hello', 3));
    console.log('');



console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name');

    function fullName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }

    console.log(fullName('John', 'Doe'));
    console.log('');


console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

    let numbersArray = [25, 25 ,25 ,25] 
   
    function greaterThan100(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum > 100; //returns true or false 
    }
    console.log(greaterThan100(numbersArray));
    console.log('');



console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');

    function returnAverage(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i ++) {
        sum += array[i];
    }
        const averageArray = sum / array.length;
        return averageArray;
    }
    console.log(returnAverage(numbersArray));
    console.log('');


console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

    let testArray1 = [1, 2, 3, 4];
    let testArray2 = [2, 4, 6, 8];

    function compareArrays(array1, array2) {
        let sum1 = 0;
        let sum2 = 0;
       
        for(let i = 0; i < array1.length; i++) {
            sum1 += array1[i];
        }
        for(let i = 0; i < array2.length; i++) {
            sum2 += array2[i];
        }
        const average1 = sum1 / array1.length;
        const average2 = sum2 / array2.length;
        return average1 > average2; // Returns true or false
    }

    console.log(compareArrays(testArray1, testArray2))
    console.log('');



console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

    function willBuyDrink(isHotOutside, moneyInPocket) {
        if (isHotOutside === true && moneyInPocket > 10.50) {
            return true;
        } else {
            return false;
        }
    }

    console.log(willBuyDrink(true, 10.51));
    console.log('');



console.log('13. Create a function of your own that solves a problem.');

// Created my own function that acts as an atm with a balance and withdrawl amount
    function atm(balance, withdrawalAmount) {
         if (withdrawalAmount > balance) {
            return "Insufficient funds";
        } else if (withdrawalAmount <= 0) {
            return "Invalid withdrawal amount";
        } else {
        let newBalance = balance - withdrawalAmount;
            return "Transaction successful, new balance: $" + newBalance;
    }
  }
console.log(atm(100, 25));


