import React, { useState, useEffect } from 'react'
import useModal from './modal/UseModal';
import ExportModal from './modal/ExportModal';
import AboutModal from './modal/AboutModal';
import { useFormVarsStore, useSectionStore, formDataStore } from './zustandStore';
import AddFieldForm from './form-add-field/AddFieldForm';
import { AnimatePresence, motion } from 'framer-motion';
import SectionSettings from './form-section/SectionSettings';
import CSSModal from './modal/CSSModal';


const ElementForm = () => {
  const [sectionSelected, setSectionSelected] = useSectionStore((state) => [state.sectionSelected, state.setSectionSelected]);
  const [rawCSS, setRawCSS] = formDataStore((state) => [state.rawCSS, state.setRawCSS]);
  const settingsVis = useFormVarsStore((state) => state.settingsVis);
  const [formLoaded, setFormLoaded] = useState(false);

  const [formData, setFormData] = useState("");
  const sectionss = Array.from(document.querySelectorAll('.form-section'));

  const { vis, toggleExportModal, cssVis, toggleCSSModal, aboutVis, toggleAboutModal} = useModal();

  const menuOpen = {
    open: { opacity: 1, x: 0 },
    closed: {
      opacity: 0, x: "-100%",
      transition: {
        opacity: { duration: 1 },
        x: { duration: 0.7 },
      }
    }
  }

  const showElements = {
    vis: { opacity: 1 },
    invis: { opacity: 0,
      transition: {
        opacity: {
          duration: 0
        }
      }
    },
  }

  const storeSection = (e) => {
    e.preventDefault();
    const formDOM = document.querySelector('#FormDOM');
    const elementToAdd = document.createElement('section');
    elementToAdd.classList.add("form-section", "p-5", "my-5", "w-full", "border", "rounded-xl", "shadow-sm");
    if (document.querySelector('#new-section-name').value > "") {
    elementToAdd.id = document.querySelector('#new-section-name').value;
    } else {
      elementToAdd.id = `section-${document.querySelectorAll(".form-section").length + 1}`;
    }

    formDOM.append(elementToAdd);
    setSectionSelected(elementToAdd.id);
    document.querySelector('#new-section-name').value = "";
  }

  const showModal = (e) => {
    switch (e.target.innerText) {
      case 'Export Form':
        toggleExportModal();
        break;
      
      case 'About':
        toggleAboutModal();
        break;
      
      case 'Edit CSS':
        toggleCSSModal();
        break;
    }
  }

  useEffect(() => {
    if (sectionss.length == 0) {
      setFormLoaded(false);
    } else {
      setFormLoaded(true);
    }
  }, [sectionss.length])


  return (
    <>
      <CSSModal vis={cssVis} hide={toggleCSSModal} rawCSS={rawCSS} setRawCSS={setRawCSS} />
      <ExportModal vis={vis} hide={toggleExportModal} formData={formData}/>
      <AboutModal vis={aboutVis} hide={toggleAboutModal}/>
      {/* <InitModal vis={init} hide={toggleInit} sectionsQty={sectionsQty} setSectionsQty={setSectionsQty} meme={meme}/> */}
      <AnimatePresence>
        <motion.div className={settingsVis ? "fixed w-1/4 min-h-screen bg-gray-200 text-center font-bold relative" : "hidden"}
          animate={settingsVis ? "open" : "closed"}
          variants={menuOpen}

        >

          <motion.div
            animate={settingsVis ? "vis" : "invis"}
            variants={showElements}
          >
            {formLoaded == false ?
              <>
                <p className="mt-20 text-lg">You don't have a form loaded yet!</p>
              </>
              :
              <>
                <div className="text-lg mt-10">
                  <span>Section selected:</span>
                  <select id="section-selector" name="section-selector" value={sectionSelected} onChange={(e) => setSectionSelected(e.target.value)} className="ml-2">
                    {sectionss.map(section => (
                      <option key={section.id} value={section.id} >{section.id}</option>
                    ))}</select>
                </div>

                {/* Add field form */}
                <AddFieldForm />

                {/* Section settings */}
                <SectionSettings formLoaded={formLoaded} sectionss={sectionss} />

              </>
            }
            <form onSubmit={storeSection} className="flex flex-col gap-4 w-4/5 m-auto">
              <p className="cursor-pointer" onClick={() => document.querySelector('#new-section-panel').classList.toggle('hidden')}>
                Create a new section
                </p>
              <div className="flex flex-col gap-4 hidden" id="new-section-panel">
              <input type="text" name="new-section-name" id="new-section-name"/>
            <button className="rounded-xl bg-gray-400" type="submit">Add section</button>
              </div>
            </form>

          </motion.div>

          <button onClick={showModal}>Edit CSS</button>
          <div className="absolute bottom-0 left-0 flex flex-row gap-4">
          <button className="" onClick={showModal}>About</button>
          <button className="" onClick={showModal}>Export Form</button>
          </div>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default ElementForm