function numberJoy(n) {
    let sort=(n.toString().split('').map(Number).reduce((a,b)=>a+b,0));
    return n-(sort*sort.toString().split('').reverse().join(''))===0;
}