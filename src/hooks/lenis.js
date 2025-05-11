'use client'

import Lenis from 'lenis';
import { useEffect } from "react";

export function LenisComponent() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, [])
}