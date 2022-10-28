import React from 'react'
import { useSidebarStore } from '../zustandStore';

const useDOM = () => {

    const [sidebarVis, setSidebarVis] = useSidebarStore((state) => [state.sidebarVis, state.setSidebarVis]);

    const meme = (e) => {
        const element = document.elementFromPoint(e.clientX,e.clientY) as HTMLElement;
    
        if (document.querySelector('#delete-element-button')) {
          let mem = document.querySelector('#delete-element-button') as HTMLElement;
          mem.remove();
        }
        if (element.tagName == "SECTION") {
          setSidebarVis({...sidebarVis, 'selectedSection': element.id});
          let dbutton = document.createElement('button');
          dbutton.id = 'delete-element-button';
          dbutton.textContent = "x";
          dbutton.classList.add('text-lg', 'font-bold', 'text-red-500', 'absolute', 'top-0', 'right-0');
          dbutton.addEventListener('click', function deleteElement(e) {
            e.preventDefault()
            element.remove();
            setSidebarVis({...sidebarVis, 'selectedSection': ""});
          })
          element.append(dbutton);
        } else {
            
        }
      }

  return (
    {meme}
  )
}

export default useDOM