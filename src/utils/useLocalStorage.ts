// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage
// https://reactjs.org/docs/hooks-reference.html#lazy-initial-state

import { useEffect, useState, Dispatch } from 'react'

export const useStickyState = (defaultValue: string, key: string): [string, Dispatch<any>] => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
