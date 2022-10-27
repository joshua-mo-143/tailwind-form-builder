import React, {useState} from 'react'

const useModal = () => {

    const [vis, setVis] = useState(false);
    const [deleteVis, setDeleteVis] = useState(false);
    const [cssVis, setCssVis] = useState(false);
    const [aboutVis, setAboutVis] = useState(false);

    function toggleExportModal() {
        setVis(!vis);
    }

    function toggleCSSModal() {
      setCssVis(!cssVis);
    }

    function toggleAboutModal() {
      setAboutVis(!aboutVis);
    }

    function toggleDeleteModal() {
      setDeleteVis(!deleteVis);
    }

  return {vis,
toggleExportModal, cssVis, toggleCSSModal, aboutVis, toggleAboutModal, deleteVis, toggleDeleteModal
}
}

export default useModal