import styled from 'styled-components';




export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  border-bottom: 5px solid #ee6b26;
  display: flex;


`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {

        width: 130px;
        height: 50px;
        display: flex
        align-items: center;
    
    }
        
    
       
    


`


export const RightSide = styled.div`
 
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

 button {
    background: none;
    border: none;
    cursor: pointer;
 }



a, button {

    color: #fff;
    font-weigth: bold;
    text-decoration: none;
    margin: 0 10px;
    display: flex;
    align-items: center;
    font-family: arial;


    &:hover {
        color: #ee6b26
    }


    img {
        width: 25px;
        height: 30px;
    }

    span {
        background: #fff;
        color: #ee6b26;
        padding: 8px 7px;
        border-radius: 50%;
        position: relative;
        top: -10px;
        right: 10px;
    }

    &:hover {

        opacity: 0.5;
    }

}



.dividir::after {
    content: "|";
    margin: 0 10px;
    color: #fff;
}

button {
    font-size: 16px;
}

`