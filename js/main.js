const total = 10;
const emailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`
const emailArray = [];
let totalEmail;

axios.get(emailUrl)
    .then(response => {
        const emailRandom = response.data.response;        
        console.table(emailRandom); 
        for (let i = 0; i < 10; i++) {
            totalEmail = emailArray.push([i] + emailRandom);
            console.log(emailArray);
          }
    });




   