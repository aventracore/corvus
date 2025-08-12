import React from 'react';

export function TextField({ label, error, help, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; help?: string }) {
  return (
    <label className="text-sm block">
      {label}
      <input {...props} className={`mt-1 w-full rounded-md border px-3 py-2 ${error ? 'border-danger' : ''}`} aria-invalid={!!error} aria-describedby={help ? `${props.name}-help` : undefined} />
      {help && (
        <div id={`${props.name}-help`} className="mt-1 text-xs text-black/60 dark:text-white/60">
          {help}
        </div>
      )}
      {error && (
        <div role="alert" className="mt-1 text-xs text-danger">
          {error}
        </div>
      )}
    </label>
  );
}