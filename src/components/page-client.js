'use client'

import { useEffect, useState } from "react"
import Loader from "./loader"

export default function PageClient({ children }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      <Loader show={showLoader} />
      {!showLoader && children}
    </>
  )
} 