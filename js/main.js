'use strict';

// //Vue.JS---
// const app = Vue.createApp ({
//     //template: '<h1>Déjà Vue</h1><h2>Hello World</h2>'
//     data() {
//         return {
//             message: 'I send a message to the world with Vue JS',
//             image: 'img/Vue.js_Logo_2.svg.png'
//         }
//     }
// })

// app.mount('#app');

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title: 'Sono il titolo della pagina',
            img: 'img/Vue.js_Logo_2.svg.png'
        }
    }
})

setTimeout(function(){
app.mount('#app'); //id #app deve essere presente nell'HTML, come un div generico
},4000);
  