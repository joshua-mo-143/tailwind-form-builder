import React from 'react'
import { useFormVarsStore, useSectionStore, useSidebarStore } from '../zustandStore';

const useSection = () => {

    const [sidebarVis, setSidebarVis] = useSidebarStore((state) => [state.sidebarVis, state.setSidebarVis]);
    const defaultClassLists = useFormVarsStore((state:any) => state.defaultClassLists);
    const [changeSectionName, setChangeSectionName] = useSectionStore((state:any) => [state.changeSectionName, state.setChangeSectionName]);


    const setSectionName = (section, sectionName) => {
        let newSectionID = sectionName.replace(/[^A-Za-z0-9]/g, "-").toLowerCase();

        if (document.querySelector(`#${newSectionID}`) != null) {
          alert("There's already an element with this ID!");
          return null;
        }
          section.id = newSectionID;
          section.setAttribute('data-name', sectionName);
          setChangeSectionName("");
          return "Success!"
      }
      
      const appendSection = (section) => {
        const formDOM = document.querySelector('#FormDOM') as HTMLFormElement;
        formDOM.append(section);
        setSidebarVis({...sidebarVis, 'selectedSection': section.id});
        const newNameSelector = document.querySelector('#new-section-name') as HTMLInputElement;
        newNameSelector.value = "";
      }

      const createSection = (e: any) => {
        e.preventDefault();
        let newSection = document.querySelector('#new-section-name') as HTMLInputElement;
        let elementToAdd = document.createElement('section');
          if (setSectionName(elementToAdd, newSection.value) == null) {
            return;
          }
        elementToAdd.classList.add(...defaultClassLists['Section']);
        elementToAdd.innerHTML = `<h1 class="text-2xl w-min m-auto" id="${elementToAdd.id}-title">${elementToAdd.getAttribute('data-name')}</h1>`;
        appendSection(elementToAdd);
        const newSectionPanel = document.querySelector('#new-section-panel') as HTMLDivElement;
        newSectionPanel.classList.toggle('hidden');
      }
    

  return ({
    createSection, setSectionName
  })
}

export default useSection