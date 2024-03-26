export function playBeep(muted) {
  if (!muted) {
    const beep = new Audio("/beep.wav");
    beep.play();
  }
}