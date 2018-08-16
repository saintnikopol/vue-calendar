/**
 * Created by alex on 7/8/18.
 */
import Vue from 'vue';
import style from './css/style.scss';

import calendarTab from './vue/TabCalendar.vue';
import navHeader from './vue/NavHeader.vue';

Vue.component('calendar-tab', calendarTab);
Vue.component('nav-header', navHeader);



const app = new Vue({

  el: '#app',


}).$mount('#app');


