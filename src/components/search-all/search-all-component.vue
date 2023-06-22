<template>

    <svg class="ai-search-line" :viewBox='getViewBoxSize' xmlns="http://www.w3.org/2000/svg">
<!--      <circle cx="400" cy="390" r="380" stroke="grey" fill="#ffffff" stroke-width="1px"/>-->
<!--      <circle cx="400" cy="390" r="300" stroke="red" fill="#ffffff" stroke-width="1px"/>-->
<!--      <circle cx="400" cy="390" r="200" stroke="red" fill="#ffffff" stroke-width="1px"/>-->

      <template v-for="item in data_search_result" :key="item.index">
        <search-all-segment :index=item.index :text="item.text" :search-count="item.count" :parent="parent" :delta="delta" :segmentClick="segmentClick"/>
      </template>

      <circle :cx="cx + delta.x" :cy="cy + delta.y" r="60" stroke="chocolate" fill="#ffffff" stroke-width="2px"/>
      <text :x="cx+ delta.x" :y="cy + delta.y" text-anchor="middle" fill="#000" style="font: normal 18px sans-serif;">
        Везде
      </text>
      <text :x="cx + 20 + delta.x" :y="cy + delta.y +22" text-anchor="middle" fill="gray" style="font: normal 12px sans-serif;">
        192
      </text>

      <!--      &lt;!&ndash; Если вы не укажете цвет контура,-->
      <!--           линия не будет видна &ndash;&gt;-->
    </svg>

</template>

<script>
import SearchAllSegment from "@/components/search-all/search-all-segment.vue";

export default {
  name: "search-all-component",
  components: {SearchAllSegment},
  emits: {
    emits: ["segmentClick"]
  },
  props: {
    parent: {
      type: Object,
      default: () => ({
        size: {width: 400, height: 400}
      })
    },
    data_search_result: {
      type: Array,
      default: () => ([])
    },
    delta: {
      type: Object,
      default: () => {
        return {
          x: 50,
          y: -120
        }
      }
    }
  },
  methods: {
    segmentClick(index){
      this.$emit('segmentClick', index)
    }
  },
  computed: {
    getViewBoxSize: function () {
      return `0 0 ${this.$props.parent.size.width} ${this.$props.parent.size.height}`
    }
  },
  data() {
    return {
      cx: 400,
      cy: 390
    }
  }
}
</script>

<style scoped>

</style>
