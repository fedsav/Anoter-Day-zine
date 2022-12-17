<template>
  <header class="header">
    <router-link to="/we">МЫ</router-link>
    <router-link to="/">ХОУМ</router-link>
    <router-link to="/zine">ЗИН</router-link>
  </header>
</template>

<script>
export default {
    name: 'UiHeader'
}
</script>

<style scoped>
    .header {
        padding: 30px 0 30px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: 'Unbounded-Medium';
    }

    @media (max-width: 500px) {
      .header {
        font-size: 2rem;
      }
    }
</style>