<template>
  <title>Anoter Day</title>
    <main class="main">
      <UiHeader />
      <router-view :pictures="pictures" v-slot="{ Component }">
        <KeepAlive>
          <transition name="change" mode="out-in" appear>
            <component :is="Component" />
          </transition>
        </KeepAlive>
      </router-view>
      <UiFooter />
    </main>
</template>

<script >
import UiFooter from './components/UiFooter.vue';
import UiHeader from './components/UiHeader.vue';

export default {
  name: 'App',

  components: {
    UiFooter,
    UiHeader,
  },

  data () {
    return {
      pictures: [
        {
          name: '0-des',
          id: 0,
        },
        {
          name: '1-des',
          id: 1,
        },
        {
          name: '2-des',
          id: 2,
        },
        {
          name: '3-des',
          id: 3,
        },
        {
          name: '4-des',
          id: 4,
        },
        {
          name: '5-des',
          id: 5,
        },
        {
          name: '6-des',
          id: 6,
        },
        {
          name: '7-des',
          id: 7,
        },
        {
          name: '8-des',
          id: 8,
        },
        {
          name: '9-des',
          id: 9,
        },
        {
          name: '10-des',
          id: 10,
        },
        {
          name: '11-des',
          id: 11,
        },
        {
          name: '12-des',
          id: 12,
        },
        {
          name: '13-des',
          id: 13,
        },
        {
          name: '14-des',
          id: 14,
        },
      ]
    }
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.change-enter-active, .change-leave-active {
  transition: 200ms ease all;
}
.change-enter-from, .change-leave-to {
  opacity: 0;
}

</style>
