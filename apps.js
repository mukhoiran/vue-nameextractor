Vue.component('extractor',{
  template: "<div class='container'><h1 class='text-center'>Name Extractor</h1><p class='text-center'>Name extractor is program for extract name automatically</p><div class='input-group'><input type='text' v-model='name' place='Typing your Fullname' @keyup.enter='process' class='form-control'><button @click='process' class='input-group-addon'>process</button></div><h2 v-if='result' class='alert alert-success m-2 text-center'>Welcome Mr. / Mrs. {{last | capitalize}}, Happy you can join</h2><b v-if='result' class='text-warning badge badge-dark'>Result of your extract name :</b><div v-if='result' class='rounded border border-danger'> <p>first name: {{first}}</p><p>middle name: {{middle}}</p><p>last name: {{last}}</p></div></div>",
  data: function(){
    return {
      name: '',
      first: '',
      middle: '',
      last: '',
      result: false
    }
  },
  methods: {
    process() {
      var complete = this.name.split(' ')
      this.first = complete[0]
      for (i=1; i<complete.length -1; i++){
        this.middle += complete[i] + ' '
      }
      this.last = complete[complete.length -1]
      this.result = true
    }
  },
  filters: {
    capitalize: function (value){
      if(!value) return ' '
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})

var app = new Vue({
  el:'#app',
})
