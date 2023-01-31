import React, {useState, useEffect} from 'react';
import * as S from './styles'

import api from '../../services/api';
import isConnected from '../../utils/isConnected';
import { Link, redirect } from 'react-router-dom';

//Componentes

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  // variáeis de estado
  const [filterActived, setFilterActived] = useState() // inicia com estado vazio
  const [tasks, setTasks]  = useState([])
  const [redirect, setRedirect] = useState(false);
  


  // Trás a API
  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/${isConnected}`) //chama a api de acordo com o filterActived 
    .then(Response => { // Resposta da api
      setTasks(Response.data) // Armazena a resposta da api neste estado

    })
  }

 


  function Notification() {
    filterActived('late')
  }



  useEffect(() => {
    loadTasks(); // Toda vez que a tela for carregada, chama a função loadTasks() e carrega as informações do banco

    if(!isConnected) // Se isConnected não está vazio
    setRedirect(true); // Se existir conteúdo dentro do isConnected, setRedirect será true
   
  }, [filterActived, loadTasks]) //Usa como parâmetro o estado filterActived atualizando conforme o card ativo no momento.

  
  // obs: redirect && se for validado, direciona para qrcode
  return (
    <S.Container>

      {redirect && <redirect to="/qrcode" />} 
      <Header notificationNoclick={Notification} />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === 'all'}   />
        </button>

        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === 'today'}  />
        </button>

        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived ===  'week'}  />
        </button>
        
         <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'}  />
         </button>

         <button type="button"   onClick={() => setFilterActived("year")} >
          <FilterCard title="Ano" actived={filterActived === 'year'} />
         </button>

      </S.FilterArea>

      <S.Title>

        <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>

      </S.Title>

       <S.Content> 
          {// Percorre cada item da coleção de tarefas e tranferir p variável item <Link to={`/task/${t._id}`}>
            tasks.map(item => ( 
            <Link to={`/task/${item._id}`}>
            <TaskCard type={item.type} title={item.title} when={item.whem} done={item.done} />
            </Link>
            

            ))
          } 
          
       </S.Content>

      
          
      <Footer />
    </S.Container>


  ) 

}

export default Home;
