import React from 'react'
import { useFormVarsStore, useSectionStore } from '../zustandStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AddFieldForm = () => {

  const [newField, setNewField] = useFormVarsStore((state) => [state.newField, state.setNewField]);
    const [addFieldVis, toggleAddFieldVis] = useFormVarsStore((state) => [state.addFieldVis, state.toggleAddFieldVis]);
    const [fieldType, setFieldType] = useFormVarsStore((state) => [state.fieldType, state.setFieldType]);
    const [fieldText, setFieldText] = useFormVarsStore((state) => [state.fieldText, state.setFieldText]);
    const [inputFieldName, setInputFieldName] = useFormVarsStore((state) => [state.inputFieldName, state.setInputFieldName]);
    const [required, setRequired] = useFormVarsStore((state) => [state.required, state.setRequired]);
    const sectionSelected = useSectionStore((state) => state.sectionSelected);

    const addOption = (e) => {
        const options = document.querySelector('#options');
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
        if (sectionSelected == "") {
          return alert("You didn't select a form section to add anything to!");
        }
    
        if (document.querySelector(`#${fieldID}`)) {
          return alert("An element with this ID already exists!")
        }
    
        const section = document.querySelector(`#${sectionSelected}`);
        const formDOM = document.querySelector('#FormDOM');
        let elementToAdd;
        
        switch(fieldType) {
          case "string":
          case "richtext":
          elementToAdd = document.createElement('h1');
          elementToAdd.classList.add(fieldType == "string" ? "text-2xl" : "text-lg");
          elementToAdd.id = fieldID;
          elementToAdd.innerHTML = fieldText;
          break;
    
          case "input": 
          elementToAdd = document.createElement('label');
          elementToAdd.setAttribute('for', fieldID);
          elementToAdd.classList.add("my-2","block", "flex", "gap-4", "flex-row", "justify-center", "items-center");
          elementToAdd.innerHTML = `
          <span>${inputFieldName}${required ? "<span className=\"text-red-500 font-bold\">*</span>":""}:</span>
          <input ${required ? "required" :""} id=${fieldID} name=${fieldID} className="py-2 px-5"></input>`;
          console.log(elementToAdd);
    
          break;
          case "options-check":
          case "options-radio":
            elementToAdd = document.createElement('label');
            elementToAdd.setAttribute('for', fieldID);
            elementToAdd.classList.add("my-2","block", "flex", "flex-col", "justify-center", "items-center");
    
            const allOptions = document.querySelectorAll('#options > label > input');
            elementToAdd.innerHTML += `<p>${inputFieldName}</p>`;
    
          for (let i = 0; i < allOptions.length; i++) {
              elementToAdd.innerHTML += `
              <span>${allOptions[i].value}<span>
              <input type="${fieldType == 'options-radio' ? 'radio' : 'checkbox'}" name="${fieldID}" value="${allOptions[i].value}"></input>
              `;
            };
            
            console.log(elementToAdd);
          break;
    
          case "textarea": 
          elementToAdd = document.createElement('label');
          elementToAdd.setAttribute('for', fieldID);
          elementToAdd.classList.add("my-4","block", "flex", "gap-4", "flex-col");
          elementToAdd.innerHTML = `
          <p className="block">
          ${inputFieldName} ${required ? "<span className='text-red-500 font-bold'>*</span>":""}</p>
          <textarea ${required ? "required" : ""} id="${fieldID}" name="${fieldID}" className="block py-2 px-5 resize-none w-full h-96"></textarea>`;
          break;
        }
    
        if (section != "") {
          section.append(elementToAdd);
          setFieldType("");
          setFieldID("");
          setFieldText("");
          setRequired(false);
        } else {
          console.log("No section selected!");
          console.log(query);
        }
      }

  return (
    <motion.form className='mt-8 bg-blue-200 w-4/5 m-auto p-5 shadow-sm rounded-xl' onSubmit={addField}
>
    <p className='text-lg cursor-pointer' onClick={() => toggleAddFieldVis(!addFieldVis)}>Add a new field 
{addFieldVis ? <FontAwesomeIcon icon={faMinus} className="ml-10"/> : <FontAwesomeIcon icon={faPlus} className="ml-10"/>} </p>
    <div className={addFieldVis ? "" : "hidden"}>
{/* field ID field */}
    <label htmlFor="field-id" className="my-4 block flex gap-4 flex-row justify-center items-center">
  <span>Field ID:</span>
  <input required type="text" name="field-id" className="py-2 px-5" value={newField[fieldID]} onChange={e => setNewField({...newField, fieldID: e.target.value})}></input>
</label>

{/* field type field */}
<label htmlFor="field-type" className="my-4 block flex gap-4 w-min m-auto flex-row justify-center items-center">
  <span>Field type:</span>
  <select required name="field-type" className="px-5 py-2 w-min" id="field-type" value={newField[fieldType]} onChange={e => setNewField({...newField, fieldType: e.target.value})}>
    <option default value="">Pick an option</option>
    <option value="string">Title</option>
    <option value="richtext">Text</option>
    <option value="input">Input</option>
    <option value="textarea">Long input (text area)</option>
    <option value="options-radio">Single choice</option>
    <option value="options-check">Multiple choice</option>
  </select>
</label>


{ fieldType != null && fieldType != "" ?
  <label htmlFor="inputFieldName" className="my-4 block flex gap-4 flex-row justify-center items-center">
    <span>Input field text:</span>
    <input required type="text" className="px-5 py-2" name="inputFieldName" value={inputFieldName} onChange={(e) => setInputFieldName(e.target.value)}/>
  </label>
:""}

{/* options field */}
{ fieldType == "options-check" || fieldType == "options-radio" ? 
<>
<div id="options" className="flex-col flex">
<label htmlFor={`options1`} className="my-2 block flex gap-4 flex-row justify-center items-center">
  <span>Option 1:</span> 
  <input name={`options1`} className="checkbox-option"></input> 
  </label>

</div>
  <p className="bg-gray-300 rounded-xl shadow-sm">Add new option <FontAwesomeIcon icon={faPlus} onClick={addOption}/></p>
  </>
:
"" }

{fieldType == "string" || fieldType == "richtext" ? 
<label htmlFor="fieldText">
<textarea required name="fieldText" className="w-4/5 h-24 px-5 py-2" value={fieldText} onChange={e => setFieldText(e.target.value)} placeholder="Put your text here."></textarea>
</label>
: ""
}

{fieldType ? 
    <div className="flex flex-col justify-center items-center">
<label htmlFor="required" className="my-4 block flex gap-4 flex-row justify-center">
  <span>Required?</span>
  <input name="required" type="radio" value={required} onChange={e => setRequired(e.target.checked)}></input>
</label> 

<button className="rounded-xl bg-gray-400 block w-48 shadow-sm" type="submit">Add field</button>
</div> 
: ""}


</div>
</motion.form>
  )
}

export default AddFieldForm