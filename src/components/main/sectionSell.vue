<template>
  <section class="section-sell">
    <div class="container">
      <h2 class="section-sell__title flex">
        Как происходит процесс <br> размещения объявлений
      </h2>
      <div class="section-sell__sequence flex">
        <div class="sell-sequence__wrapper">
          <img
            src="@/assets/img/sell_joistic.png"
            alt="change game"
          >
        </div>
        <img
          src="@/assets/img/sell_arrow.png"
        >
        <div class="sell-sequence__wrapper">
          <img
            class="sequence-img__sell"
            src="@/assets/img/sell_description.png"
            alt="change game"
          >
        </div>
        <img
          src="@/assets/img/sell_arrow.png"
        >
        <div class="sell-sequence__wrapper">
          <img
            class="sequence-img__sell"
            src="@/assets/img/sell_publicate.png"
            alt="change game"
          >
        </div>
        <span class="sell-sequence__line" />
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .section-sell__title {
    justify-content: center;
    margin-bottom: 71px;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
  }

  .section-sell__sequence {
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 9vw;
    .sell-sequence__line {
      position: absolute;
      width: 100%;
      height: 1px;
      top: 50%;
      background-color: rgba(56, 120, 244, 0.3);
      z-index: 0;
    }
    .sell-sequence__wrapper {
      position: relative;
      z-index: 10;

      &::after {
        position: absolute;
        left: -90px;
        right: -90px;
        bottom: -40px;
        font-family: 'Proxima';
        font-size: 20px;
        font-weight: 700;
        text-align: center;

      }
      &:nth-child(1)::after {
          content: "Выбор игры";
        }

      &:nth-child(3)::after {
          content: "Описание аккаунта";
        }

      &:nth-child(5)::after {
          content: "Публикация объявления";
        }
      
    }

    
    
  }

  // .section-sequence__description {
  //       justify-content: space-between;
  //       margin: 0 220px 0 250px;
  //     }
</style>