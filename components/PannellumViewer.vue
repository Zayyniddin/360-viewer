<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script setup>
const props = defineProps({
  firstImageUrl: {
    type: String,
    required: true,
  },
  secondImageUrl: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  if (typeof init360Viewer === "function") {
    init360Viewer(
      "#viewer-container",
      props.firstImageUrl,
      props.secondImageUrl
    );
  }
});
</script>

<style scoped>
.viewer-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
</style>
