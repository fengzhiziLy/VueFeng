import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
    onChange: Function
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.onChange()
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  el: '#root',
  template: `
    <div>
      <comp-one :active="true" prop-one="prop1" :on-change="handleChange"></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `
})
