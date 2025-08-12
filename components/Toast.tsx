"use client";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 grid place-items-center px-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="rounded-full bg-black text-white px-4 py-2 text-sm shadow-lg dark:bg-white dark:text-black"
            role="status"
            aria-live="polite"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}