const total = 10;
const emailUrl = `https://flynn.boolean.careers/exercises/api/random/mail`
const emailArray = [];
let totalEmail;
const containerCard = document.querySelector(".container-card");
let cardHTML = ``;

axios.get(emailUrl)
    .then(response => {
        const emailRandom = response.data.response;        
        console.table(emailRandom); 
        
        for (let i = 0; i < 10; i++) {
            totalEmail = emailArray.push([i] + emailRandom);
            console.log(emailArray);
          }
          for (let i = 0; i < 10; i++){
            cardHTML +=`
                    <div class="card-list">
                        <ul class="list">
                            <div class="li">${emailArray[i]}</div>
                        </ul>
                    </div>
            `
    }
    containerCard.innerHTML = cardHTML;
    
    });










   