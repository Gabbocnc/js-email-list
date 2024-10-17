const listEmail = document.querySelectorAll('.emailList > li')
//console.log(listEmail);



//ciclo per iterare all interno della node LI 
listEmail.forEach((element, index)=> {
    //chiamata axios per generare randomicamente un email 
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            //aggiungiamo ad LI un EMAIL
            element.textContent = response.data.response;
            //console.log(element);
        })
});
   

