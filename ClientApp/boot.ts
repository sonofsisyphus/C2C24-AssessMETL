
import 'font-awesome/css/font-awesome.css';
import 'bootstrap';
import './css/site.css';
import 'vuetify/dist/vuetify.min.css';
import "vue-material-design-icons/styles.css"
import 'babel-polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';




Vue.use(Vuetify);
Vue.use(VueRouter);


const routes = [
    { path: '/', component: require('./components/test/test.vue.html') },
    { path: '/capabilities', component: require('./components/capabilities/capabilities.vue.html') },
    { path: '/capabilityassessments', component: require('./components/capabilityassessments/capabilityassessments.vue.html') },
    { path: '/core', component: require('./components/core/core.vue.html') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
