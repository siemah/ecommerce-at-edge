"use client";

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("<<<[[[[error]]]]>>>", error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        className='bg-red-400 text-white rounded-md px-8 py-4'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}