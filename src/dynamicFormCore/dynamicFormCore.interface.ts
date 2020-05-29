export interface DynamicFormCoreInterface {
    formData: Array<FormConfig>
}

export interface FormConfig {
    label: string,
    value: string | number,
    type: string,
    id: string,
    className: string
}