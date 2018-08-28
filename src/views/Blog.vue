<template>
  <div class="blog">
    <h1>This is an blog page</h1>

    {{ displayPost.length }}

    <div class="posts">
      <post-item
        v-for="post in displayPost"
        :key="post.id"
        msg="Welcome to Your Vue.js App"       
        :title="post.title"                     
        :likes="countLikes"></post-item>
    </div>

  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import { mapActions } from 'vuex'

export default {
  name: 'blog',
  components: {
    PostItem 
  },
  data () {
    return {
      countLikes: 100,
      someTitle: 'Lorem Ipsum'
    }
  },
  methods: {
    ...mapActions({
      getPost: 'LOAD_POST'
    }),
  },

  computed: {
    displayPost () {
      return this.$store.state.posts
    },
  },
  created() {
    this.getPost()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .blog {
    width: 80%;
    margin: 0 auto;
  }
  .posts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
  }
</style>
