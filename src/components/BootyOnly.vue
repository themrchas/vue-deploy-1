<template>

    <div class="booty">

        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
    
    
</div>
</template>




<script>

import { ref, computed, onMounted  } from 'vue'

//import {BFormGroup, BFormCheckboxGroup } from 'bootstrap-vue'

export default {
    name: "booty-only",
    props: ['prop1'],
  
  setup() { 
 
    //ENTRY defined in main.js
    const loe = ref(window.ENTRY.PA_LineOfEffort);

    console.log('loe is',loe)

  const itChanged = computed(() =>
    console.log('new loe value is', loe.value)
  )

  onMounted(() => {
    console.log('its been mounted');
    loe.value = window.ENTRY.PA_LineOfEffort
  })

  }
  
  
}
</script>

<style>

 .booty { 
  
  background-color: #FFF;
  width: 700px;
  height: 250px;
}

</style>