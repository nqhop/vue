import { ref } from 'vue';

export default function useAlert(starttingVisibility = false) {
  const alertIsVisible = ref(starttingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
