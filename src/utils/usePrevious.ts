// @ts-nocheck
import { useEffect, useRef } from 'react'

export const usePrevious = (value: string): string => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
