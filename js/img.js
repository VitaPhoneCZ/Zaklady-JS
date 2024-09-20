var i=1;

function img() {
    var imgURL = document.getElementById("input").value;
    let imgID = document.getElementById("imgID");
    console.log("Hodnota imgURL je: ", imgURL);
    console.log("Hodnota imgID je: ", imgID);
    imgID.src = imgURL;

    let input = document.getElementById("name_input");
    let output = document.getElementById("output");
    console.log("Hodnota inputu je: ", name_input);
    console.log("Hodnota outputu je: ", output);
    output.innerHTML += i + ". " + input.value + "<br>";
    i++;
}