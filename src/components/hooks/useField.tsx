import React from 'react'
import { useFormVarsStore, useSectionStore, useSidebarStore } from '../zustandStore';

const useField = () => {

  const [newField, setNewField] = useFormVarsStore((state: any) => [state.newField, state.setNewField]);
  const sidebarVis = useSidebarStore((state) => state.sidebarVis);

    const addOption = (e) => {
      e.preventDefault()
        const options = document.querySelector('#options') as HTMLSelectElement;
        const optionToAdd = document.createElement('label');
        optionToAdd.classList.add("my-2", "block", "flex", "gap-4", "flex-row", "justify-center", "items-center");
        optionToAdd.setAttribute("htmlFor", 'options1');
        
        optionToAdd.innerHTML = `
        <span>Option ${options.childElementCount+1}:</span> 
        <input name="options${options.childElementCount+1}" classname="checkbox-option px-5 py-2"></input> 
        `
        
        options.append(optionToAdd);
      }

      const addField = (e) => {
        e.preventDefault()
    
        if (document.querySelector(`#${newField['fieldID']}`)) {
          return alert("An element with this ID already exists!")
        }

        const section = document.querySelector(`#${sidebarVis['selectedSection']}`) as HTMLElement;

        if (section == null) {
          return alert("No section selected!");
      }

        let elementToAdd;
        
        switch(newField['fieldType']) {
          case "string":
          case "richtext":
          elementToAdd = document.createElement('h1');
          elementToAdd.classList.add(newField['fieldType'] == "string" ? "text-2xl" : "text-lg");
          elementToAdd.id = newField['fieldID'];
          elementToAdd.innerHTML = newField['fieldText'];
          break;
    
          case "input": 
          elementToAdd = document.createElement('label');
          elementToAdd.setAttribute('for', newField['fieldID']);
          elementToAdd.classList.add("my-2","block", "flex", "gap-4", "flex-row", "justify-center", "items-center");
          elementToAdd.innerHTML = `
          <span>${newField['inputFieldName']}${newField['required'] ? "<span className=\"text-red-500 font-bold\">*</span>":""}:</span>
          <input ${newField['required'] ? "required" :""} id=${newField['fieldID']} name=${newField['fieldID']} className="py-2 px-5"></input>`;
          break;
          
          case "options-check":
          case "options-radio":
            elementToAdd = document.createElement('label');
            elementToAdd.setAttribute('for', newField['fieldID']);
            elementToAdd.classList.add("my-2","block", "flex", "flex-col", "justify-center", "items-center");
    
            const allOptions = document.querySelectorAll('#options > label > input') as NodeListOf<HTMLInputElement>;

            if (newField['inputFieldName'] > "") {
              elementToAdd.innerHTML += `<p>${newField['inputFieldName']}</p>`;
            }
    
          for (let i = 0; i < allOptions.length; i++) {
            if (!allOptions[i].value) {
              continue
            }
              elementToAdd.innerHTML += `
              <span>${allOptions[i].value}<span>
              <input type="${newField['fieldType'] == 'options-radio' ? 'radio' : 'checkbox'}" name="${newField['fieldID']}" value="${allOptions[i].value}"></input>
              `;
            };
          break;
    
          case "textarea": 
          elementToAdd = document.createElement('label');
          elementToAdd.setAttribute('for', newField['fieldID']);
          elementToAdd.classList.add("my-4","block", "flex", "gap-4", "flex-col");
          elementToAdd.innerHTML = `
          <p className="block">
          ${newField['inputFieldName']} ${newField['required'] ? "<span className='text-red-500 font-bold'>*</span>":""}</p>
          <textarea ${newField['required'] ? "required" : ""} id="${newField['fieldID']}" name="${newField['fieldID']}" className="block py-2 px-5 resize-none w-full h-96"></textarea>`;
          break;
        }

          section.append(elementToAdd);
          setNewField({
            fieldID: "",
            fieldType: "",
            fieldText: "",
            inputFieldName: "",
            required: false
          });
        }
      
    
  return (
    {addOption, addField}
  )
}

export default useField