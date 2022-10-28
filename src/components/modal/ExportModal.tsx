import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ReactDOM from 'react-dom';

const ExportModal = ({vis, hide, formData, setData}) =>  vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="z-20 absolute top-0 w-screen h-screen backdrop-blur-sm flex flex-col justify-start lg:justify-center">
        <div id="modal-wrapper">
    <div id="modal" className="absolute sm:relative bg-white/50 rounded-xl py-5 w-full lg:w-3/5 h-96 m-auto">
        <div id="modal-header" className="relative">
            <button className="absolute right-2 lg:-top-4 z-50" id="modal-button" type="button" data-dismiss="modal" onClick={hide}>
                <FontAwesomeIcon icon={faMultiply} className="text-red-500"/>
            </button>
                    <>
                        <div className="h-4/5 flex flex-row justify-start gap-4 font-bold ml-5 mt-5">
                            <button className="hover:border-b-2 border-red-500" onClick={setData}>HTML</button>
                            <button className="hover:border-b-2 border-red-500" onClick={setData}>CSS</button>
                            </div>
                    <div className="relative flex flex-col gap-0 px-10 py-2 justify-center">
                        <textarea className="h-64 lg:h-64 w-full block resize-none px-5 py-2 disabled:bg-white shadow-sm border-black/10 border" value={formData} readOnly disabled>
                        </textarea>
                                </div>
                                </>

        </div>
    </div>
    </div>
        </div>
  , document.body
) : null;

export default ExportModal