/* generare 10 indirizzi email e stamparli in pagina all’interno di una lista. */



  const { createApp } = Vue

  createApp({
    data() {
      return {
        emailList: [],
      }
    },
    mounted(){ 

        for(let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            
                this.email = response.data.response;
                console.log(this.email);
                this.emailList.push(this.email);
            
        })

        }
    
    }
  }).mount('#app')



  
