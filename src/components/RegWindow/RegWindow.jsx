import React from 'react'
import classes from './regWindow.module.css'
import MyButton1 from '../UI/Buttons/MyButton1/MyButton1'
import { useState } from 'react'

const RegWindow = () => {
    const [type, setType] = useState('login')
    const [notification, setNotification] = useState('')


    if (type === 'login') {
        return (
        <div className={classes.regWindow}>
              Вход
              <div style={{color:'red'}}>
                {notification}
              </div>
              <input type='text' placeholder='Логин'/>
              <input type='password' placeholder='Пароль'/>
    
              <MyButton1 onClick={()=>setNotification('Извитие, у нас технические неполадки')}>
                Войти
              </MyButton1>
              <p onClick={()=>{setType('registration'); setNotification('')}}> Еще не зарегистрированы?</p>
              <p 
                onClick={()=>{setType('resetPas'); setNotification('')}}
                
              >Забыли пароль?</p>
        </div>
      )
    } else if (type === 'registration') {
        return (
            <div className={classes.regWindow}>
                Регистрация
                <div style={{color:'red'}}>
                    {notification}
                </div>
                <input type='text' placeholder='Логин'/>
                <input type='password' placeholder='Пароль'/>
                <input type='password' placeholder='повторите пароль'/>
        
                <MyButton1 onClick={()=>setNotification('Извитие, у нас технические неполадки')}> Зарегистироваться </MyButton1>
                <p onClick={()=>{setType('login'); setNotification('')}}>  Уже зарегистрированы? Войдите</p>
            </div>
        )
    } else if (type === 'resetPas') {
      return (
        <div className={classes.regWindow} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                Вспоминайте
        
                <p onClick={()=>{setType('login'); setNotification('')}}>  Уже зарегистрированы? Войдите</p>
            </div>
      )
    }
  
}

export default RegWindow