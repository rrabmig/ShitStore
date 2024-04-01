import React from 'react'
import classes from './teaminfo.module.css'
import EmployeeCard from './../../../EmployeeCard/EmployeeCard'
import employee from '../../../../data/Employee'
import MyButton1 from '../../../UI/Buttons/MyButton1/MyButton1'

const TeamInfo = () => {
  return (
    <div className={classes.teamInfoContainer}>
        <h2 style={{marginTop:'50px'}}> Наша команда - профессионалы</h2>
        <div className={classes.employee}>
            {employee.map( x =>
                <EmployeeCard name={x.name} description={x.description} photoID={x.photoID}/>
            )}
        </div>
        
        <div className={classes.additionalText}>
          <p>А так же еще 134 специалиста пищевой промышленности трудятся ради блага наших клиентов. Каждый день они осуществляют полный контроль о осуществление технологического процесса выжимки сока из мусорных мешков.</p>
          <MyButton1> Стать частью комнады </MyButton1>
        </div>
    </div>
  )
}

export default TeamInfo