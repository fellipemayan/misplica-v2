import { ref } from 'vue';

const isVisible = ref(false);
const message = ref('');
const type = ref<'success' | 'error' | 'info'>('success');
let timeoutId: ReturnType<typeof setTimeout> | null = null;

export function useSnackbar() {
  const showSnackbar = (text: string, snackType: 'success' | 'error' | 'info' = 'success', duration = 3000) => {
    message.value = text;
    type.value = snackType;
    isVisible.value = true;

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      isVisible.value = false;
    }, duration);
  };

  const hideSnackbar = () => {
    isVisible.value = false;
  };

  return { isVisible, message, type, showSnackbar, hideSnackbar };
}
