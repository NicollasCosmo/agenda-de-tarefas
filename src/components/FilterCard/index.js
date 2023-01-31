import React from 'react';
import * as S from './styles'

import geral from '../../assets/geral.png'



function FilterCard({title, actived}) {
  return (
  
  <S.Container actived={actived}> 
    <img src={geral} alt="filtro" />
    <span>{title}</span>
  </S.Container>
  
    )

}

export default FilterCard;