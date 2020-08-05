var birthday = new Date('June 21, 2018 16:44:23'); 
  var date1 = birthday.getDate();  
  var day1 = birthday.getDay();  
  var year1 = birthday.getFullYear();  
  var hour1 = birthday.getHours();  
  var ms1 = birthday.getMilliseconds();  
  var m1 = birthday.getMinutes();  
  var mth1 = birthday.getMonth();  
  var time1 = birthday.getTime();  
  var s1 = birthday.getSeconds();  
  var offset = birthday.getTimezoneOffset();  
  var date2 = birthday.getUTCDate();  
  var day2 = birthday.getUTCDay();  
  var year2 = birthday.getUTCFullYear();  
  var hour2 = birthday.getUTCHours();  
  var ms2 = birthday.getUTCMilliseconds(); 
  var um1 = birthday.getUTCMinutes(); 
  var umth = birthday.getUTCMonth(); 
  var us = birthday.getUTCSeconds(); 
  
 console.log(date1); 
 console.log(day1); 
 console.log(year1); 
 console.log(hour1); 
 console.log(ms1); 
 console.log(m1); 
 console.log(mth1); 
 console.log(time1); 
 console.log(s1); 
 console.log(offset); 
 console.log(date2); 
 console.log(day2); 
 console.log(year2); 
 console.log(hour2); 
 console.log(ms2); 
 console.log(um1); 
 console.log(umth); 
 console.log(us);    

 // Result
//  21
// 4
// 2018
// 16
// 0
// 44
// 5
// 1529577863000
// 23
// -360
// 21
// 4
// 2018
// 10
// 0
// 44
// 5
// 23