import styled from 'styled-components'


export const Container = styled.div`

padding: 5.0rem  10.8rem 14.2rem 15.3rem;
display: flex;
align-items: center;
justify-content: space-between;



form{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    padding: 4.4rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    p{
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1rem;
    }

    input{
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 34.8rem;
        padding: 1.5rem;
        background: transparent;
        border-radius: 0.5rem;
        border: 1px solid white;
    }

    button{
        padding: 1.5rem;
        width: 100%;
    }
}
.logo{
    display: flex;
    align-items: center;
    gap: 1.5rem;


    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }
}
.signUp{
    font-family: 'Poppins', sans-serif;
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.WHITE};
}

@media(max-width: 1229px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 13rem;

    form{
    background: none;
    }

    h1{
        white-space: nowrap;
    }
}
`

