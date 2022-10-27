import React, { useState, useEffect, useCallback} from 'react'
import useModal from './hooks/UseModal';
import ExportModal from './modal/ExportModal';
import AboutModal from './modal/AboutModal';
import { useFormVarsStore, useSectionStore, formDataStore } from './zustandStore';
import AddFieldForm from './sidebar/AddFieldForm';
import { AnimatePresence, motion } from 'framer-motion';
import SectionSettings from './sidebar/SectionSettings';
import CSSModal from './modal/CSSModal';
import NewSection from './sidebar/NewSection';


const ElementForm = () => {
  const [sectionSelected, setSectionSelected] = useSectionStore((state) => [state.sectionSelected, state.setSectionSelected]);
  const [rawCSS, setRawCSS] = formDataStore((state) => [state.rawCSS, state.setRawCSS]);
  const settingsVis = useFormVarsStore((state) => [state.settingsVis]);
  const [formLoaded, setFormLoaded] = useState(false);
  const [formData, setFormData] = useState("");
  const sectionss = Array.from(document.querySelectorAll('.form-section'));
  const [elements, setElements] = useState("");
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

  const showModal = (e) => {
    switch (e.target.innerText) {
      case 'Export Form':
        setFormData(document.querySelector('#FormScreen').innerHTML);
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

  const setData = (e) => {
    switch (e.target.innerText) {
      case 'HTML':
        setFormData(document.querySelector('#FormScreen').innerHTML);
      break;

      case 'CSS':
        setFormData(rawCSS);
    }
  }

  useEffect(() => {
    if (sectionss.length == 0) {
      setFormLoaded(false);
    } else {
      setFormLoaded(true);
    }

  }, [Array.from(document.querySelectorAll('.form-section')).length])

  return (
    <>
      <CSSModal vis={cssVis} hide={toggleCSSModal} rawCSS={rawCSS} setRawCSS={setRawCSS} />
      <ExportModal vis={vis} hide={toggleExportModal} formData={formData} setData={setData}/>
      <AboutModal vis={aboutVis} hide={toggleAboutModal}/>
      <AnimatePresence>
        <motion.div className={settingsVis ? "fixed w-1/4 min-h-screen text-center font-bold relative" : "hidden"}
          animate={settingsVis ? "open" : "closed"}
          variants={menuOpen}
        id="sidebar"
        >

          <motion.div
            animate={settingsVis ? "vis" : "invis"}
            variants={showElements}
          >
            {formLoaded == false ?
 null
              :
              <>
                <div className="text-lg mt-10">
                  <span>Section selected: {sectionSelected} </span> 
                </div>

                {/* Add field form */}
                <AddFieldForm />

                {/* Section settings */}
                <SectionSettings formLoaded={formLoaded} sectionss={sectionss} />
              </>
            }
        <NewSection/>

          </motion.div>

          <div className="absolute bottom-0 left-0 flex flex-row gap-4">
          <button className="" onClick={showModal}>About</button>
          <button className="" onClick={showModal}>Export Form</button>
          <button onClick={showModal}>Edit CSS</button>
          </div>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default ElementForm