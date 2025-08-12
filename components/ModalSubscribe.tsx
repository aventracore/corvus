"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalSubscribe({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="w-full max-w-md rounded-2xl border border-black/10 dark:border-white/10 bg-white p-6 shadow-xl dark:bg-elev1"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-lg font-semibold">Get product updates</h3>
            <form className="mt-4 grid gap-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <label className="text-sm">
                Email
                <input type="email" required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@company.com" />
              </label>
              <div className="flex justify-end gap-2">
                <button type="button" className="rounded-md border px-4 py-2" onClick={onClose}>Cancel</button>
                <button type="submit" className="rounded-md bg-brand-600 px-4 py-2 text-white">Subscribe</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}