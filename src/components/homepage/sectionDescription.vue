<template>
  <section class="description-section container flex align-center">
    <div class="description-section__bg"></div>
    <!-- <img src="@/assets/img/section_2_handshake.svg" alt="handshake" /> -->
    <div class="description">
      <div class="description-title">
        VABAO - сервис облегчающий процесс поиска и делающий покупки и продажи
        цифровых товаров - безопасными
      </div>
      <router-link class="description-link" to="/sell">
        Узнать больше
        <img
          src="@/assets/img/section_2_arrow.svg"
          class="description-link__arrow"
        />
      </router-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.description-section {
  justify-content: space-between;
  margin-bottom: 53px !important;

  &__bg {
    width: 100%;
    min-height: 536px;
    margin-right: 40px;
    background-image: url('../../assets/img/test/Ellipse 1 (1).png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 20;
  }
}

.description {
  max-width: 560px;
  &-title {
    margin-top: -40px;
    margin-bottom: 33px;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 47px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  &-link {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    text-decoration: none;
    color: var(--main-blue);

    img {
      margin-left: 15px;
    }
  }
}
</style>
