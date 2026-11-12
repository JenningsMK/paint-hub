<script setup lang="ts">
import StageStatus from "./StageStatus.vue";
import { listOfStatues } from "./constants.ts";
</script>

<template>
  <Story title="Stage status" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="status in listOfStatues" :key="status" :title="status">
      <StageStatus :status="status" />
    </Variant>
    <Variant title="Unknown status">
      <StageStatus status="unknown" />
    </Variant>
  </Story>
</template>
