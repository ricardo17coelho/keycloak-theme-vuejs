import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import index from "./index.vue";

const environment = document.querySelector("#environment");
if (environment) {
  new Vue({
    vuetify,
    render: (h) => h(index),
    provide<Environment>() {
      return {
        "environment":
        JSON.parse(String(environment.textContent))
      }
  },
  }).$mount('#app');
}
