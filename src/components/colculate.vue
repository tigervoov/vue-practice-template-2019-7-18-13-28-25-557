<template>
    <div>
        <button @click="add">+</button>
        <input type="text" v-model="count">
        <button @click="reduce">-</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'colculate',
  data(){
      return{
          value:0
      }
  },
  computed:{
    //   count(){
    //       return this.$store.state.counter
    //   }
    ...mapGetters({
      count:'getData',
    })
      
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
    //   add(){
    //       this.$store.commit('add')
    //   },
    //   reduce(){
    //       this.$store.commit('reduce')
    //   },
      ...mapMutations([
      'add', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'reduce' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
  },
  
}
</script>
