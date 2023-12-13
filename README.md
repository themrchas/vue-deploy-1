# vue-deploy-1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Examples

- Using Vue instances with javascript variables.   
  - Examples of bringing in javascript varibales in window scope and attempting to make them reactive.  Was able to bring in the javascript variable and make reactive, but it was only one-way binding. Changes within Vue were not pushed back into the javascript variable.  The possible work-around
  was to use 'vm.vueVariableName' in window scope to grab changes, but this is not truly reactive.
  - Does not use main.js
- Using Vue templates with scoped bootstrap and bootstrap-vue
    - Example injects bootstrap and bootstrap-vue into a App.vue template so that injected information is scoped to that component and any children.  In main you must use new Vue({ render: h => h(App),}).$mount('#app') during testing an build phase.
    - Injected information does not pollute other scopes (parent for example)
    - Uses normal build process 'npm run build'
    - Requires sass loader and adjustments in main.js
- Creating a Vue custom element
  - Custom element only allows you to appas in strings as props and there is not 'reactivity' between custom element and other DOM constructs
  - In main use const wrappedElement = wrap(Vue,App); window.customElements.define("v-money",wrappedElement);
  - This method allowed bootstrap to be scoped to custom element only
  - Requires adjustments in main.js and use of web-component-wrapper
  - vue.config.js needs to be modified to run enableShadowCss.  This allows the shadow DOM element to be created (I believe).
  - to build: 
                npm run build -- --target wc --name v-money 'src/*.vue' --inline-vue   (--inline-vue includes vue in the build)


### References

* stackoverflow - how to define styles for a vue component when registering a component
* https://stackoverflow.com/questions/74568152/use-bootstrap-css-and-other-global-css-in-vue-js-custom-elements
* https://stackoverflow.com/questions/49653931/scope-bootstrap-css-in-vue This worked


### TBD - comment out most imports for the scoped bootstrap and bootstrap-vue case