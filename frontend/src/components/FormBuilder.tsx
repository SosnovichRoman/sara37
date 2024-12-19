import React from 'react'

import { IFormBuilderConfig } from '../types/form-config.types'

const FormBuilder = ({ config }: { config: IFormBuilderConfig }) => {
	return (
		<div className='form-builder'>
			<div className='form-builder__section'>
				{config.input.length > 0 ? <p>Inputs:</p> : ''}
				{config.input.map((item) => (
					<input
						key={item.id}
						type='text'
						className='form-configurator__input'
					/>
				))}
			</div>
			<div className='form-builder__section'>
				{config.textarea.length > 0 ? <p>Textareas:</p> : ''}
				{config.textarea.map((item) => (
					<textarea key={item.id} className='form-configurator__input' />
				))}
			</div>
			<div className='form-builder__section'>
				{config.checkbox.length > 0 ? <p>Checkboxes:</p> : ''}
				{config.checkbox.map((item) => (
					<input
						key={item.id}
						type='checkbox'
						className='form-configurator__input'
					/>
				))}
			</div>
		</div>
	)
}

export default FormBuilder
