import React from 'react'
import { IFormBuilderConfig } from '../types/form-config.types'

const FormBuilder = ({ config }: { config: IFormBuilderConfig }) => {
	return (
		<div className='form-builder'>
			<div className='form-builder__section'>
				{config.input ? <p>Inputs:</p> : ''}
				{[...Array(config.input)].map(() => (
					<input type='text' className='form-configurator__input' />
				))}
			</div>
			<div className='form-builder__section'>
				{config.textarea ? <p>Textareas:</p> : ''}
				{[...Array(config.textarea)].fill('any').map(() => (
					<textarea className='form-configurator__input' />
				))}
			</div>
			<div className='form-builder__section'>
				{config.checkbox ? <p>Checkboxes:</p> : ''}
				{[...Array(config.checkbox)].fill('any').map(() => (
					<input type='checkbox' className='form-configurator__input' />
				))}
			</div>
		</div>
	)
}

export default FormBuilder
