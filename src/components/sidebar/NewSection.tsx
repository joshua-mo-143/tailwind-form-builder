import React, { useState } from 'react'
import useSection from '../hooks/useSection';

const NewSection = () => {

    const {createSection} = useSection();
    const [formVis, setFormVis] = useState(false);

  return (
    <form onSubmit={createSection} className="mt-5 flex flex-col gap-4 w-4/5 m-auto rounded-xl bg-blue-200 px-4 py-2">
    <p className="cursor-pointer text-lg" onClick={() => setFormVis(!formVis)} id="newSectionTitle">
      New Section
      </p>
            <div className={formVis ? "flex flex-col gap-4" : "hidden"}id="new-section-panel">
            <input type="text" required name="new-section-name" id="new-section-name" className="px-5 py-2 text-sm"/>
          <button className="rounded-xl bg-gray-400" type="submit" id="newSectionSubmit">Add section</button>
            </div>
  </form>
  )
}

export default NewSection