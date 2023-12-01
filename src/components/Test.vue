<template>

    <div id="testy">
    
    <h4 class="text-primary">Yes - in Test component</h4>

    <h4>You passed the prop' {{ prop1 }}'</h4>

</div>
</template>




<script>

//import {BFormGroup, BFormCheckboxGroup } from 'bootstrap-vue'

export default {
    name: "test",
  //  components: {BFormGroup, BFormCheckboxGroup },
    props: ['prop1'],
  //  directives: {'b-form-group' : BFormGroup, 'b-form-checkbox-group':  BFormCheckboxGroup}

}
</script>

<style>

 #testy { 
  
  background-color: #FFF;
  width: 700px;
  height: 250px;
}

</style>