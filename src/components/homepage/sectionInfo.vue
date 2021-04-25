<template>
  <section class="info-section">
    <div class="info-section__bg" />
    <div class="container">
      <span class="main-delimiter" />
      <ul class="flex align-center info-counts">
        <li
          v-for="(item, index) in counters"
          :key="index"
          class="flex counts-item"
        >
          <div class="item-wrapper">
            <h2 class="counts-item__title">
              {{ item.title }}
            </h2>
            <p class="counts-item__description">
              {{ item.description }}
            </p>
          </div>
          <span class="items-delimiter" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counters: [
        {
          title: '32500',
          description: 'Довольных клиентов'
        },
        {
          title: '3 года',
          description: 'Уже на рынке'
        },
        {
          title: '97%',
          description: 'Довольных клиентов'
        },
        {
          title: '78926',
          description: 'Проданых аккаунтов'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.info-section {
  position: relative;
  margin-bottom: 240px;
  z-index: 1;

  &__bg {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 275px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
    background: #f4f7fb;
    z-index: -1;
  }
}

.info-counts {
  height: 230px;
  justify-content: space-evenly;
  background-color: #fff;
  box-shadow: 0px 10px 65px 0px rgba(12, 50, 123, 0.06);
  list-style: none;
  user-select: none;
}

.item-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 93px;
}

.counts-item {
  position: relative;
  padding: 25px 0 25px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0;
    height: 4px;
    background-color: var(--main-blue);
    transition: width 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 4px;
    background-color: var(--main-blue);
    transition: width 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  &:hover::before,
  &:hover::after {
    width: 50%;
  }

  & &__title {
    font-size: 44px;
    font-style: normal;
    font-weight: 800;
    line-height: 54px;
    letter-spacing: 0.02em;
    color: var(--main-blue);
  }

  &__description {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(50, 50, 50, 1);
  }

  &:not(:last-child) {
    .items-delimiter {
      width: 2px;
      height: 180px;
      background: rgba(47, 108, 226, 0.05);
      position: absolute;
      right: 0;
    }
  }
}
</style>
