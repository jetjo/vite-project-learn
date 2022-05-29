import { isRef, ref, watchEffect } from "vue";

export function useLogger({ x, y }: any) {
  const t = ref();
  if (isRef(y)) {
    watchEffect(() => {
      t.value = y.value;
      console.log(y, "yRef");
    });
  } else {
    console.log(y, "y");
  }
}
