import { IInput } from './input.type'

export interface IFormBuilderConfig {
	input: Array<IInput>
	textarea: Array<IInput>
	checkbox: Array<IInput>
}

export interface IFormConfig {
	input: string
	textarea: string
	checkbox: string
}
