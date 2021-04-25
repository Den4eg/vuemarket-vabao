<template>
  <section class="sell-account-section container">
    <div class="sell-account-section__ticker">
      <div class="ticker__text">
        <h2>Продажа аккаунта</h2>
        <p>
          С помощью нашего сервиса вы сможете разместить объявление о продаже
          всего за несколько минут
        </p>
        <router-link v-slot="{ navigate }" to="/sell" custom>
          <button class="btn btn-primary" @click="navigate">
            Выбор игры
          </button>
        </router-link>
      </div>
      <img src="@/assets/img/sell_block_img.png" alt="" class="ticker__img" />
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="scss">
.sell-account-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sell-account-section__ticker {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67.7vw;
  height: 549px;
  margin-bottom: 140px;
  padding: 0 10px;
  background: #ffffff;
  box-shadow: 0px 10px 65px rgba(12, 50, 123, 0.06);
  border-radius: 15px;

  &__text {
    & h2 {
      font-family: 'Proxima';
      font-size: 36px;
      font-weight: 800;
      line-height: 43.85px;
    }

    & p {
      font-size: 17px;
      line-height: 20.71px;
    }
  }
}
</style>
