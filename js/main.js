'use strict';

//Vue.JS---
const app = Vue.createApp ({
    //template: '<h1>Déjà Vue</h1><h2>Hello World</h2>'
    data() {
        return {
            message: 'I send a message to the world with Vue JS'
        }
    }
})

app.mount('#app');
  