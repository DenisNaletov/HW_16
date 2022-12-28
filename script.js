const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

// task_1 Select and print all married person

console.log("task_1 Select and print all married person:\n"+JSON.stringify(database.filter(function (person) {
    return(person.isMarried) })));

// task_2 Print database sorted by age ASC

console.log("task_2 Print database sorted by age ASC:\n"+
    JSON.stringify(database.sort(function (a,b){
    if (a.age > b.age) return 1;
    if (a.age ===b.age) return 0;
    if (a.age < b.age) return -1;
})));

//task_3 Calculate average age

console.log('task_3 Calculate average age: '+database.reduce(function (acc, value, index, array){
    return Math.round((acc + value.age) / array.length);
}, 1));

//task_4 Print statistic by country

console.log('task_4 Print statistic by country:'+
    JSON.stringify(database.reduce(function (acc, item){
    if(acc[item.country]){
        acc[item.country]++;
    } else {
        acc[item.country] = 1;
    }
    return acc;
}, {})))

//task_5 Print married person sorted ASC by name, not married DESC by
// age and average age of married person.

console.log("task_5 Print married person sorted ASC by name:\n"+
    JSON.stringify(database.filter(function (person) {
    return(person.isMarried) }).sort(function (a,b){
        if (a.name > b.name) return 1;
        if (a.name ===b.name) return 0;
        if (a.name < b.name) return -1;
    })));
console.log("task_5 Print not married sorted DESC by age:\n"+
    JSON.stringify(database.filter(function (person) {
    return(!person.isMarried) }).sort(function (a,b){
    if (a.age > b.age) return -1;
    if (a.age ===b.age) return 0;
    if (a.age < b.age) return 1;
})));
console.log('task_5 Print average age of married person: '+
    database.filter(function (person) {
    return(person.isMarried) }).reduce(function (acc, value, index, array){
    return Math.round((acc + value.age) / array.length);
}, 1));

//task_6 Remove user by position (name)

console.log(database.filter(function(NamePerson) { return NamePerson.name === 'Jane' }));

