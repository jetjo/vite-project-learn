import { ref, onMounted, onUnmounted, toRefs, toRef, computed } from "vue";
import { $, $ref } from "vue/macros";
import { useAddEventHandler } from "./add-event-handler";
import { useLogger } from "./reactive-logger";

export function useComposables() {
  const x = ref(0);
  let y = $ref(0);

  useLogger({ x, y: computed(() => y) });

  function update(e: MouseEvent) {
    x.value = e.pageX;
    y = e.pageY;
  }

  useAddEventHandler(document.body, "mousemove", <any>update);

  return { x, y: computed(() => y) };
}
