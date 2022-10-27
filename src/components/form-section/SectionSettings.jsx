import React, {useEffect, useState} from 'react'
import { useSectionStore } from '../zustandStore'
import { faMinus, faPassport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useModal from '../modal/UseModal';
import DeleteModal from '../modal/DeleteModal';

const SectionSettings = (sectionss) => {

    const [sectionSettingsVis, toggleSectionSettingsVis] = useSectionStore((state) => [state.sectionSettingsVis, state.toggleSectionSettingsVis]);
    const [changeSectionName, setChangeSectionName] = useSectionStore((state) => [state.changeSectionName, state.setChangeSectionName]);
    const [sectionSelected, setSectionSelected] = useSectionStore((state) => [state.sectionSelected, state.setSectionSelected]);
    const {vis, toggle, cssVis, setCssVis} = useModal();

    const handleChangeSectionName = (e) => {
        e.preventDefault()
        console.log(sectionSelected);
        const oldName = sectionSelected;
        const changenamediv = document.querySelector('#changenamesection')
    
        // change the ID of the selected section to be the new name
        document.querySelector(`#${sectionSelected}`).id = changeSectionName;
    
        // update state of the Sections array to filter out the old name, and add new one
        setSections([sections.filter(section => section != oldName), changeSectionName]);
        setSectionSelected(changeSectionName);
        setChangeSectionName("");
        changenamediv.classList.toggle('hidden');
        
      }

      const confirmDelete = () => {
        let deletedItem = document.querySelector(`#section-selector`).value;
        let meme = document.querySelector(`#${deletedItem}`);
    meme.remove();
    document.querySelector(`#section-selector`).value = "";
    toggle();
    };

      const toggleChangeSectionName = (e) => {
        const changenamediv = document.querySelector('#changenamesection')
        changenamediv.classList.toggle('hidden');
      }
      
      const deleteSection = () => {
        toggle();
      }

      const toggleBorder = () => {
        let section = document.querySelector(`#${sectionSelected}`);
        console.log(section);
        section.classList.toggle("border");
        section.classList.toggle("shadow-sm");
      }

      useEffect(() => {},[sectionss])

  return (
    <div className="mt-5 bg-blue-200 w-4/5 m-auto p-5 rounded-xl">
        <DeleteModal vis={vis} hide={toggle} confirmDelete={confirmDelete} sectionSelected />
            <p className="text-lg cursor-pointer" onClick={() => toggleSectionSettingsVis(!sectionSettingsVis)}>Section Settings
            {sectionSettingsVis ? <FontAwesomeIcon icon={faMinus} className="ml-10"/> : <FontAwesomeIcon icon={faPlus} className="ml-10"/>} </p>
          <div className={sectionSettingsVis ? "" : "hidden"}>
            
          <form onSubmit={handleChangeSectionName}>
                <label htmlFor="change-name" id="change-name" className="my-4 block flex gap-4 flex-col justify-center py-2 px-5 rounded-xl border border-black w-4/5 m-auto">
                  <p onClick={toggleChangeSectionName} className="cursor-pointer">Change section name</p>
                    <div id="changenamesection" className="hidden">
                    <input required placeholder="" name="change-name" value={changeSectionName} onChange={e => setChangeSectionName(e.target.value)} className="w-4/5 m-auto py-2 px-5"></input>
                    <button className="rounded-xl mt-5 bg-gray-400" type="submit">Change name</button>
                    </div>
                </label>
            </form>
            <div className="flex flex-col gap-4">
            <button onClick={toggleBorder} className='bg-blue-300 rounded-xl shadow-sm'>Toggle Section Border</button>
            <button onClick={deleteSection} className='bg-red-500 rounded-xl shadow-sm'>Delete Section</button>
            </div>
          </div>
        </div>
        
  )
}

export default SectionSettings