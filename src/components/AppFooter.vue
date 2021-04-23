<template>
  <div class="footer-container">
    <div class="footer-top flex align-center">
      <div class="flex align-center">
        <span class="footer-logo">Vabao</span>
        <nav>
          <ul class="footer-nav flex align-center">
            <router-link
              v-for="(item, i) in footerMenu"
              :key="i"
              v-slot="{ isExactActive, navigate }"
              :to="item.link"
              custom
            >
              <li
                class="footer-menu__item"
                :class="[isExactActive && 'menu-active']"
                @click="navigate"
              >
                {{ item.text }}
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
      <div class="contacts">
        <ul class="footer-contacts flex">
          <li
            v-for="(item, index) in footerContacts"
            :key="index"
            class="footer-contacts__item"
            custom
          >
            <p class="footer-contacts__title">
              {{ item.title }}
            </p>
            <span v-if="!item.data" class="contacts-img flex align-center">
              <img src="../assets/img/visa.svg" alt="visa" />
              <img src="../assets/img/mastercard.svg" alt="mastercard" />
            </span>
            <h3 v-else class="footer-contacts__data">
              {{ item.data }}
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom flex align-center">
      <div class="all-rights">
        2020 © Все права защищены
      </div>
      <div v-for="icon in foterIcons" :key="icon" class="socials">
        <icon-base :iconName="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import iconBase from '../components/iconsComponents/iconBase'
export default {
  components: {
    iconBase
  },
  data() {
    return {
      footerMenu: [
        {
          text: 'О сайте',
          link: '/'
        },
        {
          text: 'Купить',
          link: '/buy'
        },
        {
          text: 'Продать',
          link: '/sell'
        },
        {
          text: 'Правила',
          link: '/rules'
        },
        {
          text: 'Тех. поддержка',
          link: '/support'
        }
      ],
      footerContacts: [
        {
          title: 'По любым вопросам:',
          data: '+ 7 (342) 922-21- 48'
        },
        {
          title: 'Пишите нам:',
          data: 'vabaoinf@gmail.com'
        },
        {
          title: 'Принимаем к оплате:',
          data: ''
        }
      ],
      foterIcons: ['facebook', 'vk', 'insta', 'painterest']
    }
  }
}
</script>

<style lang="scss">
.footer-container {
  box-sizing: border-box;
  background-color: rgb(230, 236, 243);
}

.footer-top {
  margin-top: 10px;
  padding: 0 140px;
  box-sizing: border-box;
  height: 138px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(56, 120, 244, 0.2);
}

.footer-bottom {
  padding: 0 140px;
  height: 56px;
  justify-content: space-between;

  .all-rights {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  .socials > svg:not(:last-child) {
    margin-right: 11px;
  }
}

.footer-logo {
  color: var(--main-blue);
  font-size: 40px;
  font-family: 'Istok';
  font-style: normal;
  font-weight: 700;
  margin-right: 90px;
}

.footer-nav {
  list-style: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: left;

  .footer-menu__item {
    cursor: pointer;
  }

  .footer-menu__item:not(:last-child) {
    margin-right: 35px;
  }
}

.footer-contacts {
  list-style: none;

  &__title {
    margin-bottom: 10px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(50, 50, 50, 0.8);
  }

  &__data {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(50, 50, 50, 1);
  }

  &__item:not(:last-child) {
    margin-right: 75px;
  }
}

.contacts-img {
  img:not(:last-child) {
    margin-right: 14px;
  }
}
</style>
