<template>

    

    <div class="validy">

        Template

        Item Section is {{ validationItem.section }} 


        <b-form-group :label=validationItem.section v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
        v-bind:id="checkboxGroupId"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        :name="checkboxGroupId"
        stacked
        
       ></b-form-checkbox-group>
    </b-form-group>

    <div>selected: {{ selected }}</div>



         
    </div>

    


</template>




<script>

import { ref } from 'vue';


export default {
    name: "validation",
    components: { },
    props: ['validationItem','validationChoices'],

    setup(props) {

        console.log('validationItem:', props.validationItem)
        console.log('validationChoices:', props.validationChoices)
       

     //  const selected = ref([].push(props.validationItem.selection)) 
   /*  let selected = [];
  selected.push(props.validationItem.selection);
*/
     const selected = ref([]);
     selected.value.push(props.validationItem.selection);
     //selected.value.push(props.validationItem.selection);


       const options = props.validationChoices;

       const checkboxGroupId = "checkbox-group-"+props.validationItem.section

      return {options,selected, checkboxGroupId}
    }
   
}
</script>

<style scoped>

.validy {
  background-color: #FFF;
  width: 700px;
  height: 250px;
}


</style>