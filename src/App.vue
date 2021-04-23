<template>
  <appHeader />
  <router-view />
  <app-footer class="footer" />
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'


export default {
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">

@import 'styles/main.scss';

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    position: relative;
    background-color: var(--main-bg-gray);
  }

  .footer {
    box-sizing: border-box;
    margin-top: 429px;
  }
</style>
