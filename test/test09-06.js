/*ESERCIZI FACILI*/

{
    const spar = "----------------------------------"
/*es1*/

{

let objArr = [
    {name : "Luigi",
    lastname : "Russo",
    age : 27},
    {name : "Anna",
    lastname : "Verdoni",
    age : 31},
    {name : "Litzi",
    lastname : "Lacustre",
    age : 38},
    {name : "William",
    lastname : "Mazzetti",
    age : 17},
    {name : "Monster",
    lastname : "Truck",
    age : 42},
    {name : "Jason",
    lastname : "Pacchini",
    age : 36}
]
/*
let newObjArr = []

function getPeople(objArr){
    for(let i = 0; i < objArr.length; i++){
        if(objArr[i].age > 30){
            newObjArr.push(objArr[i].name + " " + objArr[i].age)
        }
        
    }
    console.log(newObjArr)
}
getPeople(objArr)
*/
function getPeople(persone){
    const newArr = []
    persone.forEach(el => {
        if(el.age > 30){
        newArr.push(`${el.name} ${el.lastname} ha ${el.age} anni`)
        }
    })
    return newArr
}
console.log(getPeople(objArr))
}

console.log(spar)
/*es2*/

{

const numArr1 = [1,2,3,4,5,6,7,8,9,10]
const numArr2 = [3,4,5,6,7,8,9,10,11,12]
const numArr3 = [23,12,3,65,5,6,7,8,77,11]
/*
function moltiplicaArray(numArr1,fattore){

    const newNumArr1 = []
    const newNumArr2 = []
    const newNumArr3 = []


    numArr1.forEach(number =>{
        newNumArr1.push(number * moltiplicatore)
    })
    
    numArr1.forEach(number =>{
        newNumArr2.push(number * moltiplicatore)
    })

    numArr1.forEach(number =>{
        newNumArr3.push(number * moltiplicatore)
    })
    return newNumArr1
    return newNumArr2
    return newNumArr3

}
console.log(moltiplicaArray(numArr1,3))
console.log(moltiplicaArray(numArr2,6))
console.log(moltiplicaArray(numArr3,2))
*/

function moltiplicaArray(numArr,fattore){
    return numArr.map(el => el * fattore)
}
console.log(moltiplicaArray(numArr1,4))
console.log(moltiplicaArray(numArr2,5))
console.log(moltiplicaArray(numArr3,2))
}

console.log(spar)
/*es3*/

{
let mySet = new Set([1,2,3,4,5])
let mySet2 = new Set([1,7,3,4,6])

function unisciSet(set1,set2){
    const newSet = new Set()
    set1.forEach(number =>{
        if(set2.has(number)){
            newSet.add(number)
        }
    })
    return newSet
}

console.log(unisciSet(mySet,mySet2))
}

console.log(spar)
/*es4*/

{
const myObj = 
            {
            name : "Luigi",
            lastname : "Russo",
            rate : 99
            }

function salutaPersona(obj){
    const keys = Object.keys(obj)
    if(!keys.includes("rate")){
        console.log("nessun rate rilevato")
    }
    else if(obj.rate >= 0 && obj.rate < 11){
        console.log(`il rate di ${obj.name} è basso`)
    }
    else if(obj.rate >= 11 && obj.rate < 51){
        console.log(`il rate di ${obj.name} è medio`)
    }
    else if(obj.rate >= 51 && obj.rate < 101){
        console.log(`il rate di ${obj.name} è alto`)
    }
}        
salutaPersona(myObj)
}

console.log(spar)

}

/*ESERCIZI MEDI*/

{
    /*ES1*/ 
    const spar = "--------------------------"
{


const date1 = new Date()
const date2 = new Date("2023-06-08")

function calcolaGiorni(d1,d2){
    const differenzaInMillisecondi = d1.getTime() - d2.getTime()
    const giorniTrascorsi = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 *24))
    
    if (giorniTrascorsi <= 0) {
        throw new Error("La seconda data non può essere precedente o pari alla prima data.");
      }
    return giorniTrascorsi
}
console.log(calcolaGiorni(date1,date2))


}

 /*ES2*/ 
 console.log(spar)

{
const obj1 = {
    name : "Mario",
    lastname : "Rossi",
    age : 30
}
const obj2 = {
    name : "Mario",
    lastname : "Rossi",
    age : 30,
    rate : 20
}

function confrontaOggetti(obj1,obj2){
    if(JSON.stringify(obj1) == JSON.stringify(obj2)){
        console.log("gli oggetti sono identici")
    }
    else{console.log("gli oggetti sono differenti")}
}

confrontaOggetti(obj1,obj2)
}

 /*ES3*/ 
console.log(spar)

{
const array = [10,20,30,40,50]

function mappaNumeri(array,funzione){
    const nuovoArray = array.map(funzione)
    console.log(nuovoArray)
    }

    mappaNumeri(array, el => el * 2)
    mappaNumeri(array, el => el + 10)
}

console.log(spar)

}

/*ESERCIZIO DIFFICILE*/

{
    const people = `[
        {
        "name": "Mario",
        "lastname": "Rossi",
        "age": 20,
        "rate": 52
        },
        {
        "name": "Luigi",
        "lastname": "Verdi",
        "age": 7,
        "rate": 65
        },
        {
        "name": "Peach",
        "lastname": "Pink",
        "age": 32,
        "rate": 98
        },
        {
        "name": "Anna",
        "lastname": "Bianchi",
        "age": 47,
        "rate": 22
        }
        ]
        `
    const myObj = JSON.parse(people)
   

    function dammiPersonaggio(obj,string){
        try {
            
            if(typeof string !== "string"){
                throw new Error(Error.message)
            }

            else if(string === "cicla"){
                obj.forEach(person => {
                    console.log(person)
                })
            }
            else if(string === "giovane"){
               let younger = obj[0]
               obj.forEach(person =>{
                if(younger.age < person.age){
                    younger = person
                }
               })
               console.log(`il personaggio più giovane è ${younger.name} ${younger.name} ed ha ${younger.age}`)
            }
            else if(string === "migliore"){
                let bestRate = obj[0]
                for(let i = 0; i < obj.length; i++){
                    if(bestRate.rate < obj[i].rate){
                        bestRate = obj[i]
                    }
                }
                console.log(`il personaggio con il rate più alto è ${bestRate.name} con un rate di ${bestRate.rate}`)
            }
            else if(string === "peggiore"){
                let worstRate = obj[0]
                for(let i = 0; i < obj.length; i++){
                    if(worstRate.rate > obj[i].rate){
                        worstRate = obj[i]
                    }
                }
                console.log(`il personaggio con il rate più bassso è ${worstRate.name} con un rate di ${worstRate.rate}`)
            }
            
            
        } catch (error) {
            console.error("il secondo paramentro non è una stringa!!!")
        }
        
       
    }
dammiPersonaggio(myObj,"giovane")
}



