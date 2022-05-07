import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
`;

const ModeSwithcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`;


const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleThem = () => setTheme(theme === 'light' ? 'dark' : 'light')   

    useEffect(() => {
        document.body.setAttribute('data-them', theme)
    }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
            <Title>
                Where is the world?
            </Title>
            <ModeSwithcher onClick={toggleThem}>
                {theme === 'light' ? (
                    <><IoMoon/> {theme} Theme</> 
                ) : (
                    <><IoMoonOutline/> {theme} Theme</> 
                )}
            </ModeSwithcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
