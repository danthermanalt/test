import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // TODO: Remove
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                {/*Placeholder logo. TODO: Replace or remove*/}
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h1>Placeholder</h1>
            <div className="card">
                {/*Sample functionality incrementing a counter on button click. TODO: remove*/}
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
