const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach loop
companies.forEach(company => console.log(company.name))

// filter function
// This method returns an array applying a specified check
const CanDrink = ages.filter(age => age >= 21)
// console.log(CanDrink)

const retailCompanies = companies.filter(company => company.category === "Retail")
// console.log(retailCompanies)

// index return the current number of each element
const oldCompanies = companies.filter((company,index) => {
    return company.start >= 1980 && company.start < 1990
})
console.log(oldCompanies)

const tenYearCompanies = companies.filter(company => {
    const diff = company.end - company.start;
    return diff >= 10
})
console.log(tenYearCompanies)

// using the map function
const companyNames = companies.map((company,index) => {
    return `${company.name} : ${index}`
})
console.log(companyNames)

const agesSquare = ages.map(age => age*age)
console.log(agesSquare)

const doubleAgesSquare = ages
    .map(age => age*age)
    .map(doubleAge => doubleAge*2);

console.log(doubleAgesSquare)

// sort function sorts the array on a given basis
const sortedCompanies = companies.sort(function(c1,c2) {
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortedCompanies)

// reduce is used for many functions
const ageSum = ages.reduce((total,age) => {
    return total + age;
}, 0)
console.log(ageSum)