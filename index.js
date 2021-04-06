// Code your solution in this file!
const functionName = functionArguement => {
    //function parameters here
    return functionArguement;
}

function distanceFromHqInBlocks(location){
    return Math.abs(location-42);
}

const distanceFromHqInFeet = location => {
    let distanceInFeet = distanceFromHqInBlocks(location) * 264;
    return distanceInFeet;
}

const distanceTravelledInFeet = (start, finish) => {
    let blocks = Math.abs(start - finish);
    return (blocks * 264);
}

function calculatesFarePrice (start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400){
        return 0;
    } else if (feet < 2000){
        return (feet - 400) * 0.02;
    } else if (feet <= 2500){
        return 25;
    } else if (feet > 2500){
        return "cannot travel that far";
    }
}