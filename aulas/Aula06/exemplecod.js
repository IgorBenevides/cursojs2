
function calculateFibonacciTerm(termNumber) {
    let lastTerm = 1;
    let secondToLast = 0;

    if (termNumber === 0) {
        return 0;
    }
    if (termNumber === 1) {
        return 1;
    }

    let currentTerm = 2 ;
    while (currentTerm <= termNumber) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        
        currentTerm++;
        
    }
    return lastTerm
}

console.log (`o 7® termo da sequencia de Fibonacci é ${calculateFibonacciTerm(7)}`)