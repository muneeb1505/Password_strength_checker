var psw = document.getElementById('passw');
        var msg = document.getElementById('messg');
        var str = document.getElementById('strength');
        
        psw.addEventListener('input', () => {
        if(psw.value.length > 0){
            msg.style.display = "block";
        }
        else{
            msg.style.display = "none";
        }
        if(psw.value.length < 4){
         str.innerHTML = "weak";
         str.style.color = "red";
        }
        else if(psw.value.length >= 4 &&  psw.value.length < 8){
            str.innerHTML = "Moderate";
            str.style.color = "yellow";
        }
        else if(psw.value.length >= 8){
            str.innerHTML = "Strong";
            str.style.color = "green";
        }
        })