//import perfil from '../../img/perfil.svg'
//import sacola from '../../img/sacola.svg'


//MINHA VERSÃO
// const icones =[perfil, sacola]

// function IconesHeader () {
//     return (
//         <ul className='icones'>
//             {icones.map((icone) =>(
//                 <li className='icone'>
//                     <img
//                     src={icone}
//                     alt="icones" />
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export default IconesHeader;

//VERSÃO DO PROFESSOR 
import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes> 
    )
}


export default OptionsHeader;