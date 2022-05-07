import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided, 
            cursore: 'pointer',
            color: state.isSelected ? 'var(--colors-text)' : 'var(--colors-bg)',
            backgroundColor: state.isSelected ? 'var(--colors-ui-base)' : 'var(--colors-bg)'
        })
    },
})`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;

    & > * {
        box-shadow: var(--shadow);
    }
`