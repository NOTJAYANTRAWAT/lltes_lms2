import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageTile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const handleClick = (subject) => {
    setSubject(subject);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSubject(undefined);
    setIsOpen(false);
  };

  return (
    <div>
      <img
        src="your-image-src"
        className="w-64 h-64 rounded-lg cursor-pointer"
        onClick={() => handleClick('your-subject')}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white p-6"
            onClick={handleClose}
          >
            <div className="font-bold text-xl">{subject}</div>
            <p className="text-gray-600">Your subject description goes here</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageTile;
    