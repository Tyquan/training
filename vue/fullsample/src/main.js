import Vue from 'vue';
import CreateArticle from './components/CreateArticle.vue';
import App from './App.vue';


// library for routing our components
import VueRouter from 'vue-router';
// initialize vue-router with our Vue app
Vue.use(VueRouter);

// libraries to send HTTP request to the server
import VueAxios from 'vue-axios';
import axios from 'axios';
// initialize vueAxios and axios with our Vue app
Vue.use(VueAxios,axios);

// Routes
const routes = [
	{
		name: 'CreateArticle',
		path: '/',
		component: CreateArticle
	}
];

// create a new router for use
const router = new VueRouter({
	mode: 'history',
	routes: routes
});

// Connect Vue app the the id attribute app
new Vue(Vue.util.extend({router}, App)).$mount('#app');