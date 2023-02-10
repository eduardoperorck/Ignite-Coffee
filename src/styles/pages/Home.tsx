import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding-top: 4rem;
    

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 2.6rem;
    }

    p {
        font-size: 1.15rem;
        margin: 1rem 0 2rem;
    }

    div > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    
    }

    div > div > p {
        font-size: 0.95rem;
        color: ${(props) => props.theme['black-400']};
    }

    p > span {
        border-radius: 999px;
        padding: 8px 8px 4px;
        margin-right: 0.5rem;
    }

    p:nth-child(1) > span {
        background: ${(props) => props.theme['yellow-600']};
    }

    p:nth-child(2) > span {
        background: ${(props) => props.theme['black-400']};
    }

    p:nth-child(3) > span {
        background: ${(props) => props.theme['yellow-400']};
    }

    p:nth-child(4) > span {
        background: ${(props) => props.theme['purple-400']};
    }

    img {
        width: 25rem;
    }
` 
