import { triggerHaptic } from 'tactus'

export function useHaptics() {
  const hapticTap = () => triggerHaptic(30)
  const hapticLight = () => triggerHaptic(15)

  return { hapticTap, hapticLight }
}
