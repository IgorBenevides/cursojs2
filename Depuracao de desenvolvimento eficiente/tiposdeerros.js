function calculateSquareRoot (radicand) {
    return radicand ** (1/2)
}

function calculatePhytagoras (l1,l2) {
    const sum = l1**2 + l2 **2 
    return calculateSquareRoot (sum)
}

console.log (`A hipotenusa de lados 3 e 4 é : ${calculatePhytagoras(3 ,4)}`)