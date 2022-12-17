<template>
        <div class="content">
            <div class="content__main">
                <img src="../assets/images/cover_gif.gif" alt="" class="content__gif">
            </div>
          </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content__main {
            max-width: 800px;
            display: flex;
            justify-content: center;
        }
        .content__gif {
            object-fit: contain;
            max-width: 100%;
        }

        @media (max-width: 1000px) {
            .content__gif {
                max-width: 90%;
            }
        }
        
    }
    
</style>