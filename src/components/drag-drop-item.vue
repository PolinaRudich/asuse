<template>
  <div class="cc-card">
    <h3>{{data.title}}</h3>
    <p>
      {{data.description}}
    </p>
    <button v-if="!data.done" class="cc-btn">
      Mark Done
    </button>
  </div>
</template>

<script>
export default {
  name: 'DragDropItem',
  props: ['data']
}
</script>