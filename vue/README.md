# VUEJS Notes

CDNS:

<script  src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"> </script>

https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.js

https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.common.min.js


# Ch1
> Vue	is	a	very	powerful	framework	but	one	of	its	strengths	is	that	it	is	very	lightweight	and	easy	to	pick	up.

> Model View ViewModel (MVVM): This is an architectural pattern whose central point is a ViewModel that acts as a bridge between the View and the data model, allowing the data flow between them. 

> Model View Controller (MVC): This is an architectural pattern. It allows separating Views from Models and from the way that information flows from Views to Models, and vice versa. 

> One-way data binding: This is the type of data binding where the changes in the data model are automatically propagated to the View layer, but not vice versa. 

> Rapid prototyping: In the Web, this is a technique of easily and rapidly building the mockups of the user interface, including some basic user interaction.

> Reactivity: In the Web, this is actually the immediate propagation of any changes of data to the View layer. 

> Two-way data binding: This is the type of data binding where the changes in the data model are automatically propagated to the View layer, and the changes that happen in the View layer are immediately reflected in the data model. 

> User interface (UI): This is a set of visual components that allow the user to communicate with the application. Vuex: This is an architecture for Vue applications and allows simple management of the application state.

## The most important thing about Vue.js 

> Vue.js allows you to simply bind your data models to the representation layer. It also allows you to easily reuse components throughout the application. You don't need to create special models or collections and to register events object in there. You don't need to follow some special syntax. You don't need to install any of never-ending dependencies. Your models are plain JavaScript objects. They are being bound to whatever you want in your Views (text, input text, classes, attributes, and so on), and it just works. You can simply add the vue.js file into your project and use it. Alternatively, you can use vue-cli with Webpack and Browserify family, which not only bootstraps the whole project but also supports hot reloading and provides developer tools. You can separate the View layer from styles and JavaScript logic or you can put it alltogether into the same Vue file and build your components' structure and logic in the same place. There is plugin support for all modern and commonly used IDEs. You can use whatever preprocessors you want, and you can use ES2015. You can use it alongside your favorite framework you have been developing in, or you can use it itself. You can use it just to add a small functionality, or you can use the whole Vue ecosystem to build complex applications. 

## Hello_World
> Let's	create	the	simplest	possible	program	in	Vue.js,	the	obligatory	Hello	World	program.	The	objective here	is	to	get	our	feet	wet	with	how	Vue	manipulates	your	webpage	and	how	data	binding	works.

> new	Vue({el:'#app'})	will	instantiate	a	new	Vue	instance.	It	accepts	an	options	object	as	a	parameter.	This object	is	central	in	Vue,	and	defines	and	controls	data	and	behavior.	It	contains	all	the	information	needed to	create	Vue	instances	and	components.	

## Implementing a shopping list using Vue.js

> <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>

### Shopping Version 1:
    <html>
    <head>
        <title>Shopping Vue</title>
    </head>
    <body>
        <div id="app">
            <h2>{{title}}</h2>
            <ul>
                <li>{{ items[0] }}</li>
                <li>{{ items[1] }}</li>
            </ul>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
            var data = {
                items: ['Bananas', 'Apples'],
                title: 'My Shopping List'
            };
            new Vue({
                // element allows you to to grab an attribute similar to document.querySelector
                el: '#app',
                // grab the data variable containing informaition to expose to the html document
                data: data
            });
        </script>
    </body>
    </html>

#### Analyzing data binding using developer tools 
> Let's see data binding in action. Open your browser's developer tools, find your JavaScript code, and add a breakpoint at the start of the script. Now analyze how the data objects look before and after the Vue application is initialized. You see, it changed a lot. Now the data object is prepared to the reactive data binding:

> Now if we change the title property of the data object from the developer tools console (we can do it because our data is a global object), it will be reflected automatically in the title on the page

### Bringing user input to the data with two-way binding (Shopping Version2)
> Let's see now how we can achieve two-way data binding and how we can change the value of a data property from the page. 

    <html>
        <head>
            <title>Shopping Vue</title>
        </head>
        <body>
            <div id="app">
                <h2>{{title}}</h2>
                <ul>
                    <li>{{ items[0] }}</li>
                    <li>{{ items[1] }}</li>
                </ul>
                <div class="footer">
                    <hr/>
                    <em>Change the title of your shopping list here</em>
                    <input v-model="title" />
                </div>
            </div>
            <script src="../../lib/vue.js"></script>
            <script>
                var data = {
                    items: ['Bananas', 'Apples'],
                    title: 'My Shopping List'
                };
                new Vue({
                    // element allows you to to grab an attribute similar to document.querySelector
                    el: '#app',
                    // grab the data variable containing informaition to expose to the html document
                    data: data
                });
            </script>
        </body>
    </html>

> Thats it!

### Rendering the list of items using the v-for directive 
>  Vue.js provides us with a nice directive for iterating through iterative JavaScript data structures. It is called v-for. We will use it in the list item <li> element. 

    <html>
        <head>
            <title>Shopping Vue</title>
        </head>
        <body>
            <div id="app">
                <h2>{{title}}</h2>
                <ul>
                    <li v-for="item in items">{{ item }}</li>
                </ul>
                <div class="footer">
                    <hr/>
                    <em>Change the title of your shopping list here</em>
                    <input v-model="title" />
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js">
            </script>
            <script>
                var data = {
                    items: ['Bananas', 'Apples'],
                    title: 'My Shopping List'
                };
                new Vue({
                    // element allows you to to grab an attribute similar to document.querySelector
                    el: '#app',
                    // grab the data variable containing informaition to expose to the html document
                    data: data
                });
            </script>
        </body>
    </html>

### Check and uncheck shopping list items
> To achieve this behavior, let's slightly modify our items array by changing our string items and transforming them into the objects with two properties, text and checked (to reflect the state), and let's modify the markup to add a checkbox to each item. 

    <html>
        <head>
            <title>Shopping Vue</title>
        </head>
        <body>
            <div id="app">
                <h2>{{title}}</h2>
                <ul>
                    <li v-for="item in items" v-bind:class="{ 'removed': item.checked }">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="item.checked">
                                {{item.text}}
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="footer">
                    <hr/>
                    <em>Change the title of your shopping list here</em>
                    <input v-model="title" />
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js">
            </script>
            <script>
                var data = { 
                    items: [
                        { text: 'Bananas', checked: true },
                        { text: 'Apples',  checked: false }
                    ],  
                    title: 'My Shopping List'
                };
                new Vue({
                    // element allows you to to grab an attribute similar to document.querySelector
                    el: '#app',
                    // grab the data variable containing informaition to expose to the html document
                    data: data
                });
            </script>
        </body>
    </html>

## Adding new shopping list items using the v-on directive 
> So now we just need a small addition to our code to be able to actually add shopping list items. To achieve that, we will add one more object to our data and call it newItem. We'll also add a small method that pushes new item to the items array. And we'll call this method from the markup page using the v:on directive used on the HTML input element that will be used for the new item and on the button used to click to add a new item. 

    <html>
        <head>
            <title>Shopping Vue</title>
        </head>
        <body>
            <div id="app">
                <h2>{{title}}</h2>
                <div class="input-group">
                    <input v-model="newItem" v-on:keyup.enter="addItem" placeholder="add shopping list item" type="text" class="form-control">
                    <span class="input-group-btn">    
                        <button v-on:click="addItem" class="btn btn-default" type="button">Add!</button>
                    </span>
                </div>
                <ul>
                    <li v-for="item in items" v-bind:class="{ 'removed': item.checked }">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="item.checked">
                                {{item.text}}
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="footer">
                    <hr/>
                    <em>Change the title of your shopping list here</em>
                    <input v-model="title" />
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js">
            </script>
            <script>
                var data = {
                    items: [{
                        text: 'Bananas',
                        checked: true
                    }, {
                        text: 'Apples',
                        checked: false
                    }],
                    title: 'My Shopping List',
                    newItem: ''
                };
                new Vue({
                    // element allows you to to grab an attribute similar to document.querySelector
                    el: '#app',
                    // grab the data variable containing informaition to expose to the html document
                    data: data,
                    methods: {
                        addItem: function() {
                            var text;
                            text = this.newItem.trim();
                            if (text) {
                                this.items.push({
                                    text: text,
                                    checked: false
                                });
                                this.newItem = '';
                            }
                        }
                    }
                });
            </script>
        </body>
    </html>

