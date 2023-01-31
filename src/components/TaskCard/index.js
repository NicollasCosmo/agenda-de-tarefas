import React, {useMemo} from 'react';
import {format} from 'date-fns' // Usado para formatar (converter) datas e horas
import * as S from './styles' // Importa tudo que for do style atribuindo o S


//import geral from '../../assets/geral.png'
                                                                  //O parâmetro é type
// importando os icones que serão usados conforme o tipo em <img src={typeIcons[type]} alt="icone da tarefa" />
import typeIcons from '../../utils/typeIcons'; 




function TaskCard({type, title, when, done   }) {
  const date = useMemo(() =>  format(new Date(when),  'dd/MM/yyyy')) // Converter p formato de data que o jsx reconheça
  const hour = useMemo(() =>  format(new Date(when),  'HH:mm')) // Converter p formato de hora que o jsx reconheça

  return (
  
  <S.Container done={done}> 

    <S.TopCard>
        <img src={typeIcons[type]} alt="icone da tarefa" />
        <h3>{title}</h3>
    </S.TopCard>

    <S.BottomCard>
        <strong>{date}</strong> 
        <span>{hour}</span>

    </S.BottomCard>

  </S.Container>
  
    )

}

export default TaskCard;