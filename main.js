const listEl = document.querySelectorAll('.emailList > li')
console.log(listEl);

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

/* .then(response => {
    const data = (response.data.response)
})
 */

