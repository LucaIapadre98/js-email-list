let data;

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => {
    data = response;
console.log(data);
});