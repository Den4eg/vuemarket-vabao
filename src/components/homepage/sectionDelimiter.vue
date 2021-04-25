<template>
  <div class="section-delimiter">
    <div class="delimiter__line"></div>
    <div class="delimiter__slash"></div>
    <div class="delimiter__line"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.section-delimiter {
  display: flex;
  justify-content: space-between;
  height: 2px;
  margin: 0 120px 139px;
}

.delimiter {
  &__line {
    height: 2px;
    width: 46.6%;
    background-color: rgba(73, 128, 234, 0.35);
    border-radius: 1px;
  }

  &__slash {
    width: 46px;
    height: 2px;
    background-color: rgba(73, 128, 234, 0.35);
    border-radius: 1px;
    transform: rotate(-60deg);
  }
}
</style>
