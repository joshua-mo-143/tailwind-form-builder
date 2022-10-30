import { AnimatePresence, MotionConfig } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

type Props = {}

const Home = (props: Props) => {
  return (
    <AnimatePresence>
        <motion.div className=""
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}>
    <div className="flex flex-row justify-center h-screen">
    <div className="flex flex-col justify-center items-center">
    <h1>Hey there!</h1>
    <br/>
    <NavLink to="/formbuilder">Go to my form builder</NavLink>
    </div>
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Home