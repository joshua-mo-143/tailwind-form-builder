import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ReactDOM from 'react-dom';

const AboutModal = ({vis, hide}) =>  vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="absolute top-0 w-screen h-screen backdrop-blur-sm flex flex-col justify-start lg:justify-center">
        <div id="modal-wrapper">
    <div id="modal" className="relative bg-white py-5 w-full lg:w-3/5 m-auto shadow-sm rounded-xl">
        <div id="modal-header" className="relative">
            <button className="absolute right-2 lg:-top-4 z-50 active:text-red-500" id="modal-button" type="button" data-dismiss="modal" onClick={hide}>
                <FontAwesomeIcon icon={faMultiply} className="text-red-500"/>
            </button>
                    <>
                                                
                    <div className="relative flex flex-col gap-0 px-10 py-2 justify-center">
                        <p>Thanks for using my TailwindCSS Form Generator!
                        <br/>
                        Want to contact me? You can reach me at Twitter <a href="https://twitter.com/joshmo_dev" className="text-blue-300 hover:text-blue-400 active:text-black">here</a>.
                        <br/>
                        I'm still working on this project, so if you have any feedback, feel free to let me know!
                        <br/>
                        Project updates will be announced via my Twitter.
                        <br/>
                        <br/>
                        Created by Josh Mo.</p>

                                </div>
                                </>

        </div>
    </div>
    </div>
        </div>
  , document.body
) : null;

export default AboutModal