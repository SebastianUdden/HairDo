import { useState, useEffect, useCallback } from "react"

// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = useCallback(
    keydownEvent => {
      const { key, repeat } = keydownEvent
      if (repeat) return
      if (key !== targetKey) return
      setKeyPressed(true)
    },
    [targetKey]
  )

  const upHandler = useCallback(
    keyupEvent => {
      const { key } = keyupEvent
      if (key !== targetKey) return
      setKeyPressed(false)
    },
    [targetKey]
  )

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [downHandler, upHandler])

  return keyPressed
}

export default useKeyPress
