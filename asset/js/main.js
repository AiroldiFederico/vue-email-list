




const { createApp } = Vue

createApp({

  // VARIABILI VUE
  data() {
    return {
      
      email: '',



    }
  },

  //chiamata function al caricamento della pagina
  created(){


  },

  // FUNZIONI VUE
  methods: {

    attivaApi(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then ((response) => {this.email = response.data.response})
      
    },

    
  }

}).mount('#app')
