import React from 'react'
import classes from './burialInfo.module.css'

const BurialsInfo = () => {
  return (
    <div className={classes.burialInfoContainer}>
        <div 
            className={classes.left}
            data-aos='zoom-in'
            data-aos-once='true'
            data-aos-duration='1000'
            data-aos-anchor-placement="center-bottom"    
        >
            <div className={classes.burialText}>
                <h2> Мы поддерживаем</h2>
                <p> десятки язвенных скотомогильников по всей России. Финансирование захоронений сельскохозяйственных животных проводится на безвозмездной основе. Приобретенные кости идут на суп бездомным.</p>  
            </div>
        </div>
        <div  className={classes.right}>
            <div 
                className={classes.slider}
                data-aos='slide-left'
                data-aos-easing='ease-in-sine'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-anchor-placement="center-bottom"
            />
        </div>
    </div>
  )
}

export default BurialsInfo