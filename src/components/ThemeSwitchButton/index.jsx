import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function ThemeSwitchButton() {
  const local = useContext(ThemeContext)
  const changeThemeToDark = local.changeThemeToDark;
  const changeThemeToLight = local.changeThemeToLight;


  const Theme = local.Theme


  function handleSwitchAction(e){
    e.preventDefault()
    if(Theme === "light"){
      changeThemeToDark();
    }
    else if(Theme === "dark") {
      changeThemeToLight();
    }
  }

  return (
    <button onClick={handleSwitchAction} className="p-1 rounded-md bg-primary-dark dark:bg-primary transition-all ">
    <svg className='block dark:hidden stroke-primary fill-primary-dark dark:fill-primary-dark' width={38} height={38} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" /></svg>
    <svg className='hidden dark:block stroke-primary-dark fill-primary' width={38} height={38} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" /> <path d="M12 1v2" /> <path d="M12 21v2" /> <path d="m4.22 4.22 1.42 1.42" /> <path d="m18.36 18.36 1.42 1.42" /> <path d="M1 12h2" /> <path d="M21 12h2" /> <path d="m4.22 19.78 1.42-1.42" /> <path d="m18.36 5.64 1.42-1.42" /></svg>
    </button>
  )
}

export default ThemeSwitchButton