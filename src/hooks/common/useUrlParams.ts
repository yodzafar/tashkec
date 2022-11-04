import { useRouter } from 'next/router'
import { useMemo } from 'react'

export interface QueryData extends Record<string, string | undefined> {
  type?: string
}

export function useUrlParams() {
  const router = useRouter()
  return useMemo(():QueryData => {
    const t: Record<string, string | undefined> = {}
    const queryParams = router.asPath.split('?')[1]
    if (queryParams) {
      const arr = queryParams.split('&')
      for(const item of arr) {
        const r = item.split('=')
        t[r[0]] = r[1]
      }
    }

    return t
  }, [router.asPath])
}