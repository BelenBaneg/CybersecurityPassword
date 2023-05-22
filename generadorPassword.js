generateSecurePassword = (n,ip)=> {
    const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=<>?";
    //Regular Expression
    const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
    finding = true
    while (finding) {
        let password = "";
        if (ip.value.length<1){
            for (let i = 0; i < n - ip.value.length; i++) {
              password += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS .length));
            }
        } else {
            let word = ip.value
            mix = word.toLowerCase() + word.toUpperCase() + "0123456789!@#$%^&*_+-=<>?";
            console.log(mix);
            for (let i = 0; i < n; i++) {
                password += mix.charAt(Math.floor(Math.random() * mix.length));
                console.log("password")
            
            }
            console.log(password)
        }
        try {
            const isValid = REGEX.test(password);
            console.log(isValid)
            if (isValid) {finding = false; return password}
        }
        catch (e){
            return "Halgo ha ocurrido, por favor ingrese una palabra y vuelva a intentarlo"
        }
        
    }

}

showPassword = n => {
    const input = document.getElementById("frase")
    document.getElementById("password").textContent = "Generando..."
    setTimeout(() => {
    let newPassword = generateSecurePassword(n,input)
    document.getElementById("password").textContent = newPassword
    }, 300);
}


document.querySelector(".c12").addEventListener("click",()=>{
    showPassword(12)
})
document.querySelector(".c16").addEventListener("click",()=>{
    showPassword(16)
})
document.querySelector(".c20").addEventListener("click",()=>{
    showPassword(20)
})