import Vue from 'vue'

Vue.directive('textDirective',{
  bind(el,el2){
    console.log(443,el,el2)
  }
})