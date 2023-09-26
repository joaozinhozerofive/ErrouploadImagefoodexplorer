import styled from 'styled-components'


export const Container = styled.div`

        header{
            position: fixed;
        }
        footer{
            position: fixed;
            bottom: 0;
        }

        .buttonBack{
            margin-top: 12.4rem;
            display: flex;
            margin-left: 12.4rem;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 1229px){
            .buttonBack{
            margin-top: 12.4rem;
            display: flex;
            margin-left: 5.4rem;
            gap: 1rem;
        }
        }
       
`


export const Page = styled.main`
width: 100%;
padding: 12.2rem 12.2rem 12.2rem;
display: flex;
align-items: center;
justify-content: center;
gap: 80px;

.indexSnack{
    border-radius: 50%;
}

#snack{
    border-radius: 50%;
    max-width: 30rem;
    
}

.content{
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2.4rem;

    >.ingredients{
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .editDish{
            text-align: center;
            padding: 1.2rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
    }

}

#includs{
        text-align: center;

        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2.4rem;
        

        >svg{
            width: 18px;
        }

        >button{
            text-align: center;
            padding: 1.2rem;
            padding: 2.4rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
        }

        >h3{
            font-family: 'Roboto', sans-serif;

        }
    }


    @media( max-width: 1229px){
        padding: 7rem;
        display: flex;
        flex-direction: column;



        .indexSnack{
            img{
                height: 25rem;
            }

            margin-bottom: -3rem;
        }

        

        h1, p{
            display: flex;
            margin: 0 auto;
        }

        p{
            word-wrap: break-word;
            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT};
        }

        #includs{
            margin: 0 auto;
            margin-bottom: 5rem;

            button{
                width: 30rem;
            }
        }
    }




`



