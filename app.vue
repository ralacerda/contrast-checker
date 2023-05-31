<script setup lang="ts">
import "./node_modules/bulma/bulma.sass";
</script>

<template>
  <Head>
    <Title>Multiple Colors Contrast Checker</Title>
  </Head>
  <div class="container is-fullhd box">
    <div class="block">
      <TopPanel />
    </div>
    <div class="block">
      <ColorPicker />
    </div>
    <div class="block">
      <GridResult />
    </div>
  </div>

  <div></div>
</template>

<style scoped>
.container > .block + .block {
  border-top: solid 1px #00000010;
}
</style>
