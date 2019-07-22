<template>
    <div>
        <button @click="add">+</button>
        <input type="text" v-model="count">
        <button @click="reduce">-</button>
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
  computed:{
      count(){
          return this.$store.state.counter
      }
  },
  methods: {
      addNumber(){
          this.value++;
          this.$emit("add-number",1)

      },
      reduceNumber(){
          this.value--;
          this.$emit("reduce-number",1)
      },
      add(){
          this.$store.commit('add')
      },
      reduce(){
          this.$store.commit('reduce')
      },
  },
  
}
</script>
