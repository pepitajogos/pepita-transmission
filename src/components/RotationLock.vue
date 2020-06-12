<template>
  <div class="rotation-lock">
    <div class="rotation-lock-content">
      <img src="../assets/rotate.svg" alt="Rotate" />
      <p>Rotate your phone to landscape.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// rotation lock
.rotation-lock {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;

  &-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      width: 65px;
    }

    p {
      font-size: 18px;
      color: #ffffff;
    }
  }
}
@media all and (orientation: portrait) {
  .rotation-lock {
    display: block;
  }
}
</style>
