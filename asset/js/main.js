




const { createApp } = Vue

createApp({

  // VARIABILI VUE
  data() {
    return {
      
      email: '',

      emails: [],


    }
  },

  //chiamata function al caricamento della pagina
  created(){


  },

  // FUNZIONI VUE
  methods: {

    attivaApi(){

      this.emails = [];

      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ((response) => {
          this.emails.push(response.data.response)
        });
      };
    },

    
  }

}).mount('#app')
