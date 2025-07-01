<script setup>

let count = $ref(0)

console.log(count)

function incrementar() {
  count++
}

</script>

<template>
  <!-- Título -->
  <h1 class="display-4 text-center">About</h1>

  <h2>Contador: {{ count }}</h2>

  <button class="btn btn-secondary" @click="incrementar">Incrementar Contador</button>

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
