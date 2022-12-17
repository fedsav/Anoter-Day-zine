<template>
  <footer class="footer">
      КОПИРАЙТЕД 2022 ХУЙ
  </footer>
</template>

<script>
export default {
    name: 'UiFooter'

}
</script>

<style scoped lang="scss">
    .footer {
        text-align: center;
        font-family: 'Unbounded-Medium';
    }

    @media (max-width: 500px) {
      .footer {
        font-size: 1.5rem;
      }
    }
</style>