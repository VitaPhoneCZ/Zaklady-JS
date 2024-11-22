function Control(){
    const password = document.getElementById('password').value;
    const controlPassword = document.getElementById('control_password').value;
    const nick = document.getElementById('nick').value;
    const code = document.getElementById('code').value;
    let output = document.getElementById('output');

    if (!nick || !password || !controlPassword || !code) {
        output.innerHTML = "Všechny pole musí být vyplněny";
    }
    else if (password !== controlPassword) {
        output.innerHTML = "Hesla se neshodují!";
    }
    else if (isNaN(code)) {
        output.innerHTML = "Code není číslo!";
    }
    else {
        output.innerHTML = "Jste úspěšně zaregistrován!";
    }

}