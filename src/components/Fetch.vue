<template>
  <div class="fetch">
    <slot :data="data"></slot>
    <button @click="handleChange">改变</button>
  </div>
</template>
<script>
export default {
  name: 'fetch',
  componentName: 'fetch',
  data() {
    return {
      data: []
    }
  },
  methods: {
    handleChange() {
      this.data = [1, 2];
    }
  }
}
</script>