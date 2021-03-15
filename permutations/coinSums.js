// Given some dollar value in cents (e.g. 200 = 2 dollars, 1000 = 10 dollars)
//find all the combinations of coins that make up the dollar value.
//There are only pennies (1¢), nickels (5¢), dimes (10¢), and quarters (25¢) allowed.

/*
  I : int, represents amount of cents
  O : int, represents amount of unique permutations of coins to total input int
  C : n/a
  E : assume all inputs are valid

  Approach :
    Recurisve approach
    Start by adding 0 of each coin (going from largest to smallest i.e. quarter -> penny)
    When you get to the smallest coin fill the gap
     i.e. add as many pennies as it takes to sum to total
*/

let coinSums = (target) => {
  let coins = [25, 10, 5, 1];
  let result = 0

  let change = (index, sum) => {
    let coin = coins[index];
    if (coin === 1) {
      if (target % coin === 0) {
        result++
      }
      return;
    }
    while (sum <= target) {
      change(index+1, sum)
      sum += coin;
    }
  }

  change(0, 0)
  return result;
}

let test = () => {
  console.log(coinSums(25)); //should be 13
  console.log(coinSums(3)); //should be 1
  console.log(coinSums(200)); //should be 1463
}

test();