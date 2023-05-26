const raceResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre']
const results = ([first,second,third, ...rest]) =>{
    return{
        first,
        second,
        third,
        rest
    }
}


console.log(results(raceResults))