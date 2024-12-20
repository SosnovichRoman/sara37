import React, { forwardRef } from 'react'

interface InputIntegerProps {
	id?: string
	label?: string
	extra?: string
	placeholder?: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
}

export const InputInteger = forwardRef<HTMLInputElement, InputIntegerProps>(
	({ label, id, extra, type, placeholder, state, disabled, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				disabled={disabled}
				type={type}
				id={id}
				placeholder={placeholder}
				className='form-configurator__input'
				onKeyDown={(event) => {
					if (
						!/[0-9]/.test(event.key) &&
						event.key !== 'Backspace' &&
						event.key !== 'Tab' &&
						event.key !== 'Enter' &&
						event.key !== 'ArrowLeft' &&
						event.key !== 'ArrowRight'
					) {
						event.preventDefault()
					}
				}}
				{...rest}
			/>
		)
	}
)
