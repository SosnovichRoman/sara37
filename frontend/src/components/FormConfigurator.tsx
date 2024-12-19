import React, { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IFormBuilderConfig, IFormConfig } from '../types/form-config.types'
import { IInput } from '../types/input.type'
import FormBuilder from './FormBuilder'

const FormConfigurator = () => {
	const [formConfig, setFormConfig] = useState<IFormConfig>({
		input: '',
		textarea: '',
		checkbox: '',
	})

	const [buildedFormConfig, setBuildedFormConfig] =
		useState<IFormBuilderConfig>({
			input: [],
			textarea: [],
			checkbox: [],
		})

	const modifyArray = (array: Array<IInput>, newLength: number) => {
		const diff = newLength - array.length
		if (diff > 0) {
			return array.concat([...Array(diff)].map(() => ({ id: uuidv4() })))
		}
		if (diff < 0) {
			return array.slice(0, diff)
		}
		return array.map((x) => x)
	}

	const buildForm = (e: FormEvent<HTMLFormElement>) => {
		setBuildedFormConfig({
			input: modifyArray(buildedFormConfig.input, Number(formConfig.input)),
			textarea: modifyArray(
				buildedFormConfig.textarea,
				Number(formConfig.textarea)
			),
			checkbox: modifyArray(
				buildedFormConfig.checkbox,
				Number(formConfig.checkbox)
			),
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
