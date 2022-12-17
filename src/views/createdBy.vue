<template>
    <div class="person">
      <div class="creators">
        <div class="creators__img"></div>
        <div class="creators__social">
            <a href="https://www.instagram.com/cmonfedyai/" class="creators__link">@cmonfedyai</a>
            <p class="creators__and">&</p>
            <a href="https://www.instagram.com/mazahack/" class="creators__link">@mazahack</a>
        </div>
      </div>
      <legend class="ourMessage">
        Здарова, молодежь! На этом микро интернет-островке вы можете лицезреть наш микросерфинг жизни в 2022 году. Этот зин сделан потому что мы можем + потому что хочется хоть куда-то девать визуализацию своих мыслей и будней.
      </legend>
    </div>
</template>

<script>
export default {
  name: 'CreatedBy',

}
</script>

<style scoped lang="scss">
.person {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;

  .creators {
    display: flex;
    flex-direction: column;
    align-items: center;

    .creators__img {
      height: 400px;
      width: 400px;
      background-image: url('../assets/images/phonk-church.png');
      background-size: cover;
      background-position: center;
    }
  
    .creators__social {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .creators__link, .creators__and {
      font-family: Unbounded-Medium
    }
  }

  .ourMessage {
    font-family: Unbounded-Light;
    font-size: 19px;
    text-align: justify;
    max-width: 40%;
  }

  @media all and (max-width: 1000px) {
    .ourMessage {
      max-width: 80%;
      padding-bottom: 20px;
    }
  }
  
}

</style>