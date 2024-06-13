function generateRandomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function sumOddOrEven (num1, num2){
    let sum = num1 + num2;
    // guardo se la somma è pari o dispari
    let result = sum % 2 === 0 ? "pari" : "dispari";
    return result;
}
