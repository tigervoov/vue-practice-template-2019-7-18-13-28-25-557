import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)


const store=new Vuex.Store({
  state:{
    counter:0
  },
  getters:{
    getData:state=>{
      return state.counter
    }
  },
  mutations:{
    add(state){
      state.counter++
    },
    reduce(state){
      state.counter--
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')



