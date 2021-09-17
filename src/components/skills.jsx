import React from 'react'
import PropTypes from 'prop-types'


// un petit prop drilling 
const Skill = ({DataSkills}) => {

return(
  <div className="skill"> 
    <li>{DataSkills.name}</li>
    <li>{DataSkills.vote}</li>
  </div>)
    
}
Skill.propTypes = {
    name: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired
}

export default Skill;


