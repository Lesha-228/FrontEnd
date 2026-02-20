import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserCard from './UserCard'
import SkillList from './SkillList'
import { User, Skill } from './types'

function App() {
    const [count, setCount] = useState(0)

    const user: User = {
        name: "Beka",
        email: "prostobomba@bk.ru",
        age: 19
    }

    const skills: Skill[] = [
        { id: 1, name: "React", level: "Intermediate" },
        { id: 2, name: "TypeScript", level: "Beginner" },
        { id: 3, name: "Node.js", level: "Expert" }
    ]

    return (
        <>
            {/* ===== Стандартный Vite блок ===== */}
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1>Vite + React</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            {/* ===== UserCard ===== */}
            <UserCard user={user} isActive={true}>
                <p>Status: Learning TypeScript 🚀</p>
            </UserCard>

            {/* ===== SkillList ===== */}
            <SkillList skills={skills} />

        </>
    )
}

export default App
