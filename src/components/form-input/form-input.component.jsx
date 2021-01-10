import React from 'react'
import { FormInputContainer, GroupContainer, FormInputLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (

    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
                (<FormInputLabel className={otherProps.value.length ? 'shrink' : ''} >
                    {label}
                </FormInputLabel>)
                : null
        }
    </GroupContainer >

)

export default FormInput;