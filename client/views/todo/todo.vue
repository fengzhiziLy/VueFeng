<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs :value="filter" @change="handleChangeTab">
        <tab :label="tab" :index="tab" v-for="tab in states" :key="tab">
        </tab>
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <helper
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="clearAllCompleted"
    />
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import Item from './item.vue'
import Helper from './helper.vue'
import {
  mapState,
  mapActions
} from 'vuex'
// let id = 0
export default {
  metaInfo: {
    title: 'The Todo App'
  },
  // props: ['id'],
  // mounted () {
  //   console.log(this.id)
  //   console.log(this.$route)
  // },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo update enter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo route leave')
    next()
  },
  mounted () {
    // console.log('todo mounted')
    this.fetchTodos()
  },
  data () {
    return {
      filter: 'all',
      states: ['all', 'active', 'completed']
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
    // addTodo (e) {
    //   this.todos.unshift({
    //     id: id++,
    //     content: e.target.value.trim(),
    //     completed: false
    //   })
    //   e.target.value = ''
    // },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    // toggleFilter (state) {
    //   this.filter = state
    // },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.tab-container
  background-color #fff
  padding 0 15px
</style>


