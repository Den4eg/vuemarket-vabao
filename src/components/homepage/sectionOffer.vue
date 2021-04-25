<template>
  <section class="offer-section">
    <div
      class="blur-overlay"
      :class="[overlay && 'blur-overlay-active']"
      @mouseenter="overlay = !overlay"
    ></div>
    <div class="description-sell">
      <h2>Найти аккаунт по самой<br />выгодной цене</h2>
      <p>
        Найти и купить интересующий аккаунт по самой выгодной цене за считанные
        минуты
      </p>
      <router-link v-slot="{ navigate }" to="/buy" custom>
        <button class="btn btn-primary" @click="navigate">
          Хочу купить
        </button>
      </router-link>
    </div>

    <div class="description-sell justify-end">
      <h2>Опубликовать объявление <br />о продаже аккаунта</h2>
      <p>
        Разместить объявление и продать аккаунт за несколько минут
      </p>
      <router-link v-slot="{ navigate }" to="/sell" custom>
        <button class="btn btn-primary" @click="navigate">
          Хочу продать
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      overlay: false
    }
  }
}
</script>

<style lang="scss">
.offer-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 689px;
  padding: 0 240px;
  margin-bottom: 150px;
  background: #f8fbff;
  background-image: url('../../assets/img/top_img.png');
  background-repeat: no-repeat;
  background-position: right center;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.description-sell {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h2 {
  margin-bottom: 15px;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 2%;
  line-height: 49px;
  white-space: nowrap;
}
p {
  margin-bottom: 35px;
  max-width: 398px;
  font-family: 'Proxima';
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}

.justify-end {
  text-align: end;
  align-items: flex-end;

  p {
    max-width: 362px;
  }
}

.blur-overlay {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(115, 160, 249, 0.01);
  transition: transform 0.5s ease-out;
  backdrop-filter: blur(2px);
  z-index: 100;
  transform-origin: left;

  &-active {
    transform: rotateY(180deg);
  }
}
</style>
