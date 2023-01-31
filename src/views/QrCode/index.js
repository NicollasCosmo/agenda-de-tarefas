import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles'
import Qr from 'qrcode.react';




//Componentes

import Header from '../../components/Header';
import Footer from '../../components/Footer';


//obs: getmacaddress é a informação que o celular vai capturar e size é o tamanho
function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false)

   async function SaveMac() {
        if(!mac) // Só envia se existir um número mac informado
            alert('Você precisa informar o número gerado no seu celular!')
        else{
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload()
        }
   }

    return (
        <S.Container>
            {redirect && <redirect to="/" />}
            <Header />

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizados pelo seu celular.</p>
                
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={350} /> 
                     <button type='button' onClick={SaveMac}>SINCRONIZAR</button>
                </S.QrCodeArea>

                <S.ValadationCode>

                    <span>Digite o número gerado no seu celular</span>
                    <input type='text' onChange={e => setMac(e.target.value)} value={mac}></input>
                   
                    
                </S.ValadationCode>
                
            </S.Content>
            <Footer />

        </S.Container>
    )
}


export default QrCode;