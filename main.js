/* generare 10 indirizzi email e stamparli in pagina all’interno di una lista. */



  const { createApp } = Vue

  createApp({
    data() {
      return {
        email: 'Hello Vue!'
      }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            
                this.email = response.data.response
                console.log(this.email)
            
        })
    }
  }).mount('#app')
