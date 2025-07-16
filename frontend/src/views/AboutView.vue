<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

const perfil = reactive({ nome: '', idade: ''})
const maiorIdade = ref(false)
const mostrarPerfilIdade = ref(false)

const verificaMaioridade = () => {
  if(perfil.idade < 18){
    maiorIdade.value = false
  } else {
    maiorIdade.value = true    
  }
  mostrarPerfilIdade.value = true
}

const infoPerfil = computed(() => {
  return `Meu nome é ${perfil.nome} e eu tenho ${perfil.idade} anos de idade.`
})

onMounted(() => console.log('Aplicacao montada!'))

</script>

<template>
  <!-- Título -->
  <h1 class="display-4 text-center">About</h1>

  <br>
  <br>

  <label for="nome">Nome</label>
  <input type="text" class="form-control" id="nome" v-model="perfil.nome">
  <br>
  <label for="idade">Idade</label>
  <input type="text" class="form-control" id="idade" v-model="perfil.idade">
  <br>

  <button class="btn btn-primary" type="button" @click="verificaMaioridade()">Checar perfil idade</button>

  <br>
  <br>

  <h3 v-if="perfil.nome && perfil.idade"> {{ infoPerfil }}</h3>

  <div v-if="mostrarPerfilIdade">

    <h2>Perfil de Idade é: </h2>

    <h3 v-if="maiorIdade">Maior de Idade!</h3>
    <h3 v-else>Menor de Idade!</h3>

  </div>

  <br>
  <br>

  <!-- Corpo do Texto -->
  <div class="mt-4">
    <p>
      Esta página serve como um exemplo simples de como utilizar o
      Bootstrap 5 para criar layouts limpos e responsivos. Com o uso
      de componentes flexíveis, você pode construir desde interfaces
      simples até aplicações web complexas.
    </p>
    <p>
      O Bootstrap facilita a organização do conteúdo, garantindo que ele
      fique visualmente agradável em qualquer dispositivo, seja um celular,
      tablet ou desktop. Explore as classes utilitárias do Bootstrap e veja
      como é fácil estilizar seus projetos.
    </p>
  </div>
</template>

<style>
</style>
