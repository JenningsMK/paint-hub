<script setup lang="ts">
import type { PropType } from "vue";

import { computed } from "vue";
import { listOfStatues } from "./constants.ts";

type Status = (typeof listOfStatues)[number];

const props = defineProps({
  status: {
    type: String as PropType<Status>,
    default: "on-sprue",
    validator: (value: unknown) => listOfStatues.includes(value as Status),
  },
});

const options = {
  "on-sprue": {
    colour: "var(--on-sprue)",
    text: "On sprue",
  },
  construction: {
    colour: "var(--construction)",
    text: "Constructing",
  },
  painting: {
    colour: "var(--painting)",
    text: "Painting",
  },
  done: {
    colour: "var(--done)",
    text: "Done",
  },
} satisfies Record<Status, { colour: string; text: string }>;

const statusDisplay = computed(() => options[props.status as Status]);
</script>

<template>
  <span
    v-if="statusDisplay"
    :class="$style['stage-status']"
    :style="{ background: statusDisplay.colour }"
  >
    {{ statusDisplay.text }}
  </span>
  <span :class="$style['stage-status']" v-else>{{ status }}</span>
</template>

<style module>
.stage-status {
  --on-sprue: #599fbf;
  --construction: #d4bc6c;
  --painting: #b36cd4;
  --done: #6a9e4a;

  color: black;
  border-radius: 3px;
  padding: 3px;
}
</style>
