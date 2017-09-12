# Learning Vue.js Fundamentals

## MVVM architectural pattern
>  The data object is our Model and the DOM element where the Vue instance is bound is our View

> In the meantime, our Vue instance is something that helps to bind our Model to the View and vice versa. Our application thus follows Model-View-ViewModel (MVVM) pattern, where the Vue instance is a ViewModel

> Our Model contains data and some business logic, and our View is responsible for its representation

> ViewModel handles data binding, ensuring that the data changed in the Model is immediately affecting the View layer and vice versa

> Our Views thus become completely data driven

## Reusable components (index1.html)
> Components created with Vue.js can be used and reused in the application as bricks you build your house of. Each component has its own scope of styles and bindings, being completely isolated from the other components.

## Vue.js directives
> You've already used some directives that allow data binding in different ways to the View layer (v-model, v-if, v-show, and so on). Besides these default directives, Vue.js allows you to create custom directives. Custom directives provide a mechanism to enable custom behavior of DOM to data mapping

> When registering a custom directive, you can provide three functions: bind, update, and unbind

>  Inside the bind function, you can attach an event listener to the element and do whatever needs to be done there

>  Inside the update function that receives old and new values as parameters, you can define a custom behavior of what should happen when data changes.

> The unbind method provides all the cleaning operations needed (for example, detach event listeners). 

### Custom directive example
    Vue.directive('my-directive', {
        bind: function(){
            // do the preparation work on element binding
        },
        update: function(newValue, oldValue){
            // do something based on the updated value
        },
        unbind: function(){
            // do the clean-up work
        }
    });

> The theory is nice, but without a small example, it turns out boring. So let's have a look at a very simple example, which will show the square of the number each time its value is updated. 

> Our custom directive will look like the following:

    Vue.directive('square', function (el, binding) {  
        el.innerHTML = Math.pow(binding.value, 2); 
    }); 
        
> Use this directive in your template file using the v- prefix:

    <div v-square="item"></div> 

## Plugins in Vue.js
> Vue's core functionality, as we have already analyzed, provides declarative data binding and components composing. This core behavior is enhanced with plugins that provide a rich set of functionality. There are several types of plugins: 
    * Plugins that add some global property or method (vue-element) 
    * Plugins that add some global assets (vue-touch) 
    * Plugins that add Vue instance methods attaching them to Vue's prototype 
    * Plugins that provide some external functionality or API (vue-router)

> Plugins must provide an install method that has access to the global Vue object that can enhance and modify it. In order to use this plugin, Vue provides the use method that receives plugins instances (Vue.use(SomePlugin)). 

### Example (dirctives/VueMathPlugin.js)
> Let's use the previous custom directives example and create a minimalistic plugin that implements mathematical square and square root directives.
