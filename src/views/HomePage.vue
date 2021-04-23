<template>
  <main>
    <section-offer />
    <section-description />
    <section-info />
    <section-sell />
  </main>
</template>

<script>
import sectionOffer from '@/components/main/sectionOffer'
import sectionDescription from '@/components/main/sectionDescription'
import sectionInfo from '@/components/main/sectionInfo'
import sectionSell from '@/components/main/sectionSell'

export default {
  components: {
    sectionOffer,
    sectionDescription,
    sectionInfo,
    sectionSell
  }
}

</script>
<style lang="scss">
  .container {
    margin: 0 240px;
  }
</style>