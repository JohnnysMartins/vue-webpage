<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Hello world Vue and Vuex"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue { }
</script>
