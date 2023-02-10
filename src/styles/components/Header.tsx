import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;

    h1 {
        color: ${(props) => props.theme['purple-400']};
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        a {
            border-radius: 6px;
            font-size: 0.875rem;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 1rem;
        }

        a:first-child {
            background: ${(props) => props.theme['purple-200']};
            color: ${(props) => props.theme['purple-400']};
            gap: 4px;
        }

        a:last-child {
            background: ${(props) => props.theme['yellow-200']};
            color: ${(props) => props.theme['yellow-400']};
        }
    }
`

