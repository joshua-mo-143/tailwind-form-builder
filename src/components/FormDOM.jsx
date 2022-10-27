import { faArrowLeft, faArrowRight, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { formDataStore, useFormVarsStore, useSectionStore } from './zustandStore';

const FormDOM = () => {
  
  const [settingsVis, toggleSettingsVis] = useFormVarsStore((state) => [state.settingsVis, state.toggleSettingsVis]);
  const [sectionSelected, setSectionSelected] = useSectionStore((state) => [state.sectionSelected, state.setSectionSelected]);

  const rawCSS = formDataStore((state) => state.rawCSS);

  const meme = (e) => {
    const element = document.elementFromPoint(e.clientX,e.clientY);

    if (document.querySelector('#delete-element-button')) {
      let mem = document.querySelector('#delete-element-button');
      mem.remove();
    }
    if (element.tagName == "SECTION") {
      setSectionSelected(element.id);
      let dbutton = document.createElement('button');
      dbutton.id = 'delete-element-button';
      dbutton.textContent = "x";
      dbutton.classList.add('text-lg', 'font-bold', 'text-red-500', 'absolute', 'top-0', 'right-0');
      dbutton.addEventListener('click', function deleteElement(e) {
        e.preventDefault()
        element.remove();
        setSectionSelected("");
      })
      element.append(dbutton);
    }
  }
  return (
    <>
    <style>
      {rawCSS}
    </style>
    <div className={settingsVis ? "w-2/3 relative" : "absolute w-full"}>
      <button className="absolute left-0" onClick={() => toggleSettingsVis(!settingsVis)}>
        {settingsVis ? 
        <FontAwesomeIcon icon={faArrowLeft} className="ml-2" size="2xl"/>
        :
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" size="2xl"/>}
        </button>
    <div id="FormScreen" className="w-full min-h-screen bg-neutral-100">
        <form id="FormDOM" className="m-auto flex flex-col text-center break-words justify-center w-4/5" onClick={meme}>

        </form>
    </div>

    </div>
    </>
  )
}

export default FormDOM