import React from 'react'
import classes from './employeeCard.module.css'

const EmployeeCard = ({name, description, photoID}) => {

    let url = './../../images/emp/emp' + photoID + '.jpg'

  return (
    <div className={classes.employeeCard}>
                <img alt='Фото' src={`emp/emp${photoID}.jpg`}/>
                <h3>{name}</h3>
                <p>{description}</p>
    </div>
  )
}

export default EmployeeCard