let countries={
    "India": "delhi",
    "Italy":"Rome",
    "Japan":"Tokyo",
    "france":"Paris",
    "Australia":"Canberra"
}
// option 1
let output={}
for (let key of Object.keys(countries)){
    let country=key
    let capital=countries[key]
    output[capital]=country
}
console.log(output)

// option 2
for (let key of Object.keys(countries)){
    let country=key
    let capital=countries[key]
    countries[capital]=country
}