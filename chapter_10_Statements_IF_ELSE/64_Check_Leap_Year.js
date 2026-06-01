let year=2024;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a LEAP YEAR");
}else {
    console.log(year + " is NOT a LEAP YEAR");
}   