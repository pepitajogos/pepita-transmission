<template>
  <div :style="style"></div>
</template>

<script>
  export default {
    name: 'background',
    data: () => ({
      url: null
    }),
    props: ['image'],
    computed: {
      style() {
        return {
          background: `url(${this.image})`,
          width: '100vw',
          height: '100vh',
          'max-height': '100vh',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        }
      }
    }
  }
</script>