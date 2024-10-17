const emaiilListEl = document.querySelectorAll('.emailList > li')
//console.log(emaiilListEl);
const resetEl = document.querySelector('.reset')
//console.log(resetEl);




//ciclo per iterare all interno della node LI 
function generateRandomEmail() {
    emaiilListEl.forEach((element, index) => {
        //chiamata axios per generare randomicamente un email 
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                //aggiungiamo ad LI un EMAIL
                element.textContent = response.data.response;
                //console.log(element);
            })
    })
}
;
//event listener per restartare la funzione
resetEl.addEventListener('click', generateRandomEmail);
//richiamo della funzione per generare 10 email al caricamento della pagina
generateRandomEmail()




