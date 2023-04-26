/* cSpell:disable */

import { useMemo } from 'react'
import { useFeatureFlag } from './useFeatureFlag'

export const useList = () => {
  const isZubatAvailable = useFeatureFlag('zubat')
  const isMagnemiteAvailable = useFeatureFlag('magnemite')
  const isKoffingAvailable = useFeatureFlag('koffing')
  const isQuagsireAvailable = useFeatureFlag('quagsire')
  const isUnownAvailable = useFeatureFlag('unown')
  const isDittoAvailable = useFeatureFlag('ditto')
  const isTogepiAvailable = useFeatureFlag('togepi')
  const isLaprasAvailable = useFeatureFlag('lapras')

  const list = useMemo(() =>
    [
      {
        name: '#41 Zubat',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png',
        flag: isZubatAvailable
      },
      {
        name: '#81 Magnemite',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
        flag: isMagnemiteAvailable
      },
      {
        name: '#109 Koffing',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png',
        flag: isKoffingAvailable
      },
      {
        name: '#195 Quagsire',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png',
        flag: isQuagsireAvailable
      },
      {
        name: '#201 Unown',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
        flag: isUnownAvailable
      },
      {
        name: '#132 Ditto',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        flag: isDittoAvailable
      },
      {
        name: '#175 Togepi',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png',
        flag: isTogepiAvailable
      },
      {
        name: '#131 Lapras',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png',
        flag: isLaprasAvailable
      }
    ], [isDittoAvailable, isKoffingAvailable, isLaprasAvailable, isMagnemiteAvailable, isQuagsireAvailable, isTogepiAvailable, isUnownAvailable, isZubatAvailable])

  return list
}
