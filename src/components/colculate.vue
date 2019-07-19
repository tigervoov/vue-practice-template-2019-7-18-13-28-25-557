<template>
    <div>
        <button @click="addNumber">+</button>
        <input type="text" :value=value>
        <button @click="reduceNumber">-</button>
    </div>
</template>

<script>
export default {
  name: 'colculate',
  data(){
      return{
          value:0
      }
  },
  methods: {
      addNumber(){
          this.value++;
      },
      reduceNumber(){
          this.value--;
      }
  },
  
}
</script>
