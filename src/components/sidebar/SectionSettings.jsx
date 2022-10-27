import React, {useEffect, useState} from 'react'
import { useSectionStore } from '../zustandStore'
import { faMinus, faPassport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useModal from '../hooks/UseModal';
import useSection from '../hooks/useSection';

const SectionSettings = (sectionss) => {

    const [sectionSettingsVis, toggleSectionSettingsVis] = useSectionStore((state) => [state.sectionSettingsVis, state.toggleSectionSettingsVis]);
    const [changeSectionName, setChangeSectionName] = useSectionStore((state) => [state.changeSectionName, state.setChangeSectionName]);
    const [sectionSelected, setSectionSelected] = useSectionStore((state) => [state.sectionSelected, state.setSectionSelected]);
    const {setSectionName} = useSection();

      const toggleChangeSectionName = (e) => {
        const changenamediv = document.querySelector('#changenamesection')
        changenamediv.classList.toggle('hidden');
      }

      const toggleBorder = () => {
        let section = document.querySelector(`#${sectionSelected}`);
        section.classList.toggle("border");
        section.classList.toggle("shadow-sm");
      }

      const handleNameChange = () => {
        let meme = document.querySelector(`#${sectionSelected}`);
        setSectionName(meme, changeSectionName);
      }

      useEffect(() => {},[sectionss])

  return (
    <div className="mt-5 bg-blue-200 w-4/5 m-auto px-4 py-2 rounded-xl">
            <p className="text-lg cursor-pointer" onClick={() => toggleSectionSettingsVis(!sectionSettingsVis)}>Section Settings
            {sectionSettingsVis ? <FontAwesomeIcon icon={faMinus} className="ml-10"/> : <FontAwesomeIcon icon={faPlus} className="ml-10"/>} </p>
          <div className={sectionSettingsVis ? "" : "hidden"}>
            

                <label htmlFor="change-name" id="change-name" className="my-4 block flex gap-4 flex-col justify-center py-2 px-5 rounded-xl bg-blue-300 m-auto">
                  <p onClick={toggleChangeSectionName} className="cursor-pointer">Change section name</p>
                    <div id="changenamesection" className="hidden">
                    <input id='change-name' name="change-name" value={changeSectionName} onChange={e => setChangeSectionName(e.target.value)} className="w-4/5 m-auto py-2 px-5"></input>
                    <button className="rounded-xl mt-5 bg-gray-400" onClick={handleNameChange}>Change name</button>
                    </div>
                </label>

            <div className="flex flex-col gap-4 mb-2">
            <button onClick={toggleBorder} className='bg-blue-300 rounded-xl shadow-sm'>Toggle Section Border</button>
            </div>
          </div>
        </div>
        
  )
}

export default SectionSettings