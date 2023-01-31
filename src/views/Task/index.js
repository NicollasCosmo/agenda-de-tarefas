import React, {useState, useEffect} from 'react';
import {redirect} from 'react-router-dom'
import * as S from './styles'
import {format} from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Componentes

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';




function Task({match}) {




// Um estado para armazenar cada infromação possível de uma tarefa.
const [redirect, setRedirect] = useState(false);
const [type, setType] = useState();
const [id, setId] = useState();
const [done, setDone] = useState(false); //done por padrão inicia como false (tarefa em aberto)
const [title, setTitle] = useState();
const [description, setDescription] = useState();
const [date, setDate] = useState();
const [hour, setHour] = useState();



  



  async function BuscaDetalhesDaTask() {
    await api.get(`/task/${match.params.id}`)
    .then(Response => {
      setType(Response.data.type) 
      setDone(Response.data.done)
      setTitle(Response.data.title)
      setDescription(Response.data.description)
      setDate(format(new Date(Response.data.date.when), 'yyy/MM/dd'))
      setHour(format(new Date(Response.data.hour.when), 'HH:mm'))
    })

  }





  //Função que envia formulário para api / banco
  async function Save() {
    // Validação dos dados.

    if(!title)  // Se o título estiver vazio
      return alert("Você precisa informar o título da tarefa")
    else if(!description)  // Se a descrição estiver vazio
      return alert("Você precisa informar a descrição da tarefa")
    else if(!type)
      return alert("Você precisa o tipo da tarefa")
    else if(!date)
      return alert("Você precisa a data da tarefa")
    else if(!hour)
      return alert("Você precisa a hora da tarefa")




    if(match.params.id) { // Se existe um id como parâmetro, se quer atualizar os detalhes de uma tarefa,
      await api.put(`/task/${match.params.id}`, { // (put) rota de atualização // (match.params.id) id da terafa
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000` // interpolarização para ficar no padrão do mongo (data e hora juntos com T separando)
          
        // Dando tudo certo (retorno), chama um alert
      }).then(() =>
        setRedirect(true) // Dando tudo certo (retorno), chama o estado setRedirect(true) para chamar p tela inicial.
      )

    }else{ // Caso não exista id, se quer cadastrar uma nova tarefa
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000` // interpolarização para ficar no padrão do mongo (data e hora juntos com T separando)
          
        
      }).then(() =>
        setRedirect(true) // Dando tudo certo (retorno), chama o estado setRedirect(true) para chamar p tela inicial.
      )
    }

  }


  async function RemoverTarefa() {

    const resposta = window.confirm('Deseja realmente remover a tarefa?') // window.confirm p confirmar
    if(resposta == true) {
      await api.delete(`/task/${match.params.id}`) // Pega na api com o id usando o "delete"
      .then(() => setRedirect(true)); // dando certo, chama o setRedirect que redireciona para tela enterior
    }

  }




  useEffect(() => {
    if(!isConnected)
    setRedirect(true);
    BuscaDetalhesDaTask()
   
  }, [])

  
      //  {redirect && <redirect to="/" />} Se reditect for verdade (true), direciona para tela inicial
  return (
    <S.Container> 
      {redirect && <redirect to="/" />} 
    
      <Header />

       <S.Form>

        <S.TypeIcons>
                
                {
                    TypeIcons.map((icone, index) => ( // Mapeia cada icone e index com a condição que seja index maior que zero
                        index > 0  &&                  // Classe com condição, Se type existir e for diferente de index, fica inativa

                        <button type='button' onClick={() => setType(index)}> 
                            
                            <img src={icone} alt="Tipo da Tarefa" className={type && type != index && 'inative'}/> 
                                                                        
                        </button>
                        
                    ))
                }

        </S.TypeIcons>



        <S.Input>
                <span>Título</span>
                <input type="text" placeholder='Título da tarefa...'
                onChange={evento => setTitle(evento.target.value)} value={title} />
        </S.Input>



        <S.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Detalhes da Tarefa..."
                onChange={evento => setDescription(evento.target.value)} value={description}/>
        </S.TextArea>



        <S.Input>
                <span>Data</span>
                <input type="date"
                onChange={evento => setDate(evento.target.value)} value={date} />
        </S.Input>



        <S.Input>
                <span>Hora</span>
                <input type="time"
                onChange={evento => setHour(evento.target.value)} value={hour} />
        </S.Input>


                  

        <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                    <span>CONCLUÍDO</span>
                </div> 

             <button type='button' onAuxClick={RemoverTarefa}>EXCLUIR</button>  
        </S.Options>


        <S.Save>
             <button type='button' onAuxClick={Save}>SALVAR</button> 
        </S.Save>
            
       

       </S.Form>

      <Footer />
    </S.Container>


  ) 

}

export default Task;
