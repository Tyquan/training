# Steps to create a Full Stack Vuejs App

## Step 1
> Create a package.json file

	{
	  "name": "fullsample",
	  "version": "1.0.0",
	  "description": "",
	  "scripts": {
	    "start": "webpack-dev-server"
	  },
	  "author": "",
	  "license": "ISC",
	  "devDependencies": {
	    "axios": "^0.16.2",
	    "babel-core": "^6.25.0",
	    "babel-loader": "^7.1.1",
	    "babel-plugin-transform-runtime": "^6.23.0",
	    "babel-preset-es2015": "^6.24.1",
	    "babel-preset-stage-3": "^6.24.1",
	    "babel-runtime": "^6.25.0",
	    "css-loader": "^0.28.4",
	    "file-loader": "^0.11.2",
	    "vue": "^2.4.2",
	    "vue-router": "^2.7.0",
	    "vue-axios": "^2.0.2",
	    "vue-loader": "^13.0.2",
	    "vue-template-compiler": "^2.4.2",
	    "webpack": "^3.4.1",
	    "webpack-dev-server": "^2.6.1"
	  }
	}

## Step 2
> Create a webpack.config.js file (for compiling New ES6 Javascript syntax to old ES5 Javascript syntax)

	module.exports = {
		// This is the "main" file which should include all other modules
		entry: './src/main.js',
		// Where should the compiled file go?
		output: {
			filename: 'bundle.js'
		},
		resolve: {
			alias: {
				vue: 'vue/dist/vue.js'
			}
		},
		module: {
			// Special compilation rules
			loaders: [
				{
					// Ask webpack to check: If this file ends with .js then apply some transforms
					test: /\.js$/,
					// Transform it with babel
					loader: 'babel-loader',
					// dont transform node_modules folder (which dont need to be compiled)
					exclude: /node_modules/
				},
				{
					// Ask webpack to check: If this file ends with .vue then apply some transforms
					test: /\.vue$/,
					// dont transform node_modules folder (which dont need to be compiled)
					exclude: /(node_modules|bower_components)/,
					// Transform it with vue
					use: {
						loader: 'vue-loader'
					}
				}
			],
		},
		devServer: {
			port: 3000
		}
	};

## Step 3
> Create an index.html file in the root directory

	<!DOCTYPE html>
	<html>
	<head>
		<title>Full Stack Vuejs Example</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	</head>
	<body>
		<div id="app"></div>
		<script type="text/javascript" src="bundle.js"></script>
	</body>
	</html>

## Step 4
> create a folder called src because all of our components will be stored in this folder. In that folder create one file called main.js.

	// main.js file
	import Vue from 'vue';
	// library for routing our components
	import VueRouter from 'vue-router';
	// initialize vue-router with our Vue app
	Vue.use(VueRouter);
	// libraries to send HTTP request to the server
	import VueAxios from 'vue-axios';
	import axios from 'axios';
	// initialize vueAxios and axios with our Vue app
	Vue.use(VueAxios,axios);
	// create a new router for use
	const router = new VueRouter({
		mode: 'history'
	});
	// Connect Vue app the the id attribute app
	new Vue(Vue.util.extend({router})).$mount('#app');

## Step 5
> Create a main vue component inside the src folder (App.vue)

	<template>
		<div class="container">
			<div>
				<transition name="fade">
					// App components live here
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</template>

	<style>
		.fade-enter-active, .fade-leave-active {
			transition: opacity .5s
		}
		.fade-enter, .fade-leave-active {
			opacity: 0
		}
	</style>

	<script>
		export default {}
	</script>

## Step 6
> include the App.vue file in the main.js file

	import Vue from 'vue';
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

	// create a new router for use
	const router = new VueRouter({
		mode: 'history'
	});

	// Connect Vue app the the id attribute app
	new Vue(Vue.util.extend({router}, App)).$mount('#app');

## Step 7
> create a components folder inside the src folder.
> create a file called createArticle.vue inside the components folder

	<template>
		<div>
			<h1>Create a new Article</h1>
			<form>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label>Article Title</label>
							<input type="text" class="form-control" name="title" v-model="article.title">
						</div>
					</div>
				</div><!-- end .row -->
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label>Article Text</label>
							<textarea class="form-control" name="text" v-model="article.body"></textarea>
						</div>
					</div>
				</div><!-- end .row -->
				<br>
				<div class="form-group">
					<button class="btn btn-primary">Add Article</button>
				</div>
			</form>
		</div>
	</template>
	export default {
		data(){
			return{
				article: {}
			}
		},
		methods: {
			addArticle(){}
		}
	}

## Step 8
> Import the component into the main.js file

	import Vue from 'vue';
	import CreateArticle from './components/createArticle.vue';
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

	// create a new router for use
	const router = new VueRouter({
		mode: 'history'
	});

	// Connect Vue app the the id attribute app
	new Vue(Vue.util.extend({router}, App)).$mount('#app');

> Add the route

	import Vue from 'vue';
	import CreateArticle from './components/createArticle.vue';
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
		mode: 'history'
	});

	// Connect Vue app the the id attribute app
	new Vue(Vue.util.extend({router}, App)).$mount('#app');

> register the route

	import Vue from 'vue';
	import CreateArticle from './components/createArticle.vue';
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