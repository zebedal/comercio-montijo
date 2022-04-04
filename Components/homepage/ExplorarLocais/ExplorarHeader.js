import Image from 'next/image'
import styles from './ExplorarHeader.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'

const categorias = [
    {
        id: 1,
        nome: 'Restauração',
        count: 15
    },
    {
        id: 2,
        nome: 'Serviços',
        count: 15
    },
    {
        id: 3,
        nome: 'Hoteis',
        count: 15
    },
    {
        id: 4,
        nome: 'Saúde',
        count: 15
    },
    {
        id: 5,
        nome: 'Lojas',
        count: 15
    },
    {
        id: 6,
        nome: 'Ginásios',
        count: 15
    },
    {
        id: 7,
        nome: 'Farmácias',
        count: 15
    }

]

const ExplorarHeader = props => (
    <header className={styles.Header}>
        <Image src="/assets/img/montijo.jpg" layout="fill" objectFit="cover" alt="comercio montijo" />
        <div className={styles.title} style={{ zIndex: 9 }} >
            <h2>Explorar locais</h2>
            <p>Todos os locais disponíveis no nosso directório</p>
        </div>
        <div className={`container-fluid ${styles.fluid}`}>
            <div className={`container ${styles.categoryWrapper}`}>
                <Swiper
                    className="swiperfuck"
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiperNext',
                        prevEl: '.swiperPrev'
                    }}
                    pagination={{ clickable: true }}
                    /* spaceBetween={10} */
                    breakpoints={{
                        750: {
                            slidesPerView: 7
                        },
                        450: {
                            slidesPerView:5
                        },
                        200:{
                            slidesPerView:3
                        }
                       
                    }}

                >
                    {categorias.map((cat, index) => {
                        return (

                            <SwiperSlide key={cat.id} style={{ textAlign: 'center' }}>
                                <a>{cat.nome}</a>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiperNext" style={{color:'white'}}>Next</div>
                    <div className="swiperPrev" style={{color:'white'}}> Prox</div>
                </Swiper>

            </div>
        </div>
    </header>
)

export default ExplorarHeader