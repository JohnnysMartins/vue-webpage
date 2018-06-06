<template>
  <div class="editarea">
    <div>
      <div class="editfields">
        <div>
          <label>id: </label>
          <input v-if="addingAluno" type="number" v-model="editingAluno.id" ref="id" placeholder="id" />
          <label v-if="!addingAluno" class="value">{{editingAluno.id}}</label>
        </div>
        <div>
          <label>nome: </label>
          <input v-model="editingAluno.nome" ref="nome" placeholder="nome" />
        </div>
        <div>
          <label>idade: </label>
          <input v-model="editingAluno.idade" placeholder="idade" @keyup.enter="save" />
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
import { Aluno } from '../model/aluno'
import { IAluno } from '@/interfaces/i-aluno'

const namespace = 'aluno'

@Component({})
export default class AlunoDetail extends Vue {
  public $refs!: {
    id: HTMLElement,
    nome: HTMLElement,
  }

  @Getter(getters.getAluno, { namespace })
  private aluno!: IAluno
  private addingAluno = !this.aluno
  private editingAluno!: IAluno | null
  @Watch('aluno')
  public onAlunoChanged(value: IAluno, oldValue: IAluno) {
    this.editingAluno = this.cloneIt()
  }
  private addAluno() {
    const aluno = this.editingAluno as IAluno
    this.$store.dispatch(actions.addAlunoLista(aluno))
  }

  @Emit('unselect')
  private clear() {
    this.editingAluno = null
  }

  private cloneIt() {
    return Object.assign({}, this.aluno)
  }

  private created() {
    this.editingAluno = this.cloneIt()
  }

  @Emit('alunoChanged')
  private emitRefresh(mode: string, aluno: IAluno) {
    this.clear()
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
    const aluno = this.editingAluno as IAluno
    this.$store.dispatch(actions.setAluno(aluno))
    // this.emitRefresh('update', aluno)
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
