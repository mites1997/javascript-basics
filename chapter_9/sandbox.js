const scores = [10, 30, 15, 25, 50, 40, 5];

const result=scores.filter((score)=>{
    return score>20;
})

console.log(result);


const salePrices=scores.map((score)=>{
  return score/2;
});

console.log("prices"+salePrices);


const result2=scores.reduce((acc,curr)=>{
if(curr>50)
{
  acc++;
}
return acc;
},0);

console.log(result2);



const firstscore=scores.find((score)=>{

  return score>20;
});

console.log(firstscore);



scores.sort();

console.log(scores);


const filtered=scores.filter(product=>product.price>20);



const now=new Date();
const before=new Date('February 1 2019 7:30:59');
console.log(now);


console.log(typeof now);
console.log(now.getFullYear());
console.log(now.getTime(),before.getTime());
console.log(now.toTimeString());
console.log(now.getTime()-before.getTime());
const mins=Math.round(now.getTime()-before.getTime()/1000/60);
console.log(mins);

//rest operator
const double=(...nums)=>{
  console.log(nums);
  return nums.map(num=>num*2);

}

const res=double(1,2,3,4);
console.log(res);

//spread

const people=['shaun','rye','crystal'];
console.log(...people);


//symbol datatype

const symbolone=Symbol();

console.log(symbolone);


//async code
console.log(1);
console.log(2);

setTimeout(()=>{
  console.log('callbakc function fired');
},2000);
console.log(3);
console.log(4);



