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

// console.log("connected js")

const peopleList = document.getElementById("people-list");
const personInfo = document.getElementById("person-info")


const renderPeopleList = (people) =>{
people.map((person) =>{

    const li = document.createElement("li")
    li.classList.add("cursor-pointer","text-blue-500","p-2")
    li.textContent = person.name;


    li.addEventListener("click",()=>{
        handlePersonClick(person.id)
    })

    peopleList.appendChild(li)
});

};

const displayPersonInfo = (person) =>{
    personInfo.classList.remove("hidden")
    document.getElementById("no-selection").classList.add("hidden")
    personInfo.innerHTML = `
    <h2 class="text-2xl font-bold mb-2">${person.name} </h2>
    <p> Number:${person?.contact?.phone || "N/A"} <p/>
    <p>City:${person?.address?.city || "N/A"} </p>

    <p>Hobbies:${person?.hobbies?.map((hobby) => hobby)} </p>
    
    `;



}


const handlePersonClick = (id) => {  
 const person = people.find((p) =>p.id == id)
 displayPersonInfo(person)
}



renderPeopleList(people);

