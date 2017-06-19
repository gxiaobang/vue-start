<template>
  <div class="tabs">
    <div class="tabs-header">
      <div
        class="tabs-header-item"
        v-for="(item, index) of tabs"
        @click="handleClick(index)"
        :class="{ active: tabIndex == index }"
      >
        {{ item.tab }}
      </div>
    </div>

    <div class="tabs-content">
      <div
        class="tabs-content-item"
        v-for="(item, index) of tabs"
        :style="{ display: tabIndex == index ? 'block' : 'none' }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  componentName: 'tabs',
  data() {
    return {
      tabIndex: 0
    }
  },
  props: ['tabs'],
  methods: {
    handleClick(index) {
      this.tabIndex = index;
    }
  }
}
</script>
<style lang="scss" scoped>
  $color: #ccc;
  .tabs {
    // background-color: red;

    .tabs-header {
      // color: $color;

      > .tabs-header-item {
        display: inline-block;
        margin: 3px;
        padding: 3px;
        border: 1px solid #ccc;
        cursor: pointer;

        &.active {
          color: white;
          background-color: red;
        }
      }
    }

    .tabs-content {
      > .tabs-content-item {
        // display: none;
      }
    }
  }
</style>
