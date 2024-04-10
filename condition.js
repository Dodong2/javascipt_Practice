/* notes */
/*

=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal

*/


/* Coin Flip */
let num = Math.random()

if(num > 0.5) {
    console.log(`Heads`)
} else {
    console.log(`Tails`)
}


/* Morning or Afternoon */
const time = 12

if (time > 6)
console.log('Good Afternoon')
else 
console.log('Good Morning')

/* pH levels */
const ph = 5

if (ph > 7)
console.log(`${ph} is basic`)
else if (ph < 7)
console.log(`${ph} is Acidic`)
else
console.log(`${ph} is Neutral`)