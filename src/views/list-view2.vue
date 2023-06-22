<template>
  <div>
    <div
        v-for="item in fields" :id="item.id" :key="item.id"
        class="list"
        @click="selectItem(item)"
    >
      <div>{{item.text}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ListView2",
  components: {
  },
  props: {
    fields: Array
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    selectItem(item) {
      if (this.selectedItem !== null) {
        document.getElementById(this.selectedItem.id).style.backgroundColor = ''
      }

      this.selectedItem = {...item}
      document.getElementById(item.id).style.backgroundColor = '#dfe0e1'
    }
  }
}
</script>

<style lang="scss">
.list {
  background-color: rgba(243, 242, 242, 0.79);
  padding: 7px 15px 7px 15px;
  border-radius: 5px;
  border: 1px solid rgba(68, 85, 102, 0.8274509804);
  margin: 10px;
  color: #576a7c;
  font: 14px "Helvetica Neue", "Segoe UI";
}

.list:hover {
  background-color: #e8ebef;
}

</style>