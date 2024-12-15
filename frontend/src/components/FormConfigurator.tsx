import React, { FormEvent, useState } from 'react'
import { IFormBuilderConfig, IFormConfig } from '../types/form-config.types'
import FormBuilder from './FormBuilder'

const FormConfigurator = () => {
	const [formConfig, setFormConfig] = useState<IFormConfig>({
		input: '',
		textarea: '',
		checkbox: '',
	})

	const [buildedFormConfig, setBuildedFormConfig] =
		useState<IFormBuilderConfig>({
			input: 0,
			textarea: 0,
			checkbox: 0,
		})

	const buildForm = (e: FormEvent<HTMLFormElement>) => {
		setBuildedFormConfig({
			input: Number(formConfig.input),
			textarea: Number(formConfig.textarea),
			checkbox: Number(formConfig.checkbox),
		})
		e.preventDefault()
	}

	return (
		<div className='form-configurator'>
			<h1 className='form-configurator__title'>Configure form</h1>
			<form className='form-configurator__form' onSubmit={buildForm}>
				<label className='form-configurator__label'>
					<span>Input:</span>
					<input
						className='form-configurator__input'
						type='number'
						name='input'
						max={20}
						min={0}
						value={formConfig.input}
						onChange={(e) =>
							setFormConfig({ ...formConfig, input: e.target.value })
						}
					/>
				</label>
				<label className='form-configurator__label'>
					<span>Textarea:</span>
					<input
						type='number'
						name='textarea'
						max={20}
						min={0}
						className='form-configurator__input'
						value={formConfig.textarea}
						onChange={(e) =>
							setFormConfig({ ...formConfig, textarea: e.target.value })
						}
					/>
				</label>
				<label className='form-configurator__label'>
					<span>Checkbox:</span>
					<input
						type='number'
						name='checkbox'
						max={20}
						min={0}
						className='form-configurator__input'
						value={formConfig.checkbox}
						onChange={(e) =>
							setFormConfig({ ...formConfig, checkbox: e.target.value })
						}
					/>
				</label>
				<button className='button' type='submit'>
					Build
				</button>
			</form>
			<FormBuilder config={buildedFormConfig} />
		</div>
	)
}

export default FormConfigurator
