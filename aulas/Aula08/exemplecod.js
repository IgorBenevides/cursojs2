
function calculateFibonacciTerm (termNumber) {

    if (termNumber === 0) {
        return 0;
    }
    if (termNumber === 1 ) {
        return 1;
    }

    return (
        calculateFibonacciTerm(termNumber - 1) +
        calculateFibonacciTerm(termNumber - 2)
    )


}

console.log(`O valor do termo numero 6 da sequencia de Fibonacci é ${calculateFibonacciTerm(6)}`);