import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-text="text"></div>
      <div v-show="active">Text: {{text}}</div>
      <div v-if="active">Text: {{text}}</div>
      <div v-else-if="text === 0">Else Text: {{text}}</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    text: 0,
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    active: false,
    html: '<span>this is html</span>'
  }
})
