<template>
  <section class="offer-section">
    <div class="content-img__top">
      <div class="img-wrapper left" :class="!overlay ? 'overlay' : ''">
        <div class="description-sell">
          <h2>Найти аккаунт по самой<br />выгодной цене</h2>
          <p>
            Найти и купить интересующий аккаунт по самой выгодной цене за
            считанные минуты
          </p>
          <router-link v-slot="{ navigate }" to="/buy" custom>
            <button class="btn btn-primary" @click="navigate">
              Хочу купить
            </button>
          </router-link>
        </div>
        <img src="@/assets/img/landing_top_1.svg" alt="offer" />
      </div>
      <div
        class="img-wrapper right"
        :class="overlay ? 'overlay' : ''"
        @mouseenter="changeOverlay()"
        @mouseleave="changeOverlay()"
      >
        <div class="description-sell">
          <h2>Опубликовать объявление <br />о продаже аккаунта</h2>
          <p>Разместить объявление и продать аккаунт за несколько минут</p>
          <router-link v-slot="{ navigate }" to="/sell" custom>
            <button class="btn btn-primary" @click="navigate">
              Хочу продать
            </button>
          </router-link>
        </div>
        <img src="@/assets/img/landing_top_2.svg" alt="offer" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      overlay: true
    }
  },
  methods: {
    changeOverlay() {
      this.overlay = !this.overlay
    }
  }
}
</script>

<style lang="scss">
.offer-section {
  background-color: rgb(250, 253, 254);
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.05);
}

.content-img__top {
  position: relative;
  margin-bottom: 150px;
  width: 100%;
  height: 689px;
}

.img-wrapper {
  display: inline-block;
  height: 100%;
  user-select: none;
  transition: all 0.5s linear;
}

.left {
  width: 50%;
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: 0;
  }

  .description-sell {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 12.5vw;
    top: 223px;
    max-width: 518px;
    font-family: 'Proxima';
    color: rgba(50, 50, 50, 1);
    z-index: 1;

    h2 {
      margin-bottom: 15px;
      font-style: normal;
      line-height: 49px;
      letter-spacing: 0.02em;
      font-weight: 900;
      font-size: 40px;
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
      letter-spacing: 0.02em;
      text-align: left;
    }
  }
}

.right {
  width: 50%;
  right: 0;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    top: 0;
  }

  .description-sell {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    right: 12.5vw;
    top: 223px;
    font-family: 'Proxima';
    color: rgba(50, 50, 50, 1);
    z-index: 1;

    h2 {
      margin-bottom: 15px;
      font-style: normal;
      line-height: 49px;
      letter-spacing: 0.02em;
      font-weight: 900;
      font-size: 2.5rem;
      white-space: nowrap;
      text-align: right;
    }

    p {
      margin-bottom: 35px;
      max-width: 398px;
      font-family: 'Proxima';
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0.02em;
      text-align: right;
    }
  }
}

.overlay {
  opacity: 0.4;
}

.btn {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  padding: 14px 60px;
  outline: none;
  font-family: 'Proxima';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid var(--main-blue);
}

.btn-primary {
  color: #fff;
  background-color: var(--main-blue);
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #fff;
    color: var(--main-blue);
  }

  &:active {
    transform: scale(1.02);
  }
}
</style>
