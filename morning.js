// hello world





  
  

const toRoman = (x) => {
    let romanString = '';
    while (x >= 1000) {
      x -= 1000;
      romanString += 'M'
    }
    while (x >= 500) {
      x -= 500
      romanString += 'D'
    }
    while (x >= 100) {
      x -= 100
      romanString += 'C'
    }
    while (x >= 50) {
      x -= 50
      romanString += 'L'
    }
    while (x >= 10) {
      x -= 10
      romanString += 'X'
    }
    while (x >= 5) {
      x -= 5
      romanString += 'V'
    }
    while (x >= 1) {
      x -= 1
      romanString += 'I'
    }
    console.log(romanString)
}

// toRoman(4829)



// next perfect square
// get the square root
// add one to the number
// square the number up
// return value
// if it's not an int then return -1



const perfectSquare = (n) => {
    if (Math.sqrt(n) % 1 !== 0) {
      return -1
    } else {
      return (Math.sqrt(n) + 1) ** 2;
    }
  }
  
  
  // console.log(50%1)
  // console.log(50.24%1)
  
  
  // logic is that it needs to have rows
  // input is the number of rows
  // each row adds two spaces to each side of the start
  // first array has the * in the middle
  //  * + (2*n) = length of array
  
  const arrow = (n) => {
    let temporary = []
    for (x=0; x<n; x++) {
      let pushThis = ['*']
      for (y=0; y<n-1; y++) {
        pushThis.unshift(' ')
        pushThis.push(' ')
      }
      pushThis.slice(n-x,x,"*")
      temporary.push(pushThis)
    }
    return temporary
  }
  
  // console.log(arrow(3))
  
  
  
  var wishlist = [
      {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
      {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
      {name: "Card Game", size: "small", clatters: "no", weight: "light"}
  ];
  
  var presents = [
      {size: "medium", clatters: "a bit", weight: "medium"},
      {size: "small", clatters: "yes", weight: "light"}
  ];
  
  
  // const guessGifts = (x, y) => {
  //   guess= []
  //   for(i=0; i<presents.length; i++) {
  //     if (wishlist[i.size] === presents[i.size] && wishlist[i.clatters] === presents[i.clatters] && presents[i.weight] === wishlist[i.weight]) {
  //       guess.push(wishlist[i].name)
  //     }
  //   }
  //   return guess
  // }
  
  const guessGifts = (x, y) => {
    guess= []
    for(i=0; i<y.length; i++) {
      if (x[i.size] === y[i.size] && x[i.clatters] === y[i.clatters] && x[i.weight] === y[i.weight]) {
        guess.push(x[i].name)
      }
    }
    return guess
  }
  
  
  // console.log(guessGifts(wishlist, presents))
  
  
  
  //
  
  const nbYear = (w,x,y,z) => {
    yearsTotal = 0
    eachIncrease = w
    percent = (x / 100) + 1
    while(eachIncrease <= z) {
      eachIncrease = eachIncrease * percent + y
      yearsTotal++
    }
    return yearsTotal
  }
  
  // console.log(nbYear(1500, 5, 100, 5000))
  // console.log(nbYear(1500000, 2.5, 10000, 2000000))
  
  
  
  
  
  
  
  // function that takes in an array of 10 intergers (between 0 and 9), return the numbers in the phone of a phone number
  // 
  
  const phoneNumber = (arr) => {
    emptyString = ''
    arr = arr.map(String)
    emptyString += `(${arr[0]+arr[1]+arr[2]}) `
    emptyString += `${arr[3]+arr[4]+arr[5]}-`
    emptyString += arr[6]+arr[7]+arr[8]+arr[9]
    return emptyString
  }
  
  // console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
  
  
  
  
  
  
  
  // take in a string of numbers where one will be the "odd" one out. The odd one out can be even or odd. - outlier
  // create function that takes in an array as an argument
  // provide a even and odd array
  // loop through the numbers using modulo to verify if odd or even and put it into the correct variable
  // if statement - return which one only has length of one
  
  //take in one argument
  const outlier = (n) => {
      let odd = []
      let even = []
  
    //loop through arguments length
      for(i=0; i<n.length; i++) {
  
        //if it can modulo to zero it's even and if it can't it's odd
        if(n[i] % 2 === 0) {
          even.push(n[i])
        } else {
          odd.push(n[i])
        }
      }
  
    //check to see which one has 1 length and return that one's first position in the array
      if(odd.length === 1) {
        return odd[0]
      } else if (even.length === 1) {
        return even[0]
      } else {
        return('error')
      }
    }
    
    // x = [2, 4, 0, 100, 4, 11, 2602, 36]
    // y = [160, 3, 1719, 19, 11, 13, -21]
    // z = [2,3,4,5]
    // console.log(outlier(x))
    // console.log(outlier(y))
    // console.log(outlier(z))
  
  // loop through the string
  // first move all of the m to the front
  // then loop through the string again returning all of the s to the front
  // finally return the string now that it's all in the correct oder
  
  const tshirts = (string) => {
    shirtSizes = ['s','m','l']
    returnString = ''
    for (let x=0; x<shirtSizes.length; x++) {
      for (let i=0; i<string.length; i++) {
        if (string[i] === shirtSizes[x]) {
          returnString += string[i]
        }
      }
    }
    return returnString
  }
  
  // console.log(tshirts('slsmmsllsmsmlmsls'))
  
  // take a string of shirt sizes (s, m, l), and sort them.
  function shirtSorter(sizesString) {
      // create an array of the string to use array methods -> [s, m, l]
      let sizesArr = [...sizesString];
      // first, we sort by alphabet -> [l, l, m. m, s, s]
      // then, we reverse them to get small sizes first -> [s, s, m, m, l, l]
      // finally, we join them together in a string, which permanently changes sizesArr -> s,s,m,m,l,l
      sizesArr.sort().reverse().join();
      // return the sizesArr as a string, all sorted with commas for added readabillity
      return sizesArr;
  }
  
  // console.log(shirtSorter('ssmsmslll'))
  
  // take in a number and return just each number from the lowest number to the highest
  // Use the modulo operator
  
  // let x = 314
  // console.log(x % 10)
  // console.log(x/10 % 10)
  // console.log(x/100 % 10)
  
  // tens=10;
  
  function printMe(inputNum) {
    let tens = 10
    for (let i=0; i<inputNum.length; i++) {
      if(i===0) {
        console.log(Math.floor(inputNum % 10))
        tens *= 10
        continue;
      } else {
        console.log(Math.floor(inputNum/tens % 10))
        tens *= 10
        continue;
      }
    }
  }
  
  // printMe(128)
  
  // const printNum = (num) => {
  //   let something;
  
  //   while(num > 0){
  //     console.log(Math.floor(num % 10))
  //     num /= 10
  //   }
  // }
  
  
  // loop through string and check for a number, when number is returned add that to the loop and take that letter and put it into a new string
  //return string
  
  const decoder = (code) => {
    let x = '';
    for (i=0; i<code.length-1; i++) {
      if (typeof ++code[i] === 'number') {
        y = ++code[i]
        x = x + code[i+y]
        i = i+y
      }
    }
    return x
  }
  
  // console.log(decoder('0h2xce5ngbrdy'))
  // console.log(decoder('3vdfn'))
  // console.log(decoder('2bna0p1mp2osl0e'))
  // console.log(decoder('0y4akjfe0s'))
  
  
  // take in array and find the lowest number before the highest number
  // it should be able to return how much you can make for each
  // return 0 if you couldn't get a positive return
  // taken in arr - check if arr[i] is 
  
  const best = (arr) => {
    let bestPrice = 0;
    for(let i=0; i<arr.length; i++) {
      for (let j=i+1; j< arr.length; j++) {
        if (arr[j] - arr[i] > bestPrice) {
          bestPrice = arr[j] - arr[i]
        }
      }
    }
    return bestPrice
  }
  
  // console.log(best([15, 10, 20, 22, 1, 90]))
  
  
  
  
  // create function that takes one argument which is a word
  // check to make sure that the word is a string and if it is continue
  //return the word in all lower case
  //create a list which has vowels listed
  //create two variables, one represents vowels and one reps not vowels
  //
  
  
  function hasMoreVowels(word) {
    vowelsCount = 0;
    nonVowels = 0;
    vowelsList = ["a", "e", "i", "o", "u"];
    word = word.toLowerCase()
    for (let i = 0; i<word.length; i++) {
      if (vowelsList.includes(word[i])) {
        vowelsCount += 1;
      } else {
        nonVowels += 1;
      }
    }
    if (vowelsCount > nonVowels) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  }
  
  
  
  // hasMoreVowels('Mice')
  // hasMoreVowels('graph')
  // hasMoreVowels('Aal')
  // hasMoreVowels('mOose')
  
  
  
  
  
  // I would need to take the input and verify that it's a string first
  // If it is a string then I'll break down the input string and store it in a temporary 
  
  //for loop iterate through the numbers while also 
  //i * -1 would return a negative equivolent
  
  function isPalindrom(x) {
    for (i=0; i<x.length-1 ;i++) {
      if (x[i] === x[0]){
        if (x[i] === x[x.length-1]) {
          continue
        }
      }
      if (x[i] !== x.length-1) {
        return false
      }
    }
    return true
  }
  
  // console.log(isPalindrom("noon"))
  
  function palindrome(string) {
      for(let i = 0; i < string.length-1; i++) {
          if(string[i] !== string[string.length - 1 - i]){
              return false;
          }
      }
      return true;
  }
  
  // console.log(palindrome("noon"))
  
  