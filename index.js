const hq = 42

function distanceFromHqInBlocks(startingBlock){

    if (startingBlock > hq) {
        return startingBlock - hq
        
    } else {
        return hq - startingBlock
        
    }

}


function distanceFromHqInFeet(startingBlock) {

    return distanceFromHqInBlocks(startingBlock) * 264
    
}


function distanceTravelledInFeet(beginningBlock, endingBlock) {

    if (beginningBlock > endingBlock) {
        return (beginningBlock - endingBlock) * 264
        
    } else {
        return (endingBlock - beginningBlock) * 264
        
    }

}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
if (feet <=400) { 
    return 0

} else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * .02

} else if (feet > 2000 && feet < 2500) {
    return 25
} else {
    return "cannot travel that far"

}
}