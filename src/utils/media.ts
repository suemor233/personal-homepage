"use client"
import { useMedia } from 'react-use'

export const useWideMedia = () => useMedia('(min-width: 768px)', true)
