<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const hello = ref<string>('Hello world!');

    return {
      hello,
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
}
</style>
