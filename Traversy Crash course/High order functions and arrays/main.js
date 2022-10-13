// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach
/* Using the forEach method to loop through the ages array and log the age and index of each element in
the array. */
// ages.forEach((age, index)=> {
//     console.log(`${age}  ${index}`);
// });
//FILTER
// console.log(ages.filter(age => age >= 21));

/* Filtering the companies array and returning the companies that have a category of Retail. */
// const retail = companies.filter(company => company.category == "Retail");
// console.log(retail);

/* Filtering the companies array and returning the companies that started between 1980 and 1990. */
// const old = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(old);


/* Filtering the companies array and returning the companies that lasted at least 10 years. */
// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.log(lastedTenYears);

//map
//const companyNames = companies.map(company => company.name);

// console.log(companyNames);

/* The above code is using the map method to get the square root of each age in the ages array. */
// const squareRootAges = ages.map(age => Math.sqrt(age));

// console.log(squareRootAges);

//sort

// const sortedCompanies = companies.sort((a, b)=> {
//     return a.start - b.start;
// });

// console.log(sortedCompanies);

//Sorting ages

// const sortedAges = ages.sort((a, b)=> {
//     return a - b;
// });

// console.log(sortedAges);

//reduce

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);


//Getting total years for companies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);


// console.log(totalYears);

//Combined methods
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a,b)=> a - b)
//     .reduce((total, age)=> total + age, 0);

// console.log(combined);


//const luckyNumbers = [65, 72, 69, 64, 9, 79, 69, 56, 19, 90, 78, 13, 57, 87];

//forEach
//map
//filter
//sort
//reduce

// const org = luckyNumbers.forEach((num, index) => 
// console.log(`${num} ${index}`));

//mapped
//const newNumber = luckyNumbers
  //  .map(num => num * num) //multiplying the numbers by themselves
    //.filter(num => num % 2 == 0) //getting even numbers
    //.sort((a, b) => a - b) //sorting in ascending order
    //.reduce((total, num) => total + num, 0); //getting the sum
//console.log(newNumber);

const universities = [
    {
        name: 'University of Nairobi',
        location: 'Nairobi',
        start: 1976,
        category: 'All'
    },
    {
        name: 'Kenyatta University',
        location: 'Nairobi',
        start: 1981,
        category: 'All'
    },
    {
        name: 'Jomo Kenyatta University of Agriculture and Technology',
        location: 'Juja',
        start: 1984,
        category: 'Science'
    },
    {
        name: 'University of Eldoret',
        location: 'Eldoret',
        start: 1985,
        category: 'Science'
    },
    {
        name: 'Dedan Kimathi University of Agriculture and Technology',
        location: 'Nyeri',
        start: 1990,
        category: 'Science'
    },
    {
        name: 'Moi University',
        location: 'Eldoret',
        start: 1979,
        category: 'All'
    },
    {
        name: 'Technical University of Kenya',
        location: 'Nairobi',
        start: 1983,
        category: 'Science'
    }
];

// console.log(universities);
//Universities with the category of science
// const scienceUni = universities.filter(uni => uni.category == 'Science');
// console.log(scienceUni);

//Oldest to youngest universities
// const OldToYoung = universities.sort((a, b) => a.start - b.start);

// console.log(OldToYoung);

//Location of universities
// const uniLoc = universities.map(uni => uni.location);

// console.log(uniLoc);

//Names of universities

//Add existence years of universities

const newNumber = universities.reduce((total, uni) => total + (2022 - uni.start), 0);

console.log(newNumber);

















