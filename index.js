// No. 3 Question
//Bolatito just got admitted to Greenfield High School as an Arts student. 
//To commence her studies, she needs to know the subjects she will be taking as 
//an Arts student. All students have to take the General subjects.

//The subjects for each class group are as follows:
//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics

//Using if…else conditional statement, write a program that will help Bolatito
 //determine the subjects she will be taking for the session using her class group. 
 //Also, in the case of an invalid class group, your output should be the General 
 //subjects. 

 let classGroup ='Arts Subjects';  // declare the classGroup variable

 if (classGroup == 'Science Subjects'){     //if the classgroup is science subject, the output will be the 2 statement below
        console.log('Physics, Chemistry, Biology, Technical Drawing, English and Mathematics');
        console.log('Bolatito cannot take this subjects');
 }
 
 else if (classGroup =='Social Science Subjects'){  //if the classgroup is social science subject, the output will be the 2  statement below
    console.log('Accounting, Commerce, Marketing, Geography, English and Mathematics');
    console.log('Bolatito cannot take this subjects');
 }

 else if (classGroup == 'Arts Subjects'){  //if the classgroup is art subject, the output will be the 2 statement below
    console.log('Government, Economics, Literature, History, English and Mathematics');
    console.log('Bolatito can take this subjects');
 }

 else {   //if the classgroup did not fall into any of the dubjects, will be the  statement below
    console.log('English, Mathematics');
 }


 /*  No. 5 Question
 Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. 
 The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3.
The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.” */

let positiveNum = 50; // takes positive number
let pwr = [];  // stores the number
Math.pow(positiveNum, y)

for (let i =1; i <= positiveNum; i++){
   pwr = 2**i;

}
console.log();

