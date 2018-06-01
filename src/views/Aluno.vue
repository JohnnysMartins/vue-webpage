<template>
  <div class="home">
    <img src="../assets/logo.png">
    <AlunosList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AlunosList from '../components/AlunosList.vue'

@Component({
  components: {
    AlunosList,
  },
})
export default class Home extends Vue {}
</script>
