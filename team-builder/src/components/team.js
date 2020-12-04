import React from 'react'
import './team.css'

const Team = (props) => {
    return (
        <div className="team-list">
            {props.teamMember.map((team) => (
                <div className="team" key={team.id}>
                    <h2>{team.name}</h2>
                    <h3>{team.email}</h3>
                    <h3>{team.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default Team
