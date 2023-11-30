<template>

    <div id="testy">
    
    <h4>Yes - in Test component</h4>

    <h4>You passed the prop' {{ prop1 }}'</h4>

</div>
</template>




<script>
export default {
    name: "test",
    components: { },
    props: ['prop1']

}
</script>

<style scoped>

 #testy { 
  
  background-color: #FFF;
  width: 700px;
  height: 250px;
}

</style>