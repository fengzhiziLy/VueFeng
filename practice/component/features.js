import Vue from 'vue'

const ChildComponent = {
  template: '<div>this is childComponent</div>',
  inject: ['yeye', 'value'],
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value" aaa="111"></slot>
      <child-component/>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    return {
      yeye: this,
      value: this.value
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</span>
      </comp-one>
    </div>
  `
})
