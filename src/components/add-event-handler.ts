import { onMounted, onUnmounted } from "vue";

type Handler = (e: Event) => void;

export function useAddEventHandler(
  currentTarget: Element,
  event: string,
  handler: Handler
) {
  onMounted(() => currentTarget.addEventListener(event, handler));
  onUnmounted(() => currentTarget.removeEventListener(event, handler));
  console.log("事件绑定");
}
