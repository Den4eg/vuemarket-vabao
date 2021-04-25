<template>
  <section class="buy-section">
    <div class="container buy-section__info">
      <h2 class="buy-section__info--title flex">
        Как происходит процесс<br />покупки игровых ценностей
      </h2>
      <div class="buy-section__info--sequence flex">
        <div class="buy-sequence__info--wrapper">
          <img src="@/assets/img/sell_joistic.png" alt="change game" />
        </div>
        <img src="@/assets/img/sell_arrow.png" />
        <div class="buy-sequence__info--wrapper">
          <img src="@/assets/img/buy_info.png" alt="change game" />
        </div>
        <img src="@/assets/img/sell_arrow.png" />
        <div class="buy-sequence__info--wrapper">
          <img src="@/assets/img/buy_action.png" alt="change game" />
        </div>
        <span class="buy-sequence__info--line" />
      </div>
    </div>
    <div class="buy-section__ticker">
      <div class="buy-section__ticker--wrapper">
        <div class="buy-section__ticker--text">
          <h2>Покупка аккаунта</h2>
          <p>
            С помощью нашего сервиса вы сможете купить интересующий аккаунт
            всего за несколько минут
          </p>
          <router-link v-slot="{ navigate }" to="/sell" custom>
            <button class="btn btn-primary" @click="navigate">
              Выбор игры
            </button>
          </router-link>
        </div>
        <div class="buy-section__image"></div>
        <!-- <img src="@/assets/img/buy_block_img.png" alt="" class="ticker__img" /> -->
      </div>
    </div>
    <div class="buy-section__bg--delimiter" />
  </section>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="scss">
.buy-section {
  position: relative;
  z-index: 1;

  &__info {
    z-index: 10;

    &--title {
      justify-content: center;
      margin-bottom: 65px;
      font-size: 36px;
      font-weight: 800;
      text-align: center;
    }

    &--sequence {
      position: relative;
      justify-content: space-between;
      align-items: flex-end;
      margin: 0 240px;

      .buy-sequence__info {
        &--line {
          position: absolute;
          width: 100%;
          height: 1px;
          top: 50%;
          background-color: rgba(56, 120, 244, 0.3);
          z-index: 0;
        }

        &--wrapper {
          position: relative;
          background: #fcfcfc;
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
            white-space: nowrap;
          }

          &:nth-child(1)::after {
            content: 'Выбор игры';
          }

          &:nth-child(3)::after {
            content: 'Выбор интересующего аккаунта';
          }

          &:nth-child(5)::after {
            content: 'Покупка';
          }
        }
      }
    }
  }

  &__ticker {
    overflow: hidden;
    z-index: 10;

    &--wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 67.7vw;
      height: 549px;
      margin: 206px auto 280px;
      padding: 0 10px 0 30px;
      border-radius: 15px;
      background: #ffffff;
      box-shadow: 0px 10px 65px rgba(12, 50, 123, 0.06);
      z-index: 1000;

      .buy-section__image {
        width: 60%;
        height: 80%;
        background-image: url('../../assets/img/buy_block_img.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center right;
      }
    }

    &--text {
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

  &__bg--delimiter {
    position: absolute;
    bottom: 120px;
    width: 100%;
    height: 365px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
    background: #f4f7fb;
    z-index: -1;
  }
}
</style>
