<template>
  <header class="header flex">
    <div class="left-menu flex">
      <img src="../assets/img/hamburger.svg" alt="menu" />
      <ul class="header-nav__left flex align-center">
        <router-link
          v-for="(item, i) in leftMenuItems"
          :key="i"
          v-slot="{ isExactActive, navigate }"
          :to="item.link"
          custom
        >
          <li
            class="menu-item__left flex align-center"
            :class="[isExactActive && 'menu-active']"
            @click="navigate"
          >
            {{ item.title }}
          </li>
        </router-link>
      </ul>
    </div>
    <router-link v-slot="{ navigate }" to="/" custom>
      <h1 class="flex align-center header-label" @click="navigate">VABAO</h1>
    </router-link>
    <div class="right-menu flex">
      <ul class="header-nav__right flex align-center">
        <router-link v-slot="{ isExactActive, navigate }" to="/rules" custom>
          <li
            class="flex align-center rules"
            :class="[isExactActive && 'menu-active']"
            @click="navigate"
          >
            Правила
          </li>
        </router-link>
        <router-link v-slot="{ isExactActive, navigate }" to="/search" custom>
          <li
            class="flex align-center"
            :class="[isExactActive && 'menu-active']"
            @click="navigate"
          >
            <img src="../assets/img/right_menu_search.svg" />
          </li>
        </router-link>
        <router-link v-slot="{ isExactActive, navigate }" to="/support" custom>
          <li
            class="flex align-center relative"
            :class="[isExactActive && 'menu-active']"
            @click="navigate"
          >
            <img src="../assets/img/support.svg" class="info" />
          </li>
        </router-link>
        <router-link
          v-if="!isAuthenticated"
          v-slot="{ isExactActive, navigate }"
          to="/auth"
          custom
        >
          <li
            class="flex align-center"
            :class="[isExactActive && 'menu-active']"
            @click="navigate"
          >
            <img src="../assets/img/right_menu_user.svg" />
          </li>
        </router-link>
      </ul>
      <div v-if="isAuthenticated" class="user-menu flex align-center">
        <img src="../assets/img/user.jpg" alt="user" class="menu-item__right" />
        <img src="../assets/img/Bottom_V.svg" style="margin-left: 10px" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: true,
      leftMenuItems: [
        { title: 'О сервисе', link: '/' },
        { title: 'Купить', link: '/buy' },
        { title: 'Продать', link: '/sell' }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  height: 70px;
  padding: 0 140px;
  justify-content: space-between;
  font-family: 'Proxima';
  font-size: 15px;
  font-weight: 600;
  background-color: #fff;
  border-bottom: 1.5px solid rgba(73, 128, 234, 0.15);
}

.left-menu {
  justify-items: flex-start;
  img {
    width: 22px;
    height: 16px;
    align-self: center;
    margin-right: 45px;
    cursor: pointer;
  }
}

.header-nav__left {
  justify-content: space-evenly;
  user-select: none;

  li {
    list-style: none;
    height: 100%;
    white-space: nowrap;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  li:not(:last-child) {
    margin-right: 35px;
  }
}

.header-label {
  font-size: 40px;
  font-weight: 800;
  color: var(--main-blue);
  letter-spacing: 0.11em;
  cursor: pointer;
}

.header-nav__right {
  min-width: 270px;
  justify-content: flex-end;
  user-select: none;

  li {
    height: 100%;
    list-style: none;
    white-space: nowrap;
    letter-spacing: 0.02em;
    margin-right: 35px;
    cursor: pointer;
  }
}

.rules {
  color: rgba(50, 50, 50, 0.6);
}

.menu-active {
  color: var(--main-blue);
}
</style>
