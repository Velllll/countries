import React from 'react'
import styled from 'styled-components'
import {IoSearch} from 'react-icons/io5'

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin: 1rem 0;

    @media(min-width: 767px) {
        margin: 0;
        width: 250px;
        padding: 1rem 0rem;
    }
    `;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search...',
})`
    width: 95%;
    height: 20px;
    border: none;
    outline: none;
    color: var(--colors-text);
    margin-left: 1rem;
    background-color: var(--colors-ui-base);
    @media(min-width: 767px) {
        margin-top: 0;
        width: 150px;
    }
`;

const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch />
        <Input onChange={e => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search
