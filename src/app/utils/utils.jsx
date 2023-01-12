import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [screenSize,setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth)
      }
    window.addEventListener('resize',handleResize)
      return () => {
        window.addEventListener('resize',handleResize)
      }
    }, [])
    return screenSize
    
}