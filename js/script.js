let i = 1;

function add(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    console.log("Hodnota inputu je: ", input)
    console.log("Hodnota outputu je: ", output)
    output.innerHTML += i + ". " + input.value + "<br>";
    i++;
}

function add2() {
    let lastMessage = output.innerHTML.split("<br>").slice(-2, -1)[0]; // Získá poslední zprávu
    output.innerHTML = output.innerHTML.replace(lastMessage, lastMessage + "💀"); // Přidá emoji
}

function del() {
    let output = document.getElementById("output");
    output.innerHTML = ""; // Smaže všechny zprávy
    i=1;
}

