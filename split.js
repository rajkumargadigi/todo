// function split(){
//     let Person=document.getElementById('persons');
//     let amu=document.getElementById('amount');
//     if(Person.value>1){
//         let bill=(amu.value/Person.value);
//         let result=bill+'Rs'
//         document.getElementById('result').innerText=result
//     }
    
// 


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    if(persons.value >= 1){
        let bill = (amount.value / persons.value).toFixed(2);
        let result = bill + " Rs each"
        document.getElementById('result').innerText = result;
    }
} 



