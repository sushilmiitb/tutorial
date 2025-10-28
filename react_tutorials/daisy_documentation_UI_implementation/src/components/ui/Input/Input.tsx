/**
 * Input component - Wrapper around DaisyUI input with label support
 */

import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'bordered' | 'ghost'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

/**
 * Reusable Input component with DaisyUI styling
 * @param label - Label text displayed above input
 * @param error - Error message to display
 * @param helperText - Helper text displayed below input
 * @param inputSize - Input size
 * @param variant - Input style variant
 * @param leftIcon - Icon to display on the left
 * @param rightIcon - Icon to display on the right
 */
export function Input({
  label,
  error,
  helperText,
  inputSize = 'md',
  variant = 'bordered',
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: InputProps) {
  const sizeClass = inputSize !== 'md' ? `input-${inputSize}` : ''
  const variantClass = variant === 'bordered' ? 'input-bordered' : 'input-ghost'
  const errorClass = error ? 'input-error' : ''

  const inputClasses = ['input', variantClass, sizeClass, errorClass, className]
    .filter(Boolean)
    .join(' ')

  const inputElement = (
    <input className={inputClasses} {...props} />
  )

  // If no label, return just the input
  if (!label) {
    return inputElement
  }

  // Return input wrapped in label structure
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {leftIcon}
          </div>
        )}
        {inputElement}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <div className="label">
          <span className={`label-text-alt ${error ? 'text-error' : ''}`}>
            {error || helperText}
          </span>
        </div>
      )}
    </label>
  )
}

