import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const InfoImg = styled.img`
    width: 80%;
    height: 100%;
    object-fit: contain;

    @media(min-width: 767px) {
        width: 60%
    }
`;

const InfoTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
    font-size: 30px;
`;

const ListGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-md);
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    line-height: 20px;
    margin: 0.5rem 0;
`;

const InfoBody = styled.div`
    color: var(--colors-text);
`;

const BorderWrapper = styled.div`
    margin-top: 2rem;
`;

const BorderTitle = styled.div`
    text-align: center;
`;

const BorderRow = styled.div`
    display: block;
    margin: 1.5rem;
`;

const BorderItem = styled.span`
    padding: 0.5rem;
    margin: 1rem;
    box-shadow: var(--shadow);
    cursor: pointer;
`;

const Info = ({country}) => {
    console.log(country)
    const {
        name, 
        nativeName, 
        flag, 
        population, 
        region, 
        currencies = [], 
        borders = [],
    } = country

    return ( 
        <Wrapper>
            <InfoImg src={flag} alt={name}/>
            <InfoBody>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Currencies:</b> {currencies.map(c => <div key={c.code}>{c.name}</div>)}
                        </ListItem>
                    </List>
                </ListGroup>
                <BorderWrapper>
                    <BorderTitle>
                        <b>Border Countries:</b>
                    </BorderTitle>
                    <BorderRow>
                        {
                        !borders.length ? 
                        (<BorderItem> There is no border countries</BorderItem>) : 
                        borders.map(c => (
                            <BorderItem key={c}>{c}</BorderItem> 
                        ))
                        }
                    </BorderRow>
                    
                </BorderWrapper>
            </InfoBody>
        </Wrapper>
    );
}

export default Info;