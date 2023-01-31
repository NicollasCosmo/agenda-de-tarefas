import styled from 'styled-components';




export const Container = styled.div`
  width: 220px;
  height: 60px;
  background: ${props => props.actived ? '#EE6B26' :'#20295f'};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  margin-top: 30px;
  

  img {

    width: 25px;
    heigth: 25px;
  }

  span {
    color: #fff;
    font-weigth: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {

    background:   #EE6B26;
  }
  
`