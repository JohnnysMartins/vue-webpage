<template>
  <div>
    <div class="button-group">
      <button @click="getAlunos">Refresh</button>
      <button @click="enableAddMode" v-if="!addingAluno && !selectedAluno">Add</button>
    </div>
    <div class="container">
      <transition name="fade">
        <ul class="alunos" v-if="alunos && alunos.length">
          <li v-for="(aluno, index) in alunos" :key="index" class="aluno-container" :class="{selected: aluno === selectedAluno}">
            <div class="aluno-element">
              <div class="badge">{{index}}</div>
              <div class="aluno-text" @click="onSelect(aluno)">
                <div class="name">{{aluno.nome}}</div>
                <div class="idade">{{aluno.idade}}</div>
              </div>
            </div>
            <button class="delete-button" @click="deleteAluno(aluno)">Delete</button>
          </li>
        </ul>
      </transition>
    </div>
    <transition name="fade">
      <AlunoDetail v-if="selectedAluno || addingAluno" :aluno="selectedAluno" @unselect="unselect" @alunoChanged="alunoChanged"></AlunoDetail>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Aluno } from '../model/aluno'
import { alunoService } from '../service/aluno.service'
import AlunoDetail from './AlunoDetail.vue'

@Component({
  components: { AlunoDetail },
})
export default class AlunoList extends Vue {
  private addingAluno = false
  private selectedAluno: Aluno | null = null
  private alunos: Aluno[] = []

  private created() {
    this.getAlunos()
  }

  private deleteAluno(aluno: Aluno) {
    alunoService.deleteAluno(aluno)
    this.alunos = this.alunos.filter((h) => h !== aluno)
    if (this.selectedAluno === aluno) {
      this.selectedAluno = null
    }
  }

  private enableAddMode() {
    this.addingAluno = true
    this.selectedAluno = null
  }

  private async getAlunos() {
    this.selectedAluno = null
    this.alunos = await alunoService.getAlunos().then((res) => res.data)
  }

  private alunoChanged(mode: string, aluno: Aluno) {
    if (mode === 'add') {
      alunoService.addAluno(aluno)
    } else {
      alunoService.updateAluno(aluno)
      const index = this.alunos.findIndex((h) => aluno.id === h.id)
      this.alunos.splice(index, 1, aluno)
    }
  }

  private onSelect(aluno: Aluno) {
    this.selectedAluno = aluno
  }

  private unselect() {
    this.addingAluno = false
    this.selectedAluno = null
  }

}

</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  // -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

.button-group {
  margin: 0.5em;
}
button.delete-button {
  background-color: rgb(216, 59, 1);
  color: white;
  padding: 4px;
  position: relative;
  font-size: 12px;
  max-width: 50px;
}
.selected {
  background-color: rgb(0, 120, 215) !important;
  color: white;
}
.alunos {
  float: left;
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 20em;
  li {
    cursor: pointer;
    position: relative;
    background-color: #f7f7f7;
    margin: 0.5em;
    height: 3.2em;
    border-radius: 4px;
    &:hover {
      color: #607d8b;
      color: rgb(0, 120, 215);
      background-color: #ddd;
      left: 1px;
    }
    &.selected:hover {
      color: white;
    }
  }
  .text {
    position: relative;
    top: -3px;
  }
  .idade {
    margin: 5px 2.3px;
  }
  .name {
    font-weight: bold;
  }
  .aluno-container {
    display: flex;
    flex-flow: row wrap;
  }
  > * {
    flex: 1 100%;
  }
  .aluno-element {
    display: flex;
    flex-flow: row wrap;
    flex: 18 auto;
    order: 1;
    padding: 0;
    margin: 0;
  }
  .delete-button {
    flex: 1 auto;
    order: 2;
    border-radius: 0 4px 4px 0;
  }
  .aluno-text {
    flex: 1 auto;
    order: 2;
    padding: 0.2em 0.5em;
  }
  .badge {
    flex: 1 auto;
    order: 1;
    font-size: small;
    color: #ffffff;
    padding: 1.2em 1em 0em 1em;
    background-color: #607d8b;
    background-color: rgb(0, 120, 215);
    background-color: rgb(134, 183, 221);
    margin: 0em 0em 0em 0em;
    border-radius: 4px 0 0 4px;
    max-width: 1.5em;
  }
}
</style>
