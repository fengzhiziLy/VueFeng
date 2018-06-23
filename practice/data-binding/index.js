import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div v-bind:id="aaa" v-on:click="handleClick">
  //     {{isActive ? 'active' : 'not active'}}
  //     {{Date.now()}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="[{ active: isActive }]" :style="styles">
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'feng',
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
