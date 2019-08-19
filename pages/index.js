import React from 'react'
import Header from '../components/comunes/Header'
import BarraTitulo from '../components/comunes/BarraTitulo'
import { Carousel } from 'react-materialize'

const Home = () => (
  <div>
    <Header></Header>
    <BarraTitulo></BarraTitulo>
    <h1>Pagina de Inicio</h1>
    <Carousel images={[
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    
      ]} />
  </div>
)

export default Home
