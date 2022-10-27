import React from 'react'
import { useFormVarsStore, useSectionStore } from '../zustandStore';

const useSection = () => {

    const defaultClassLists = useFormVarsStore((state) => state.defaultClassLists);
    const [setSectionSelected] = useSectionStore((state) => [state.setSectionSelected])
    const [changeSectionName, setChangeSectionName] = useSectionStore((state) => [state.changeSectionName, state.setChangeSectionName]);;


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
        const formDOM = document.querySelector('#FormDOM');
        formDOM.append(section);
        setSectionSelected(section.id);
        document.querySelector('#new-section-name').value = "";
      }

      const createSection = (e) => {
        e.preventDefault();
        let newSection = document.querySelector('#new-section-name').value;
        let elementToAdd = document.createElement('section');
          if (setSectionName(elementToAdd, newSection) == null) {
            return;
          }
        elementToAdd.classList.add(...defaultClassLists['Section']);
        elementToAdd.innerHTML = `<h1 class="text-2xl w-min m-auto" id="${elementToAdd.id}-title">${elementToAdd.getAttribute('data-name')}</h1>`;
        appendSection(elementToAdd);
        document.querySelector('#new-section-panel').classList.toggle('hidden');
      }
    

  return ({
    createSection, setSectionName
  })
}

export default useSection