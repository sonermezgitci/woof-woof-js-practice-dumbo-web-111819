const dogsDiv = document.querySelector("#dog-bar")
// console.log(dogsDiv)
fetch("http://localhost:3000/pups")
.then(r=> r.json())
.then(function(dogData){
    dogData.forEach( dog => {
       dogSpan = document.createElement("span")
       dogSpan.innerText = dog.name
       //innerText is text is inside of span tag
       dogsDiv.prepend(dogSpan)
       dogSpan.addEventListener("click", function(evt){
    const showDogsDiv = document.querySelector("#dog-info")
    const dogImg = document.createElement("img")
    dogImg.src =dog.image
    //this is for HTML/(image)attr. coming from json
    const dogH2 = document.createElement("h2")
    dogH2.innerText = dog.name
    const dogButton = document.createElement("button")
    if (dog.isGoodDog === true){
        dogButton.innerHTML = `"Good Dog!"`
    } else {
        dogButton.innerText = `"Bad Dog!"`
    }   
showDogsDiv.prepend(dogImg,dogH2,dogButton)

    
    dogButton.addEventListener("click", function(evt){
    // console.log(evt)
    if (dog.isGoodDog){
        dogButton.innerHTML = `"Bad Dog!"`
        dog.isGoodDog = false;
    console.log(dog.isGoodDog)

    } else {
        dogButton.innerHTML = `"Good Dog!"`
        dog.isGoodDog = true;
    console.log(dog.isGoodDog)

    } 
    fetch(`http://localhost:3000/pups/${dog.id}`,{
    method: 'PATCH', 
    headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  },
  body:JSON.stringify({
    
    isGoodDog: dog.isGoodDog//because its the attr of dog which has to update
   })
  
        
    })  
    })//CLICK EVENT
 })//add.eventListener
});//ForEACH
    
})//FETCH
.then(r=> r.json())
.then()






















//json syntax

// .then(r=> r.json())
// .then(function(dogData){

// }