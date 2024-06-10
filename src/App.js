//import Logo from './components/Logo'
//import perfil from './img/perfil.svg';
//import sacola from './img/sacola.svg';
//import OptionsHeader from './components/OptionsHeader';
//import IconesHeader from './components/IconesHeader';
import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';



// JEITO 1 - BÁSICO
// function App() {
//   return (
//     <div className="App">
//       <header className="App-Header">
//         <Logo />
//         <ul className='opcoes'>
//           <li className='opcao'><p>CATEGORIA</p></li>
//           <li className='opcao'><p>MINHA ESTANTE</p></li>
//           <li className='opcao'><p>FAVORITOS</p></li>
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// JEITO 2 - .MAP()

// const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

// function App() {
//   return (
//     <div className="App">
//       <header className="App-Header">
//         <Logo />
//         <ul className='opcoes'>
//           {textoOpcoes.map((texto) => (
//             <li className='opcao'><p>{texto}</p></li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

// DESAFIO TRAZER SACOLA.SVG

// const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']
// const icones = [perfil, sacola]

// function App() {
//   return (
//     <div className="App">
//       <header className="App-Header">
//         <Logo />
//         <ul className='opcoes'>
//           {textoOpcoes.map((texto) => (
//             <li className='opcao'><p>{texto}</p></li>
//           ))}
//         </ul>
//         <ul className='icones'>
//           {icones.map((icone) =>(
//             <li className='icone'>
//               <img
//               src={icone}
//               alt='imagens' />
//             </li>
//           ))}
//         </ul>
        
//       </header>
//     </div>
//   );
// }

// export default App;

// FAZENDO O DESAFIO COM COMPONENTES 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-Header">
//         <Logo />
//         <OptionsHeader />
//         <IconesHeader />
//       </header>
//     </div>
//   );
// }

// export default App;
//UM COMPONENTE QUE CHAME OUTRO COMPONTONENTE

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
    <Header />
    <Pesquisa />
    <UltimosLancamentos />
    </AppContainer>

  );
}

export default App;
