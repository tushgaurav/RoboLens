'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            This is a cusom error page.
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}