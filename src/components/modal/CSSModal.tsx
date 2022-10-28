import React from 'react'
import ReactDOM from 'react-dom';
import { useSectionStore } from '../zustandStore';

const CSSModal = ({vis, hide, rawCSS, setRawCSS}) =>  vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="z-20 absolute top-0 w-screen h-screen backdrop-blur-sm flex flex-col justify-start">
        <div id="modal-wrapper">
    <div id="modal" className="mt-10 relative bg-white shadow-md py-5 w-full lg:w-4/5 h-[calc(100%*1)] m-auto">
        <div id="modal-header" className="relative">
                    <>
                                                
                    <div className="relative flex flex-col gap-0 px-10 py-2 justify-center text-center">
                        Edit your raw CSS for this form here:
                        <textarea className="shadow-sm border h-96 px-2 py-2" value={rawCSS} onChange={e => setRawCSS(e.target.value)}></textarea>
                        <button id="modal-button" type="button" data-dismiss="modal" onClick={hide}>Done</button>
                                </div>
                                </>

        </div>
    </div>
    </div>
        </div>
  , document.body
) : null;

export default CSSModal