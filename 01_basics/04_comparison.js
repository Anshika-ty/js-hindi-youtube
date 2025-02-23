console.log(2>1);//t console.log(2>=1);//t
console.log(2<1);//f
console.log(2==1);//f
console.log(2!=1);//t

console.log("2">1);//t
console.log("02">1);//t

//generally avoid null and undefined comparsions 
console.log(null>0);//f /*comparisons convert null to  0 and then gets compared to 0*/
console.log(null==0);//f
console.log(null >=0);//t

console.log(undefined ==0);//f
console.log(undefined >0);//f
console.log(undefined <0);//f

//=== strict comparison
console.log("2"===2);//f
//as it compares both the value and the datatype


