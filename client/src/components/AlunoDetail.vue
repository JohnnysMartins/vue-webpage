<template>
  <div class="editarea">
    <div>
      <div class="editfields">
        <div>
          <label>id: </label>
          <input v-if="addingAluno" type="number" v-model="alunoTeste.id" ref="id" placeholder="id" />
          <label v-if="!addingAluno" class="value">{{alunoTeste.id}}</label>
        </div>
        <div>
          <label>nome: </label>
          <input v-model="alunoTeste.nome" ref="nome" placeholder="nome" />
        </div>
        <div>
          <label>idade: </label>
          <input v-model="alunoTeste.idade" placeholder="idade" @keyup.enter="save" />
        </div>
      </div>
      <button @click="clear">Cancel</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import * as getters from '@/store/aluno/getters.map'
import * as actions from '@/store/aluno/actions.map'
import { IAluno } from '@/interfaces/i-aluno'

const namespace = 'aluno'

@Component({})
export default class AlunoDetail extends Vue {
  public $refs!: {
    id: HTMLElement,
    nome: HTMLElement,
  }
  @Prop()
  private addingAluno!: boolean
  @Getter(getters.getAluno, { namespace })
  private aluno!: IAluno
  private editingAluno!: IAluno | null
  private addAluno() {
    const aluno = this.alunoTeste as IAluno
    this.$store.dispatch(actions.addAlunoList(aluno))
  }

  get alunoTeste() {
    return this.cloneIt()
  }

  @Emit('unselect')
  private clear() {
    this.$store.dispatch(actions.setAluno({}))
    this.editingAluno = null
  }

  private cloneIt() {
    return Object.assign({}, this.aluno)
  }

  private created() {
    console.log(!this.aluno)
    this.editingAluno = this.cloneIt()
  }

  private mounted() {
    if (this.addingAluno && this.editingAluno) {
      this.$refs.id.focus()
    } else {
      this.$refs.nome.focus()
    }
  }

  private save() {
    if (this.addingAluno) {
      this.addAluno()
    } else {
      this.updateAluno()
    }
  }

  private updateAluno() {
    const aluno = this.alunoTeste as IAluno
    this.$store.dispatch(actions.updateAluno(aluno))
  }

}
</script>

<style lang="scss" scoped>
.editarea {
  float: left input {
    margin: 4px;
    height: 20px;
    color: rgb(0, 120, 215);
  }
  button {
    margin: 8px;
  }
  .editfields {
    margin-left: 12px;
  }
}
</style>
