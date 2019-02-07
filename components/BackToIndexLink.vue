<template>
  <nuxt-link to="/" class="back-to-index-link">🔙 Regresar al índice</nuxt-link>
</template>

<!-- Using the `scoped` attribute -->
<style lang="scss" scoped>
@import '~assets/styles/settings/variables';
@import '~assets/styles/tools/mixins';

.back-to-index-link {
  color: $accent-100;
  border-bottom: 2px solid $primary-35;
  transition: border-bottom 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: $accent-100;
    text-decoration: none;
    border-bottom: 2px solid $primary-100;
  }
}
</style>
