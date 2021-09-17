import React from "react";
import "./cards.css";
import Skill from './skills.jsx'

const Cards = ({person}) => (
  <>
    <div className= "Card">
      <img className= "avatar" src={person.avatar} alt="avatar" />
      <h3 className= "personName">{person.personName}</h3>
      <div>
        <p className="description">{person.description}</p>
      </div>
      <div className="skillsList">
        <p>{person.skills?.map(skill => {
          return <Skill DataSkills={skill}/>
            }
          ) 
          || "No skills"}
        </p>
      </div>
    </div>
  </>
)

export default Cards;