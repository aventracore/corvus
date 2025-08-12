"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [success, setSuccess] = useState(false);
  function useState(initial: boolean): [boolean, (v: boolean) => void] {
    const [s, setS] = (require('react') as typeof import('react')).useState(initial);
    return [s, setS];
  }

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <main className="container container-gutter py-16 md:py-24">
      <h1 className="font-semibold">Contact us</h1>
      <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">Have a question? We respond within one business day.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid max-w-xl gap-4">
        <label className="text-sm">
          Name
          <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.name ? 'border-danger' : ''}`} {...register('name')} />
          {errors.name && <div className="mt-1 text-xs text-danger">{errors.name.message}</div>}
        </label>
        <label className="text-sm">
          Email
          <input className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? 'border-danger' : ''}`} {...register('email')} />
          {errors.email && <div className="mt-1 text-xs text-danger">{errors.email.message}</div>}
        </label>
        <label className="text-sm">
          Message
          <textarea rows={5} className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.message ? 'border-danger' : ''}`} {...register('message')} />
          {errors.message && <div className="mt-1 text-xs text-danger">{errors.message.message}</div>}
        </label>
        <button disabled={isSubmitting} className="mt-2 w-fit rounded-md bg-brand-600 px-6 py-2 text-white hover:bg-brand-500 active:scale-[0.98]">
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
      <div aria-live="polite">
        <AnimatePresence>
          {success && (
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white">
              <span>Thanks! We got your message.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}