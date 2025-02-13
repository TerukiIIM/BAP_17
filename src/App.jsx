import './index.css'
import { motion } from "motion/react"

function App() {

  return (
    <>
      <div className='flex justify-center items-center gap-10 h-screen'>
        {/* Test tailwind Css */}
        <h1 className='bg-red-500'>Test</h1>
        {/* Test motion */}
        <motion.div
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className='size-32 bg-zinc-900' />
      </div>
    </>
  )
}

export default App
