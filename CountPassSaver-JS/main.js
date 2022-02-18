// let count = 0
// document.getElementById("count-el").innerText = 5

// let myAge = 29
// let humanDogRatio = 7

// let myDogAge= myAge * humanDogAge

// console.log(myDogAge)

// initialize the count as 0
// listeb for clicks on the increament button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment (){
//     console.log("you just cliked me now")
// }

// function logout(){
//     console.log(42)
// }

// // logout()
// let lapsCompleted = 0

// function increamentLap(){
//      lapsCompleted = lapsCompleted + 1
// }

// increamentLap()
// increamentLap()

// console.log(lapsCompleted)

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count +=1
    countEl.textContent = count
}

// function save() {
//     console.log(count)
// }

// let myName = "akinpelu abiodun matthew"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + myName 

// console.log(myGreeting)

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}