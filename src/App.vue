<template>
  
  
<div class="rooty">



{{ testVal }}

<div class="h3 text-primary">ENTRY is {{ ENTRY }}</div>

<div>blah is {{ blah }} </div>

<div>window.externalVar is {{ cat }}</div>

<Test :prop1="testVal"/>

<Validation v-for="validationItem in validationResults" :key=Math.random() :validation-item="validationItem" :validation-choices=validationChoices />

<h3>Booty below</h3>

<BootyOnly />
</div>
  
</template>

<script>

import { ref, mounted } from 'vue';
import Test from './components/Test.vue'
import Validation from './components/Validation.vue'
import BootyOnly from './components/BootyOnly.vue'


var blah = "a variable named blah";
var blahExternal = window.externalVar;
var windowENTRY = window.ENTRY;

//var ENTRY = window.ENTRY;

export default {
  name: 'App',
  components: { Test, Validation, BootyOnly },
  props: ['prop1'],

  setup(props) {

   // let cat = window.ENTRY;
   let cat = blahExternal;
    console.log('cat is',cat)

    console.log('prop1 is',props.prop1);
    console.log('window is',windowENTRY);


    const ENTRY = ''
    

    const testVal = "here is the testVal"

    const validationChoices = [ {text:'Yes',value:'Yes'}, {text:'No', value:'No'}, {text:'Pending', value:'Pending'}, {text:'Not Applicable', value:'NA'}];
 
    const validationResults = [ { 'section':'LEGAD', 'selection':'Yes' },  { 'section':'SNR', 'selection':'No' } ];

    return {testVal, blah, validationChoices, validationResults, ENTRY, cat}

},
mounted: (() => { console.log('ENTRY is ',window.ENTRY)})
}
</script>

<style scoped lang="scss">

/*
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
 */

.rooty /deep/ {
  @import "~../node_modules/bootstrap/dist/css/bootstrap";
  @import "~../node_modules/bootstrap-vue/dist/bootstrap-vue";
 
}
</style>
  

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
