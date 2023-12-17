<template>

    <div id="testy">

      <br />
      <br />
      <div class="h3 text-primary">Template Test</div>
    
    <h4 class="text-primary">Yes - in Test component</h4>

    <h4>You passed the prop' {{ prop1 }}'</h4>

</div>
</template>

<script>


export default {
    name: "test",
    props: ['prop1'],
 
}
</script>

<style>

 #testy { 
  
  background-color: #FFF;
  width: 700px;
  height: 250px;
}

</style>