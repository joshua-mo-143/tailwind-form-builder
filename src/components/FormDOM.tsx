import React from 'react'
import useDOM from './hooks/useDOM';
import { formDataStore } from './zustandStore';

const FormDOM = () => {
  const rawCSS = formDataStore((state:any) => state.rawCSS);
  const {meme} = useDOM();

  return (
    <>
    <style>
      {rawCSS}
    </style>
    
    <div className="absolute w-full">
    <div id="FormScreen" className="w-full min-h-screen bg-neutral-100">
        <form id="FormDOM" className="m-auto flex flex-col text-center break-words justify-center w-4/5" onClick={meme}>
        </form>
    </div>
    </div>
    </>
  )
}

export default FormDOM