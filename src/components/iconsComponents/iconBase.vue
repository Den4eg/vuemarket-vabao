<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName">
      {{ iconName }}
    </title>
    <g :fill="iconColor">
      <component :is="iconName + 'Icon'" />
      <!-- <slot :hover="hover" /> -->
    </g>
  </svg>
</template>

<script>
import vkIcon from './vkIcon'
import facebookIcon from './facebookIcon'
import instaIcon from './instaIcon'
import painterestIcon from './painterestIcon'
export default {
  components: {
    vkIcon,
    facebookIcon,
    instaIcon,
    painterestIcon
  },
  props: {
    iconName: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
