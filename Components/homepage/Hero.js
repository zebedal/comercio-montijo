import styles from './Hero.module.css'
import { Form, Input, Button, Select } from 'antd'
import Image from 'next/image'
import hero from '/public/assets/img/hero.jpg'
import { SearchOutlined } from '@ant-design/icons'
const { Option } = Select

const Hero = ({ setQuery }) => {


    const [form] = Form.useForm()

    const getSearchValues = (e) => {
        const obj = {
            freguesia: form.getFieldValue('freguesia'),
            categoria: form.getFieldValue('categoria'),
            keyword: form.getFieldValue('keyword'),
        }
        setQuery(obj)
    }

    return (

        <div style={{ position: 'relative', height: '750px' }}>
            <Image src={hero} layout="fill" alt="montijo praça da república" priority={true} loading="eager" />
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
                <h2>Pesquisar comerciantes</h2>
                <p style={{ color: 'white', fontFamily: 'quicksand' }}>Adipisicing eiusmod pariatur pariatur duis cupidatat cupidatat et.</p>
                <br />
                <div className={styles.searchWrapper}>
                    <Form
                        name="basic"
                        initialValues={{ freguesia: 'Todas', categoria: 'Todas' }}
                        autoComplete="off"
                        style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}
                        form={form}
                    >
                        <Form.Item label="Freguesia" className={styles.formBox} name="freguesia">
                            <Select
                                value="Todas"
                                name="freguesia"
                                bordered={false}
                                size="small"
                                style={{ width: '150px' }}

                            >
                                <Option value="Todas">Todas</Option>
                                <Option value="afonsoeiro">Montijo Afonsoeiro</Option>
                                <Option value="sarilhos">Sarilhos Grandes</Option>
                                <Option value="canha">Canha</Option>
                                <Option value="pegoes">Pegões</Option>
                            </Select>
                        </Form.Item>
                        <div className={styles.dividerVertical}></div>
                        <Form.Item label="Categoria" className={styles.formBox} name="categoria">
                            <Select value="Todas" name="categoria" bordered={false} size="small" style={{ width: '150px' }} >
                                <Option value="Todas">Todas</Option>
                                <Option value="restauracao">Restauração</Option>
                                <Option value="servicos">Serviços</Option>
                                <Option value="comercio">Comércio de rua</Option>
                                <Option value="outro">Outro</Option>
                            </Select>
                        </Form.Item>
                        <div className={styles.dividerVertical}></div>

                        <Form.Item className={styles.formBox} name="keyword">
                            <Input placeholder="Pesquisar..." bordered={false} style={{ width: '150px' }} allowClear />
                        </Form.Item>

                        <Form.Item className={styles.formBox}>
                            <Button type="primary" style={{ borderRadius: '5px' }} icon={<SearchOutlined style={{ fontSize: '14px' }} />} onClick={getSearchValues}  >Pesquisar</Button>
                        </Form.Item>

                    </Form>

                </div>
            </div>
            
        </div>
        
    )
}



export default Hero