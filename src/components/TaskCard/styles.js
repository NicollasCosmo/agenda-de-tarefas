import styled from 'styled-components';




export const Container = styled.div`
    width: 150px;
    height: 130px;    
    box-shadow: -8px 4px 22px -3px rgba(0,0,0,0.75);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${props => props.done ? 0.5 : 1}; 


    &:hover{
        opacity: 0.5;
    }



`



export const TopCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;
   


    img {

        width: 45px;
    }

`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #ee6b26;
        font-weigth: bold;
        font-size: 15px

    }

    span {
        color: #707070;
        font-size: 15px
    }
    `

