import { useEffect, useState } from 'react'

const pointerQuery = '(hover: hover) and (pointer: fine)'

function usePointerFine() {
  const [pointerFine, setPointerFine] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(pointerQuery)
    const updatePointer = () => setPointerFine(mediaQuery.matches)

    updatePointer()
    mediaQuery.addEventListener('change', updatePointer)

    return () => mediaQuery.removeEventListener('change', updatePointer)
  }, [])

  return pointerFine
}

export default usePointerFine
