<template>
  <ul class="zine" >
      <li v-for="picture in pictures" :key="picture.id" class="zine__list" >
        <transition name="release" mode="out-in" appear>
          <ZinePage :page="picture"></ZinePage>
        </transition>
      </li>
  </ul>
</template>

<script>
import ZinePage from '../components/ZinePage.vue'
export default {
  name: 'Zine',

  components: { ZinePage },

  props: ['pictures'],

}
</script>

<style scoped lang="scss">
.zine {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 120px;
}

.release-enter-active, .release-leave-active {
  transition: 500ms ease all;
}
.release-enter-from, .release-leave-to {
  opacity: 0;
}
</style>