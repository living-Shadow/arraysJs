let people = ["Greg", "Mary", "Devon", "James"]
// 1
for(let i=0;i<people.length;i++){
    console.log(people[i])
}
// 2
people.shift()
// 3
people.pop()
// 4
people.unshift("Matt")
// 5
people.push("Akash")
// 6
for(let i=0;i<people.length;i++){
    console.log(people[i])
    if(people[i]=="Mary"){
        break
    }
}
// 7
let copy=people.slice(2)
// 8
console.log(people.indexOf("Mary"))
// 9
console.log(people.indexOf("Foo"))
// 10
people[0]="Alfa"
people.splice(people.indexOf("Devon"),1,"Elizabth","Artie")
// 11
let withBob=people.concat("Bob")