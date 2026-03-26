import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dim">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={clsx(
            'w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-muted transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30',
            error && 'border-brand-red focus:border-brand-red focus:ring-brand-red/30',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-brand-red">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dim">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={clsx(
            'w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-muted transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 resize-y min-h-[120px]',
            error && 'border-brand-red focus:border-brand-red focus:ring-brand-red/30',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-brand-red">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Input, Textarea };
