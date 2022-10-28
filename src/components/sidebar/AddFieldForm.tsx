import React from 'react'
import { useFormVarsStore, useSectionStore } from '../zustandStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import useField from '../hooks/useField';

const AddFieldForm = () => {

  const [newField, setNewField] = useFormVarsStore((state: any) => [state.newField, state.setNewField]);
    const [addFieldVis, toggleAddFieldVis] = useFormVarsStore((state:any) => [state.addFieldVis, state.toggleAddFieldVis]);

  const {addField, addOption} = useField();

  return (
    <motion.form className='mt-8 bg-blue-200 w-4/5 m-auto px-4 py-2 shadow-sm rounded-xl text-sm'>
    <p className='text-lg cursor-pointer' onClick={() => toggleAddFieldVis(!addFieldVis)}>Add a new field 
{addFieldVis ? <FontAwesomeIcon icon={faMinus} className="ml-10"/> : <FontAwesomeIcon icon={faPlus} className="ml-10"/>} </p>
    <div className={addFieldVis ? "" : "hidden"}>

{/* field ID field */}
<label htmlFor="fieldID" className="my-4 block flex gap-4 w-min m-auto flex-row justify-center items-center">
  <span>Field ID:</span>
  <input required type="text" className="px-5 py-2" name="fieldID" value={newField['fieldID']} onChange={(e) => setNewField({...newField, 'fieldID': e.target.value})}/>
</label>

{/* field type field */}
<label htmlFor="field-type" className="my-4 block flex gap-4 w-min m-auto flex-row justify-center items-center">
  <span>Field type:</span>
  <select required name="field-type" className="px-5 py-2 w-min" id="field-type" value={newField['fieldType']} onChange={e => setNewField({...newField, 'fieldType': e.target.value})}>
    <option value="">Pick an option</option>
    <option value="string">Title</option>
    <option value="richtext">Text</option>
    <option value="input">Input</option>
    <option value="textarea">Long input (text area)</option>
    <option value="options-radio">Single choice</option>
    <option value="options-check">Multiple choice</option>
  </select>
</label>


{ newField['fieldType'] != null && newField['fieldType'] != "" && newField['fieldType'] != "string" && newField['fieldType'] != "richtext" ?
  <label htmlFor="inputFieldName" className="my-4 block flex gap-4 flex-row justify-center items-center">
    <span>Question text:</span>
    <input required type="text" className="px-5 py-2" name="inputFieldName" value={newField['inputFieldName']} onChange={(e) => setNewField({...newField, 'inputFieldName': e.target.value})}/>
  </label>
:""}

{/* options field */}
{ newField['fieldType'] == "options-check" || newField['fieldType'] == "options-radio" ? 
<>
<div id="options" className="flex-col flex">
<label htmlFor={`options1`} className="my-2 block flex gap-4 flex-row justify-center items-center">
  <span>Option 1:</span> 
  <input name={`options1`} className="checkbox-option"></input> 
  </label>

</div>
  <p className="bg-gray-300 rounded-xl shadow-sm cursor-pointer">Add new option <FontAwesomeIcon icon={faPlus} onClick={addOption}/></p>
  </>
:
"" }

{newField['fieldType'] == "string" || newField['fieldType'] == "richtext" ? 
<label htmlFor="fieldText">
<textarea required name="fieldText" className="w-4/5 h-24 px-5 py-2" value={newField['fieldText']} onChange={e => setNewField({...newField, 'fieldText': e.target.value})} placeholder="Put your text here."></textarea>
</label>
: ""
}

{newField['fieldType'] ? 
    <div className="flex flex-col justify-center items-center">
<label htmlFor="required" className="my-4 block flex gap-4 flex-row justify-center">
  <span>Required?</span>
  <input name="required" type="radio" value={newField['required']} onChange={e => setNewField({...newField, 'required': e.target.checked})}></input>
</label> 

<button className="rounded-xl bg-gray-400 block w-48 shadow-sm" onClick={addField}>Add field</button>
</div> 
: ""}


</div>
</motion.form>
  )
}

export default AddFieldForm