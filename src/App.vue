<template>
  <div class="app">{{ hello }}</div>
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
  ::placeholder {
    color: gray;
  }

  font-weight: bold;
  background-image: url(./assets/images/corgi.jpeg);
}
</style>
