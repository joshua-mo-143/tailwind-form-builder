import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ElementForm from '../components/ElementForm'
import FormDOM from '../components/FormDOM'

type Props = {}

const FormBuilder = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div className="flex flex-row relative"   initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}>
        <ElementForm />
        <FormDOM />
      </motion.div>
    </AnimatePresence>
  )
}

export default FormBuilder