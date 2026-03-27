import { ref, onUnmounted } from 'vue';

export function useAnimationPlayer() {
  const currentStep = ref(1);
  const isPlaying = ref(true);
  const isBusy = ref(false);
  const totalSteps = ref(0);

  let timerId: ReturnType<typeof setTimeout> | null = null;
  let currentStepTimes: number[] = [];

  const clearTimer = () => {
    if (timerId) clearTimeout(timerId);
  };

  const nextAuto = () => {
    if (!isPlaying.value) return;

    currentStep.value = (currentStep.value % totalSteps.value) + 1;
    const timeForThisStep = currentStepTimes[currentStep.value - 1];
    timerId = setTimeout(nextAuto, timeForThisStep);
  };

  // --- AÇÕES PÚBLICAS ---

  const init = (times: number[], autoplay = true) => {
    clearTimer();
    currentStepTimes = times;
    totalSteps.value = times.length;
    currentStep.value = 1;
    isPlaying.value = autoplay;

    if (autoplay) {
      timerId = setTimeout(nextAuto, currentStepTimes[0]);
    }
  };

  const togglePlayPause = () => {
    if (isBusy.value) return;
    isPlaying.value = !isPlaying.value;

    if (isPlaying.value) {
      timerId = setTimeout(nextAuto, currentStepTimes[currentStep.value - 1]);
    } else {
      clearTimer();
    }
  };

  const setStep = (step: number, skipDelay = 400) => {
    if (isBusy.value || step === currentStep.value) return;

    isBusy.value = true;
    clearTimer();

    currentStep.value = step;

    if (isPlaying.value) {
      timerId = setTimeout(nextAuto, currentStepTimes[currentStep.value - 1]);
    }

    setTimeout(() => {
      isBusy.value = false;
    }, skipDelay);
  };

  const nextStep = () => {
    setStep((currentStep.value % totalSteps.value) + 1);
  };

  const backStep = () => {
    setStep(currentStep.value === 1 ? totalSteps.value : currentStep.value - 1);
  };

  const resetAnimation = () => {
    if (isBusy.value) return;
    setStep(1);
    if (!isPlaying.value) togglePlayPause();
  };

  onUnmounted(() => {
    clearTimer();
  });

  return {
    currentStep,
    totalSteps,
    isPlaying,
    isBusy,
    init,
    togglePlayPause,
    setStep,
    nextStep,
    backStep,
    resetAnimation
  };
}
