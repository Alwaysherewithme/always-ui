<template>
  <div class="test">
    <a-header></a-header>
    <a-container>
      <a-aside></a-aside>
      <a-main>
        <a-button type="primary" size="large">Start</a-button>
        <a-button type="danger" size="small">End</a-button>
      </a-main>
    </a-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app, .test {
  height: 100%;
}

.test {
  display: flex;
  flex-direction: column;
}

.a-header {
  background-color: #3a8ee6;
}

.a-aside {
  background-color: #5daf34;
}

.a-main {
  background-color: #82848a;
}
</style>
