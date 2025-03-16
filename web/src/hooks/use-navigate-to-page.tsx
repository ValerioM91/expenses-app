import { useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'

export const useNavigateToPage = () => {
  const navigate = useNavigate()
  return useCallback((page: number) => navigate({ to: '/', search: { page } }), [])
}
