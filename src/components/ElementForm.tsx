import React, { useState, useEffect, useCallback } from 'react'
import useModal from './hooks/UseModal';
import ExportModal from './modal/ExportModal';
import AboutModal from './modal/AboutModal';
import {formDataStore, useSidebarStore } from './zustandStore';
import AddFieldForm from './sidebar/AddFieldForm';
import { AnimatePresence, motion } from 'framer-motion';
import SectionSettings from './sidebar/SectionSettings';
import CSSModal from './modal/CSSModal';
import NewSection from './sidebar/NewSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply, faPlus } from '@fortawesome/free-solid-svg-icons';


const ElementForm = () => {
  const [sidebarVis, setSidebarVis] = useSidebarStore((state) => [state.sidebarVis, state.setSidebarVis]);
  const [rawCSS, setRawCSS] = formDataStore((state: any) => [state.rawCSS, state.setRawCSS]);
  const [formLoaded, setFormLoaded] = useState(false);
  const [formData, setFormData] = useState("");
  const sectionss = Array.from(document.querySelectorAll('.form-section'));
  const { vis, toggleExportModal, cssVis, toggleCSSModal, aboutVis, toggleAboutModal } = useModal();

  const menuOpen = {
    open: { scale: 1, 
       transformOrigin: "10px 10px",
    transition: {
      scale: { duration: .3 },
    }
   },
    closed: {
      scale: 0, transformOrigin: "10px 10px", 
      transition: {
        scale: { duration: .3 },
      }
    }
  }

  const buttonToggle = {
    open: { 
      transform: "rotateZ(45deg)", color: "green",
    transition: {
        all: {duration: .3}
    }
   },
    close: {
      transform: "rotateZ(0deg)", color: "red",
      transition: {
        all: {duration: .3},
      }
    }
  }
  
  const buttonSize = {
    open: {
      transform: "scale(0.75)",
      transition: {
        all: {duration: .3},
      }
    },
    close: {
      transform: "scale(1)",
      transition: {
        all: {duration: .3},
      }
    }
  }


  const showModal = (e) => {
    switch (e.target.innerText) {
      case 'Export Form':
        let formDataSelector = document.querySelector('#FormScreen') as any;
        setFormData(formDataSelector.innerHTML);
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

  const setData = (e: any) => {
    switch (e.target.innerText) {
      case 'HTML':
        let formDataSelector = document.querySelector('#FormScreen') as any;
        setFormData(formDataSelector.innerHTML);
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
      <ExportModal vis={vis} hide={toggleExportModal} formData={formData} setData={setData} />
      <AboutModal vis={aboutVis} hide={toggleAboutModal}/>
      <motion.button className="z-20 absolute top-1 left-1 bg-white rounded-xl shadow-md" onClick={() => setSidebarVis({...sidebarVis, 'settingsVis': !sidebarVis['settingsVis']})}
      animate={sidebarVis['settingsVis'] ? "open" : "close"} variants={buttonSize}>
         <AnimatePresence>
         <motion.div className="" animate={sidebarVis['settingsVis'] ? "close" : "open"} variants={buttonToggle} id="menu-button">
          <FontAwesomeIcon icon={faMultiply} size="lg"/>
         </motion.div> 
         </AnimatePresence>
         </motion.button>
    <AnimatePresence>
        <motion.div className={sidebarVis['settingsVis'] ? "z-10 w-screen lg:w-1/4 min-h-screen text-center font-bold relative pt-5" : "z-10 w-screen  lg:w-1/4 min-h-screen rounded-xl"}
          animate={sidebarVis['settingsVis'] ? "open" : "closed"}
          variants={menuOpen}
          id="sidebar"
        >

          <div>
            {formLoaded == false ?
              null
              :
              <>
                <div className="text-lg mt-10" id="showSelectedSection">
                  <span>Section selected: {sidebarVis['selectedSection']} </span>
                </div>
                <AddFieldForm />
                <SectionSettings formLoaded={formLoaded} sectionss={sectionss} />
              </>
            }
            <NewSection />

          </div>

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