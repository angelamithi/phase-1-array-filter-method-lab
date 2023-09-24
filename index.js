// Code your solution here
const findMatching= function(drivers,name='Bobby'){
   const newDriversArray=[];
    for (const driver of drivers){
    if (driver.toUpperCase() === name.toUpperCase())
    {
        newDriversArray.push(driver)
    }
}
    return newDriversArray;
   }
   
const fuzzyMatch = function(drivers,name='Sa'){
const newDriversArray=[];
for(const driver of drivers){
    if(driver.slice(0,2)===name){
        newDriversArray.push(driver);
    }
}
return newDriversArray;

}

function matchName(drivers,name='Bobby'){
    const newDriversArray=[];
    for(const driver of drivers){
        if(driver.name===name){
            newDriversArray.push(driver)
        }
    }
    return newDriversArray;

}