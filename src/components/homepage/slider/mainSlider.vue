<template>
  <section class="section-slider">
    <h2 class="slider__title">Что о нас говорят</h2>
    <div class="slider__slider"></div>
    <router-link v-slot="{ navigate }" to="/sell" custom>
      <button class="btn btn-primary" @click="navigate">
        Оставить отзыв
      </button>
    </router-link>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.section-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 429px;
}
</style>
