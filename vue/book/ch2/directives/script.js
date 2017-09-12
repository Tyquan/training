const Vue = require('vue/dist/vue.js');
const VueMathPlugin = require('./VueMathPlugin');

Vue.use(VueMathPlugin);

new Vue({
    el: '#app',
    data: { item: 49 }
});

// check out index.html (it has a main.js that will be built with browerify and babelify)