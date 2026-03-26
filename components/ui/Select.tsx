import { SelectHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dim">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={clsx(
            'w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 appearance-none cursor-pointer',
            error && 'border-brand-red focus:border-brand-red focus:ring-brand-red/30',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" className="text-muted">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-background-card text-white">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-brand-red">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
