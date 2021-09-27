import Categoria from './Categoria'
import styles from './Categorias.module.css'
import { useState, Fragment } from 'react'
import Hotel from '../svg/categorias/Hotel'
import Loja from '../svg/categorias/Loja'
import Restaurante from '../svg/categorias/Restaurante'
import Saude from '../svg/categorias/Saude'
import Servicos from '../svg/categorias/Servicos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

const categorias = [
    {
        id: 1,
        nome: 'Restauração',
        icon: <Restaurante />,
        count: 15
    },
    {
        id: 2,
        nome: 'Serviços',
        icon: <Servicos />,
        count: 15
    },
    {
        id: 3,
        nome: 'Hoteis',
        icon: <Hotel />,
        count: 15
    },
    {
        id: 4,
        nome: 'Saúde',
        icon: <Saude />,
        count: 15
    },
    {
        id: 5,
        nome: 'Lojas',
        icon: <Loja />,
        count: 15
    }

] 


const Categorias = props => {
    const [selected, setSelected] = useState(1)

 
    return (
        <Fragment>
        <div className={`container ${styles.Container}`}>
        <div className={styles.pContainer}>
                <p style={{color:'white'}}>Sugestões das categorias</p>
                <p style={{color:'white'}}>Algumas das nossas categorias em destaque para descobrir.</p>
            </div>
            <div className={styles.absoluteContainer}>
      
            
            <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={10}
            breakpoints={{
                 1200:{
                     slidesPerView:5
                 },
                 920:{
                    slidesPerView:4
                },
                550:{
                    slidesPerView:3
                },
                350: {
                    slidesPerView:3
                }
             }}
            
    >
                {categorias.map((cat, index) => {
                    return (
                       
                        <SwiperSlide key={cat.id}>
                        <Categoria
                            nome={cat.nome}
                            count={cat.count}
                            id={cat.id}
                            selected={selected === cat.id ? true : false}
                            click={setSelected}>{categorias[index].icon}</Categoria>
                            </SwiperSlide>
                    )
                })}
            
            </Swiper>

            </div>
        </div>
        </Fragment>
    )
}






export default Categorias