<template>
  <main>
    <section-offer />
    <section-description />
    <section-info />
    <section-sell />
    <section-sell-account />
    <section-delimiter />
    <section-buy />
    <main-slider />
  </main>
</template>

<script>
import sectionOffer from '@/components/homepage/sectionOffer'
import sectionDescription from '@/components/homepage/sectionDescription'
import sectionInfo from '@/components/homepage/sectionInfo'
import sectionSell from '@/components/homepage/sectionSell'
import sectionSellAccount from '@/components/homepage/sectionSellAccount'
import sectionDelimiter from '@/components/homepage/sectionDelimiter'
import sectionBuy from '@/components/homepage/sectionBuy'
import mainSlider from '@/components/homepage/slider/mainSlider'

export default {
  components: {
    sectionOffer,
    sectionDescription,
    sectionInfo,
    sectionSell,
    sectionSellAccount,
    sectionDelimiter,
    sectionBuy,
    mainSlider
  }
}
</script>
<style lang="scss">
.container {
  margin: 0 240px;
}
</style>
