function chkLeapYear(){
    let year = 4000
    if((year%4 === 0) || ((year%100 !==0)&&(year%400 ===0))){
        console.log(year," is a leap year")
    }else{
        console.log(year," is a not leap year")
    }
}
chkLeapYear()