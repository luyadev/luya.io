<template>
  <a class="apilink" target="_blank" :href="link">
    {{ name }}
    <span v-if="method.length > 0"> -> {{ method }}()</span>
    <span v-if="prop.length > 0"> -> ${{ prop }}</span>  
  </a>
</template>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  method: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  }
})

const link = computed(() => {
  let name = props.name.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '-')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '-')
    .replace(/\s+/g, "-");

  let anchor = '';
  // #webComponent()-detail
  if (props.method.length > 0) {
    anchor = '#' + props.method + '()-detail'
  }
  // #$tags-detail
  if (props.prop.length > 0) {
    anchor = '#$' + props.prop + '-detail'
  }
  
  return 'https://api.luya.io/' + name + '.html' + anchor;
})
</script>

<style scoped>
.apilink {
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: blue;
}
</style>