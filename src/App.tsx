//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'

import { useTranslation } from 'react-i18next';
import './i18n'; // Importa a inicialização
import { FaCalendarAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };


  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[url('./assets/code.jpg')] bg-cover bg-center bg-no-repeat">

        <div className="m-2">
          <button className="cursor-pointer m-2 hover:scale-110 transition-transform duration-100 ease-in-out" title="Português" onClick={() => changeLanguage('pt')}>
            <img src="/src/assets/flag-br.png" alt="Português" className="w-20" />
          </button>
          <button className="cursor-pointer m-2 hover:scale-110 transition-transform duration-100 ease-in-out" title="English" onClick={() => changeLanguage('en')}>
            <img src="/src/assets/flag-uk.png" alt="English" className="w-20" />
          </button>      
        </div>

        <div className="font-cursive text-4xl font-bold text-black mb-4 bg-white/90 p-4 rounded-lg w-3/4 text-center">
          {t('welcome')}
        </div>

        <div className="font-cursive text-2xl font-bold text-black mb-4 bg-white/90 p-4 rounded-lg w-3/4 text-center">
          {t('Presentation')}
        </div>         

        <div className="flex justify-around flex-row flex-wrap font-cursive  mb-4 bg-white/50 p-4 rounded-lg w-3/4 text-center">          

          <div className="w-40 m-4 p-2 bg-white/90 rounded-lg text-2xl font-bold text-blue">
            {t('Calendar')}
            <div className="flex justify-around gap-4 m-2 p-2 text-blue-800">
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out" onClick={() => (window.location.href = 'https://google.com')}><FaCalendarAlt /></div> 
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaGithub /></div>
            </div>                   
          </div>              

          <div className="w-40 m-4 p-2 bg-white/90 rounded-lg text-2xl font-bold ">
            {t('Calendar')}
            <div className="flex justify-around gap-4 m-2 p-2 text-blue-800">
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaCalendarAlt /></div> 
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaGithub /></div>
            </div>                   
          </div>      
          
          <div className="w-40 m-4 p-2 bg-white/90 rounded-lg text-2xl font-bold text-blue">
            {t('Calendar')}
            <div className="flex justify-around gap-4 m-2 p-2 text-blue-800">
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaCalendarAlt /></div> 
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaGithub /></div>
            </div>                   
          </div>              

          <div className="w-40 m-4 p-2 bg-white/90 rounded-lg text-2xl font-bold ">
            {t('Calendar')}
            <div className="flex justify-around gap-4 m-2 p-2 text-blue-800">
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaCalendarAlt /></div> 
              <div className="cursor-pointer hover:scale-140 transition-transform duration-100 ease-in-out"><FaGithub /></div>
            </div>                   
          </div> 
          
        </div>   

      </main>  

    </>
  )
}

export default App
