const petOwner = {
    name: "jolonto Kholil",
    contact: {
        phone:"54565466",
        email:"xyz@gmail.com"
    },

    pet:{
        name:"Lofie",
        info:{
            color:"black",
            weight:"1.2kg",
        },

    },
 food: ["apple","orange","pepeya"]
};
// console.log(petOwner.contact.phone)
// console.log(petOwner.pet.info.color)
// console.log(petOwner.address)
// console.log(petOwner.address?.houseNo)
console.log(petOwner?.food[1])


// optional chaining ?.