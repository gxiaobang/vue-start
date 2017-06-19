<template>
  <div class="app">
    <div>{{ message }}</div>
    <tabs :tabs="tabs"></tabs>

    <fetch>
      <template scope="scope">
        {{ scope.data }}
      </template>
    </fetch>
  </div>
</template>

<script>
import Tabs from './components/Tabs'
import Fetch from './components/fetch'
console.log(Fetch)
export default {
  data() {
    return {
      message: '选项卡（tabs）',
      tabs: [
        {
          tab: 'tab 1',
          content: 'content 1'
        },
        {
          tab: 'tab 2',
          content: 'content 2'
        }
      ]
    }
  },
  components: { Tabs, Fetch }
}
</script>

<style lang="scss" scoped>

</style>
