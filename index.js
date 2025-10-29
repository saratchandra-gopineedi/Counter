let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function incrementCount() {
    count += 1
    countEl.innerText = count
}

function save() {
    let saveStr = count + " - "
    console.log(count)
    saveEl.textContent = saveEl.textContent + saveStr
}

function reset() {
    count = 0
    countEl.textContent = 0
}