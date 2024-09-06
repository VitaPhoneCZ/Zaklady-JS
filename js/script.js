let i = 1;

function add(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    /*document.getElementById("output").innerHTML = input.value;*/

    /*document.getElementById("output").innerHTML = document.getElementById("input").value;*/
    
    console.log("Hodnota inputu je: ", input)
    console.log("Hodnota outputu je: ", output)

    output.innerHTML += i + ". " + input.value + "<br>";
    i++;
}