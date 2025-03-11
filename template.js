// const Name = 'shafiul'
// const age = 43
// const job = "bekar" 

// // amr name shafiul , aamr boys 43.ami akn bekar

// const sentence = "amar name "+Name+" .amar boyos"+age+".ami akhon "+job;

// const sentence1 = `amr name${Name}.amr boyos ${age}.ami akhon ${job}`;


// console.log(sentence)
// console.log(sentence1)



const myInfo = {
    name : "shafiul Alam",
    age : 27,
    address: "Netrakona",
    sosourName:"Abdul Motalib",
    sosurBari: "B.baria",
    subjects:["bangla","english","math" ]
 
};

const sentence = `amar naam ${myInfo.name}.amr subjects gulo${myInfo.subjects.map((sub) => sub).join(" ")} `
console.log(sentence)
