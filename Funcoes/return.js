function calcbhaskara (a , b ,c) {
    const delta = b** 2 - 4 * a * c ;
    const x1 = (-b + calcRaizQuadrada(delta)) /(2 * a ) ;
    const x2 = (-b - calcRaizQuadrada(delta)) /(2 * a ) ;

    console.log (`os dois valores de X da parabola ao eixo x sao ${x1} e ${x2}`)

} ;

function calcRaizQuadrada (base) {
    return base ** (1/2);
}

calcbhaskara (2 , 3 ,-2);

function areatriangulo (b,a) {
   area = (b*a)/2;

   console.log (`area do triangulo é = ${area}`);
  
}

areatriangulo (5,7);


