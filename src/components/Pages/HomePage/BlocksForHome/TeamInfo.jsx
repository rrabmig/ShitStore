import React from 'react'
import classes from './teaminfo.module.css'
import EmployeeCard from './../../../EmployeeCard/EmployeeCard'
import employee from '../../../../data/Employee'

const TeamInfo = () => {
  return (
    <div className={classes.teamInfoContainer}>
        <h2 style={{marginTop:'50px'}}> Наша команда - профессионалы</h2>
        <div className={classes.employee}>
            {employee.map( x =>
                <EmployeeCard name={x.name} description={x.description} photoID={x.photoID}/>
            )}
        </div>
        <p></p>
    </div>
  )
}

export default TeamInfo