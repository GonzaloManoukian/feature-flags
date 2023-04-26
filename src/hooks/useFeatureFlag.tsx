/* cSpell:disable */
import { useFlags } from 'flagsmith/react'

const localFlags = {
  zubat: true,
  magnemite: true,
  koffing: true,
  quagsire: true,
  unown: true,
  ditto: true,
  togepi: true,
  lapras: true
}

type Flags = typeof localFlags;
type FlagsKeys = keyof Flags;

export const useFeatureFlag = (flag: FlagsKeys) => {
  const isFlagEnabled = useFlags([flag])
  if (window.location.hostname.match('localhost')) {
    return localFlags[flag]
  }
  return isFlagEnabled[flag].enabled
}
