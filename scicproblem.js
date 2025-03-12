const students = [
    {name:"shafiul bro",email:"shafiulhossain@gmail.com",avg:56,fiftyPercent:true},
    {name:"rokib bro",email:"rokib@gmail.com",avg:57,fiftyPercent:false},
    {name:"sakib bro",email:"shakib@gmail.com",avg:42,fiftyPercent:false},
    {name:"sojib bro",email:"sojib@gmail.com",avg:52,fiftyPercent:true},
    {name:"sunny",email:"sunny@gmail.com",avg:32,fiftyPercent:false}, 
    {name:"robin",email:"robin@gmail.com",avg:37,fiftyPercent:true},
    {name:"sohal",email:"sohal@gmail.com",avg:57,fiftyPercent:true},

]

// scic = avg = 48, fiftyPercent = true 

const findSCIC = (students) => {
const scic = students.filter
((person) =>person.avg >=48 && person.fiftyPercent === true);

const names = scic.map((p) =>p.name)
return names;

};
 const results = findSCIC(students)
 console.log(results)