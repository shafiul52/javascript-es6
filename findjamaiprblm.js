const polapain = [

{ Name: "abdul",job:"sorkari", salary:17000},
{ Name: "babul",job:"besorkari", salary:25000},
{ Name: "kabul",job:"sorkari", salary:21000},
{ Name: "habul",job:"besorkari", salary:47000},
{ Name: "jabul",job:"sorkari", salary:23000},
{ Name: "mabul",job:"besorkari", salary:55000},

];


// sorkari =20000 or besorkari  >=40000
const jamais = polapain.filter((pola) => (pola.job ==="sorkari"&& pola.salary >=20000) ||
(pola.job ==="besorkari"&& pola.salary >=40000) );


const lottery  = Math.floor(Math.random()*jamais.length)
console.log(jamais[lottery].Name," tumi jitacho ")