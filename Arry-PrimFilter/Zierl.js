x = new Array(100).fill().map(e => Math.round(Math.random() * 999) + 2);

function isPrime(num) {
    if (num % 2 === 0 || num % 3 === 0) return false;
    y = 5;
    while (y * y <= num) {
        if (num % y === 0 || num % (y + 2) === 0) return false;
        y += 6;
    }
    return true;
}

primeNumbers = x.filter(isPrime);
primeNumbers.sort((a, b) => a - b);

console.log("Ursprüngliches Array:");
console.log(x);
console.log("Primzahlen:");
console.log(primeNumbers);

console.log("Zierl Pascal 2DAIF")