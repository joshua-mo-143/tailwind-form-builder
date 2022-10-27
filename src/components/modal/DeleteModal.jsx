import React from 'react'
import ReactDOM from 'react-dom';
import { useSectionStore } from '../zustandStore';

const DeleteModal = ({vis, hide, confirmDelete}) =>  vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="absolute top-0 w-screen h-screen backdrop-blur-sm flex flex-col justify-start lg:justify-center">
        <div id="modal-wrapper">
    <div id="modal" className="relative bg-white shadow-md py-5 w-full lg:w-1/5 m-auto">
        <div id="modal-header" className="relative">
                    <>
                                                
                    <div className="relative flex flex-col gap-0 px-10 py-2 justify-center text-center">
                        Are you sure you wish to delete?
                        <div className="flex flex-row justify-center gap-4 mt-4">
                        <button className="bg-red-500 rounded-xl" type="button" data-dismiss="modal" onClick={confirmDelete}>Yes</button>
                        <button className="bg-gray-300 rounded-xl" id="modal-button" type="button" data-dismiss="modal" onClick={hide}>No</button>
                        </div>
                                </div>
                                </>

        </div>
    </div>
    </div>
        </div>
  , document.body
) : null;

export default DeleteModal