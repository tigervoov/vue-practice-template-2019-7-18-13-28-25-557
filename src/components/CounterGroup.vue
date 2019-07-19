<template>
<div>
    <input type="text" v-model.number="counteerNum">

    <div v-for="index in counteerNum" v-bind:key="index">
        <colculate @add-number="addTotal" @reduce-number="reduceTotal"></colculate>
    </div>

   <counter-sum :total="total"></counter-sum>

</div>
    
</template>



<script>
import colculate from './colculate.vue'
import CounterSum from './CounterSum.vue'
export default {
  name: 'counterGroup',
  components:{
      colculate,
      CounterSum
  },
  data(){
      return{
          value:0,
          counteerNum:0,
          total:0
      }
  },
  methods:{
      addTotal:function(value){
          this.total+=value
      },
      reduceTotal:function(value){
          this.total-=value
      }
      
  }
}
</script>
