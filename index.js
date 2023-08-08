const prompt = require('prompt-sync')();


function print(x) {
    console.log(x)
}
print(document.getElementById("counts"))

function increase() {
    let counts = parseInt(document.getElementById('counts').innerText)
    counts+=1
    document.getElementById('counts').innerText = counts
    print(counts)
    
}
function save() {
    let counts =document.getElementById('counts').textContent + ' - '

    document.getElementById('record').textContent += counts
    
    document.getElementById('counts').innerText = 0
    //
    
    

    

}