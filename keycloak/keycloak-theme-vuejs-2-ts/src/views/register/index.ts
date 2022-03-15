import Vue from 'vue';
import index from './index.vue';

const environment = document.querySelector('#environment');
if (environment) {
  new Vue({
    provide<Environment>() {
      return {
        environment: JSON.parse(String(environment.textContent))
      };
    },
    render: (h: any) => h(index)
  }).$mount('#app');
}
