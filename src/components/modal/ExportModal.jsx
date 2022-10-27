import React from 'react'
import ReactDOM from 'react-dom';

const ExportModal = ({vis, hide, formData}) =>  vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="absolute top-0 w-screen h-screen backdrop-blur-sm flex flex-col justify-start lg:justify-center">
        <div id="modal-wrapper">
    <div id="modal" className="relative bg-slate-500 py-5 w-full lg:w-3/5 m-auto">
        <div id="modal-header" className="relative">
            <button className="absolute right-2 lg:-top-4 z-50 active:text-red-500" id="modal-button" type="button" data-dismiss="modal" onClick={hide}>
                x
            </button>
                    <>
                                                
                    <div className="relative flex flex-col gap-0 px-10 py-2 justify-center">
                        <p>Your form HTML is as below:</p>
                        <textarea className="h-80 w-full block resize-none px-5 py-2 disabled:bg-white" value={formData} readonly disabled>
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