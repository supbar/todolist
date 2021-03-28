require('./bootstrap');

import Vue from 'vue';
import App from './comps/app';

const app = new Vue({
  el: '#app',
  components: {
    App
  }
})