import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import index from './index.vue';

const environment = document.querySelector('#environment');
console.warn("environment", environment);
console.warn("environment textContent", environment?.textContent);
if (environment) {
  new Vue({
    vuetify,
    // provide<Environment>() {
    //   return {
    //     environment: JSON.parse(String(environment.textContent))
    //   };
    // },
    render: (h: any) => h(index)
  }).$mount('#app');
}
