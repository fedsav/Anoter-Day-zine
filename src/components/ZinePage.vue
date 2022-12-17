<template>
  <div class="zinePage">
    <div class="zinePage__pic" ></div>
  </div>
</template>

<script>
export default {
    name: 'ZinePage',

    props: ['page'],

    computed: {
        picUrl () {
            return `url(${this.getUrl()})`
        },
    },

    methods: {
        getUrl () {
            return new URL(`/src/assets/images/${this.page.name}.jpg`, import.meta.url).href
        },
    }
}
</script>

<style scoped lang="scss">
.zinePage {
    display: flex;
    margin: 0;

    .zinePage__pic {
        height: 600px;
        width: 1400px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: v-bind(picUrl);
    }

    @media screen and (max-width: 1000px) {
        .zinePage__pic {
            height: 400px;
            width: 700px;
        }
    }

    @media screen and (max-width: 500px) {
        .zinePage__pic {
            height: 300px;
            width: 380px;
        }
    }
}
</style>