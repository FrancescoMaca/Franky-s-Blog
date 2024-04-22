'use client'
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex justify-between items-center">
      <span className="text-3xl">Franky's Chronicles</span>
      <button onClick={() => setIsMenuOpen(true)}>
        <Image src="/menu.svg" alt="menu button" width={37} height={37} className="self-end" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full z-40">
            <motion.div className="absolute inset-0 -z-10" key={1}
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(10px)', transition: { duration: 0.5 }}}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 1 }}}
            />
            <div className="flex flex-col items-center justify-center h-full z-50">
              <motion.a 
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 10 }}}
                exit={{ translateY: 100, opacity: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 10 }}}
              >Home</motion.a>
              <motion.a 
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5, delay: 0.15, type: 'spring', stiffness: 120, damping: 10 }}}
                exit={{ translateY: 100, opacity: 0, transition: { duration: 0.5, delay: 0.15, type: 'spring', stiffness: 120, damping: 10 }}}
              >Saved</motion.a>
              <motion.a 
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3, type: 'spring', stiffness: 120, damping: 10 }}}
                exit={{ translateY: 100, opacity: 0, transition: { duration: 0.5, delay: 0.3, type: 'spring', stiffness: 120, damping: 10 }}}
              >Account</motion.a>
              <motion.button onClick={() => setIsMenuOpen(false)} className="text-4xl py-10"
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5, delay: 0.45, type: 'spring', stiffness: 120, damping: 10 }}}
                exit={{ translateY: 100, opacity: 0, transition: { duration: 0.5, delay: 0.45, type: 'spring', stiffness: 120, damping: 10 }}}
              >
                <Image src="/close.svg" alt="close button" width={37} height={37} />
              </motion.button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}