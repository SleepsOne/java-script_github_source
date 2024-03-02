// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const xyzabc = '23';

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const calcAge = birthYeah => 2037 - birthYeah;

console.log(calcAge(2003));
*/
// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// Nhiệm vụ gần đây nhất của chúng tôi là: "Đưa ra một loạt nhiệt độ của một ngày, tính toán biên độ nhiệt độ. Hãy nhớ rằng đôi khi có thể có lỗi cảm biến."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 20, 15, 14, 9, 5];

// find the min , max temparature, and return abs(max - min)
// sensor
// cảm biến
// console.log(typeof 'error');

// const calcTempAplitude = function (temp) {
// let mx = -1e9,
//   mn = 1e9;
// for (let i = 0; i < temperatures.length; i++) {
//   if (Number(temperatures[i])) {
//     mx = Math.max(mx, temperatures[i]);
//     mn = Math.min(mn, temperatures[i]);
//   }
// }
// return mx - mn;
// };

// console.log(calcTempAplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calcTempAmplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let mx = -1e9;
  let mn = 1e9;
  for (let i = 0; i < temp.length; i++) {
    if (Number(temp[i])) {
      mx = Math.max(mx, temp[i]);
      mn = Math.min(mn, temp[i]);
    }
  }
  return mx - mn;
};

console.log(calcTempAmplitude([1, 2, 3], [-7, 'duc', 0]));
*/

//////////////////////////////
// DEBUGGING (FIXING ERRORS)
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius: ')),
//   };

//   // console.log(measurement);
//   // console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// //// A) IDENTIFY BUG
// //// Xác định lỗi
// console.log(measureKelvin(10));

/*
const calcTempAmplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let mx = -1e9;
  let mn = 1e9;
  for (let i = 0; i < temp.length; i++) {
    if (Number(temp[i])) {
      // debugger;
      mx = Math.max(mx, temp[i]);
      mn = Math.min(mn, temp[i]);
    }
  }
  return mx - mn;
};

console.log(calcTempAmplitude([1, 2, 3], [-7, 'duc', 0]));
*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Với một loạt nhiệt độ tối đa dự báo, nhiệt kế hiển thị một chuỗi với các nhiệt độ này.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const temp = [12, 5, -5, 0, 4];

function printForecast() {
  let str = '';

  for (let i = 0; i < temp.length; i++) {
    debugger;
    str += `${temp[i]}ºC in ${i + 1} days ... `;
  }
  str = '... ' + str;
  return str;
}

console.log(printForecast());
