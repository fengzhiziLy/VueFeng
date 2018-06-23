<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <p>{{fullName}} {{counter}}</p> -->
    <!-- <p>{{textC}} {{textPlus}}</p> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link> -->
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <button @click="notify">click</button>
    <!-- <notification content="test notify"></notification> -->
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Feng\'s Todo App'
  },
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['b/testAction']()
    // this.$store.state.count = 3
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // textA () {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      counter: (state) => state.count
      // textA: state => state.a.text,
      // textC: state => state.c.text
    }),
    ...mapGetters({
      fullName: 'fullName'
      // textPlus: 'a/textPlus'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #0c9
  opacity .9
  z-index -1
}
</style>


