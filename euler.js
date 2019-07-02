/* Stephen Matulis

stephen.matulis@gmail.cpm

Total Time:
Not sure, maybe like somewhere around the 2 hour range

* Sample output:

25164150
problem6: 2.939ms
31875000
problem9: 4.937ms
21124
problem17: 2.338ms

How did I run it? 

in the directory, ran "node euler.js"

*/




/*
* I first choose this problem as a warm up to get my hands dirty.
* The process of solutioning was pretty straight forward. 
* You need to keep track of the sum of the squares. To do this you simply need to square a number, then 
* add it to a variable where you keep track of the overal total. 
* At the same time you need to add all the values with out any maipulation together then then square the overall total
* At the end you need to subtract both values from one another to ge tthe answer
*
*RESULT: 25164150
*/


function problem6() {
    //initialize variables
    let squareOfSums = 0;
    let sumOfSquares = 0;
    let i = 1

    //loop from 1 to 100
    for (i; i <= 100; i++) {

        //calculate the sqaure of i
        squareOfSums += i * i;

        //add i to other numbers
        sumOfSquares += i;
    }

    //caluclate the result
    let result = (sumOfSquares * sumOfSquares) - squareOfSums
    console.log(result)
}


/*
* I then moved on to a higer problem
* I selected 9 becasue it seemed pretty straight forward. In that you sor of have to work backwards based off a pattern
* We know that a < b <c in this case, so lets start with a = 1 and look at values for b that are larger than a. Based off the given
* We know a + b + c = 1000, so know the value of a and b, we can calculate c. Now having all 3 values for a,b,c we can test to see if the
* values for in the pythagorean therom, a^2 + b^2 = c^2. The problem was the product of a b c together so if our test  matches lets multiply and break the for loop
* and be done
*
* RESULT: 31875000
*/

function problem9() {

    //initalize variable
    let a = 1

    //increment a loop
    for (a; a <= 1000; a++) {

        //initalize b here so we dont have to calculate b each time in loop
        let b = a + 1;

        //increment b loop
        for (b; b <= 1000; b++) {

            //finding c based of given information and knowing a & b
            let c = 1000 - a - b;

            //Now that we have all our 3 varibles test with  pythagorean therom
            if (c * c == a * a + b * b) {

                //if true get result and break loop
                let result = (a * b * c)
                console.log(result)
                break
            }
        }
    }
}

/*
* 17 is one of my favorite numbers so I choose this one
* Determing the strings from 1-100 was easy. 
* I knew a array have to be created in order to determine the values of the string
* I made the array for 1-20 that was simple
* Figuring out what to do for 20-100 was a little interesting
* I knew that there would be a partern for each 10 digit set.
* I also knew i had to split the numbers by indiviudal digit inorder to determine what string would go in the tensDict and one area
* I under stood for the 1's that i could simply grab the digit and acces my ones array.
* For the tensDict digit it was trickier.
* If I put it in array i couldnt  access it like I was for the ones array
* After a little trial and error and thinking, I determine if I dont use the first two spaces of the array, then grabbing the tensDict
* digit would match up with the array. At this point i was good up to 100.
* At this point I knew for every hundred the word hundred would be printed.
* Determing what went after the hundred was tricker. I knew I could use the previous logic
* It took me a while of trying to figure out how to use the prevous logic even though I had 3 digits in place secifically to use the ones but not the teens strings
* I remembered that I could use a mod to get the remander, which would be a two digit numner. Using that mod number i could
* use similar logic from above inline to create a string by checking to see if the value was less than 20 and get the correct value. I then could use the original hudnred number and
* figure out the remander of the string by checking each number
* Finally I added a logical conditon to check for when i was 1000
* Along the way I would check the string lenght and add the number to a counter of the over all word length
* Once through the loop I printed the result
*
* Result: 21124
*/

function problem17() {

    //initalize dictonary, counters, and strings

    let onesAndTeensDict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let tensDict = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    let count = 0

    let i = 1

    let str = ""

    //loop up to 1000
    for (i; i <= 1000; i++) {

        //do this if I is less than 20
        if (i < 20) {

            //increment count
            count = count + onesAndTeensDict[i].length
            continue
        }
        //do this is is greater than 20 and less than 100
        if (i < 100) {

            //get the string value for the tens digit. Check to see if there is a zero if the ones place. If so add nothing to the string, if else add that stirng value
            str = tensDict[i.toString()[0]] + (onesAndTeensDict[i.toString()[1]] == "zero" ? "" : onesAndTeensDict[i.toString()[1]])

            //increment count
            count = count + str.length
            continue
        }
        //do this if i is 1000
        if (i == 1000) {

            //set string
            str = "onethousand"

            //increment count
            count = count + str.length
            break
        }

        //We know every hundred digit will have hundred in front of it
        str = onesAndTeensDict[i.toString()[0]] + "hundred"
        //incrment the string count
        count = count + str.length

        // Need to do a mod on the number to break it down into a two digit number
        let mod = i % 100

        //Check the case there is a new hundred. like 100 or 200 or etc. In this case add nothing. If no we know we need the word and. We then check the digits with similar logic from about to put in the corret wording
        let result = (mod === 0 ? '' : "and" + (mod < 20 ? onesAndTeensDict[mod] : tensDict[i.toString()[1]] + (onesAndTeensDict[i.toString()[2]] == "zero" ? "" : onesAndTeensDict[i.toString()[2]])))

        //increment count
        count = count + result.length
    }

    //the loop has ended. This is the result print it
    console.log(count)
}


console.time("problem6");
problem6()
console.timeEnd("problem6");

console.time("problem9");
problem9()
console.timeEnd("problem9");

console.time("problem17");
problem17()
console.timeEnd("problem17");


