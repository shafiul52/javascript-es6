const people  = [
    {
        id:1,  
        name: "shafiul Alam",
        age:30,
        occupation:"software Engineer",
        contact: {
              email:"shafiulhossain52@gmail.com"
        },
        address:{
            street:"123 main road",
            city: "dhaka",
            state:"netro",
            zip: "943"
    
        },
        social:{
            twitter:"@shafiul"
        },

        hobbies:
            ["coding", "reading","football"]

    },


    {
        id:2,  
        name: "pinto",
        age:25,
        occupation:"graphic designer",
        contact: {
              email:"xyx52@gmail.com",
              phone : " 27-23-34"
        },
       
        hobbies:
            ["coding", "reading","football"]
       
    },


    {
        id:3,  
        name: "khirul",
        age:40,
        occupation:"marketing manager",
        contact: {
              email:"ramin@gmail.com",
              phone:" 123-456-7890"
        },
        address:{
            street:"789 oak state",
            city: "gazipur",
            state:"baluka",
            zip: "3456"
    
        },
        
        hobbies:
            ["drawing", "running","golf"]
    },

];

// people.map((person) =>{
// const sentence = `person'name is ${person.name}.city:${person?.address?.city || "N/A"}`
// console.log(sentence)

// })

// const x = people.find((p) =>p.age == 40)
// console.log(x.name)