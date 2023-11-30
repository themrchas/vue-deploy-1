<template>
  
<div id="rooty">

{{ testVal }}

<div>ENTRY is {{ ENTRY }}</div>

<div>blah is {{ blah }} </div>

<Test :prop1="testVal"/>

<Validation v-for="validationItem in validationResults" :key=Math.random() :validation-item="validationItem" :validation-choices=validationChoices />


</div>
  
</template>

<script>

import Test from './components/Test.vue'
import Validation from './components/Validation.vue'

var blah = "a variable named blah";

var ENTRY = window.ENTRY;

export default {
  name: 'App',
  components: { Test, Validation },
  
  setup() {

    const testVal = "here is the testVal"

    const validationChoices = [ {text:'Yes',value:'Yes'}, {text:'No', value:'No'}, {text:'Pending', value:'Pending'}, {text:'Not Applicable', value:'NA'}];
 
    const validationResults = [ { 'section':'LEGAD', 'selection':'Yes' },  { 'section':'SNR', 'selection':'No' } ];

    return {testVal, blah, validationChoices, validationResults, ENTRY}

}
}
</script>

<style >

/* #app, #rooty { */
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  

 
    background-color: #FFF;
  width: 700px;
  height: 550px;
}


</style>
