const wizards = [
  {
    id: 1,
    name: "Hairy Potter",
    house: "Gryffindor",
    isExpelled: false
  },

  {
    id: 2,
    name: "Draco Malfoy",
    house: "Slytherin",
    isExpelled: false
  },

  {
    id: 3,
    name: "Newt Scamander",
    house: "Hufflepuff",
    isExpelled: false
  },

  {
    id: 4,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    isExpelled: false
  }
]



const app = document.querySelector("#app")
const volde = document.querySelector("#voldemort")

const renderToDom = (array) => {
  let domString = ""
  let expelledString = ""
  for (let i = 0; i < array.length; i++) {
    if(array[i].isExpelled == false) {
   domString += `<div class="card text-center" style="width: 18rem;"> 
    
    <div class="card-header">
    ${array[i].house}
    </div>

    <div class="card-body">
      <p class="card-text">${array[i].name}</p>
    </div>

    <button  class="remove" id="expel--${array[i].id}">Expel</button>

  </div>`
    
    console.log(app.innerHTML)
    app.innerHTML = domString
    }
  else if(array[i].isExpelled == true) {
  expelledString += `<div class="card text-center" style="width: 18rem;"> 
    
  <div class="card-header">
  ${array[i].house}
  </div>

  <div class="card-body">
    <p class="card-text">${array[i].name}</p>
  </div>`
} volde.innerHTML = expelledString

}

}
renderToDom(wizards)



// const expel = (event) => {
  
//   let expelString = ""
//   console.log(expel)
//   for (let i = 0; i < event.length; i++) {
//     expelString += `<div class="card text-center" style="width: 18rem;"> 
     
//      <div class="card-header">
//      ${event[i].house}
//      </div>
 
//      <div class="card-body">
//        <p class="card-text">${event[i].name}</p>
//      </div>
 
//      <button id="expel">Expel</button>
 
//    </div>`
//      }
//      app.innerHTML = expelString

// }


const expel = (event) => {
  let expelledArray = []

  if(event.target.id.includes("expel")){
    //remove pet once we get the right button
    //determine the correct object, get id
    const [,id] = event.target.id.split("--");
    //identify where in the array is it
    const index = wizards.findIndex(obj => obj.id === Number(id));
    wizards[index].isExpelled = true
    console.log(wizards[index].isExpelled);
    //re-render with the array
    expelledArray.push(wizards.splice(index, 1)[0])
    //render with removal in place
    
    renderToDom(expelledArray);
  }
}
app.addEventListener("click", expel)


// const gryfBtn = document.querySelector("#gryf")
// const slytBtn = document.querySelector("#slyt")
// const raveBtn = document.querySelector("#rave")
// const huffBtn = document.querySelector("#huff")
// const allBtn = document.querySelector("#all")

// gryfBtn.addEventListener("click" , () => {
//   filter(wizards, "Gryffindor")
// })
// slytBtn.addEventListener("click" , () => {
//    filter(wizards, "Slytherin")
// })
// raveBtn.addEventListener("click" , () => {
//   filter(wizards, "Ravenclaw")
// })
// huffBtn.addEventListener("click" , () => {
//   filter(wizards, "Hufflepuff")
// })
// allBtn.addEventListener("click" , () => {
//   renderToDom(wizards)
// })

// const filter = (array, wizHouse) => {
//   let wizArray = array.filter((wiz) => wiz.type == wizHouse)

//   renderToDom(wizArray)
// }



const form = document.querySelector('form')
  
const addWiz = (event) => {
  event.preventDefault()
  const newWizard = {
    id: wizards.length + 1, 
    name: document.querySelector("#wizardName").value,
    type: document.querySelector('input[name="traitRadio"]:checked').value,
    isExpelled: false,
  }; 
  wizards.push(newWizard)
  renderToDom(wizards)
  form.reset()
}
form.addEventListener('submit', addWiz)
