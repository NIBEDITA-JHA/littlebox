const student = [
    {
        name: "shruti",
        age: "20"
    },
    {
        name: "riyali",
        age: "18"
    },
    {
        name: "nibedita",
        age: "21"
    }
];

function namesandage(acc, item) {
    acc[item.name] = item.age
    return acc
}
const names = student.reduce(namesandage,{})
console.log(names)


