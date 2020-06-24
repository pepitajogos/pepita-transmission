<template>
  <div class="loading-container">
    <span class="loading"></span>
  </div>
</template>
<script>
export default {
  name: "LoadingSpinner"
};
</script>
<style>
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  background: 0;
  border-radius: 999px;
  border-top-color: white;
  border-left-color: white;
  animation: spin 0.7s infinite linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>