const m = [1,2,3,4,5,6,"hh", "9",80,100];
let mOnlyNumbers = m.filter(value => /^-?\d+\.?\d*$/.test(value));
console.log(mOnlyNumbers);
for(let i= 0; i < m.length; i++){
    const mSquared = Math.pow(m[i], 2);
    console.log(mSquared);
}