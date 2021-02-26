import React, { useState } from 'react'
import Form from './components/form'
import Team from './components/team'

import './App.css'

function App() {
    const [teamMember, setTeamMember] = useState([])

    const addNewTeam = (team) => {
        const newMember = {
            id: Date.now(),
            name: team.name,
            email: team.email,
            role: team.role,
        }
        setTeamMember([...teamMember, newMember])
    }

    return (
        <div className="App">
            <h1>Team Manager App</h1>
            <Form addNewTeam={addNewTeam} />
            <Team teamMember={teamMember} />
        </div>
    )
}

export default App
