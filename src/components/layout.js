import React from "react"

export default function Layout({ children }) {
    return (
    <div style={{ margin: `3em auto`, maxWidth: `1400px`, padding: `0 1rem`}}>
    {children}
    </div>
    )
}