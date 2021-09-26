import styles from './Hero.module.css'
import { Row, Col, Form, Input, Button, Select } from 'antd'
import Image from 'next/image'
import hero from '/public/assets/img/hero.jpg'
import { SearchOutlined } from '@ant-design/icons'
import { useRef } from 'react'
const { Option } = Select


const Hero = props => {

    const selectRef = useRef()

    const [form] = Form.useForm()


    const selectChangeHandler = value => {

        console.log(form.getFieldValue('test'))
    }

    return (
        <Row>
            <Col span={24}>
                <div style={{ position: 'relative', height: '700px', background: 'red' }}>
                    <Image src={hero} layout="fill" alt="montijo praça da república" priority={true} loading="eager" />
                    <div className={styles.overlay}></div>
                    <div className={styles.heroContent}>
                        <h2>Pesquisar comerciantes</h2>
                        <p style={{ color: 'white', fontFamily: 'quicksand' }}>Adipisicing eiusmod pariatur pariatur duis cupidatat cupidatat et.</p>
                        <div className={styles.searchWrapper}>
                            <Form
                                form={form}
                                name="basic"
                                initialValues={{ remember: true }}
                                autoComplete="off"
                                style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}
                            >



                                {/* <span>Freguesia:&nbsp;&nbsp;</span> */}
                                <Form.Item label="Freguesia" style={{ marginBottom: 0, flexWrap: 'nowrap', padding: '0 10px' }} name="test">
                                    <Select
                                        defaultValue="Todas"
                                        name="freguesia"
                                        bordered={false}
                                        size="small"
                                        style={{ width: '150px' }}
                                        ref={selectRef}
                                        onChange={selectChangeHandler}
                                    >
                                        <Option value="Todas">Todas</Option>
                                        <Option value="afonsoeiro">Montijo Afonsoeiro</Option>
                                        <Option value="sarilhos">Sarilhos Grandes</Option>
                                        <Option value="canha">Canha</Option>
                                        <Option value="pegoes">Pegões</Option>
                                    </Select>
                                </Form.Item>

                                <div className={styles.dividerVertical}></div>


                                <Form.Item label="Categoria" style={{ marginBottom: 0, flexWrap: 'nowrap', padding: '0 10px' }}>
                                    {/* <span>Categoria:&nbsp;&nbsp;</span> */}
                                    <Select defaultValue="Todas" name="categoria" bordered={false} size="small" style={{ width: '150px' }} >
                                        <Option value="Todas">Todas</Option>
                                        <Option value="restauracao">Restauração</Option>
                                        <Option value="servicos">Serviços</Option>
                                        <Option value="comercio">Comércio de rua</Option>
                                        <Option value="outro">Outro</Option>
                                    </Select>
                                </Form.Item>

                                <div className={styles.dividerVertical}></div>

                                <Form.Item style={{ marginBottom: 0, padding: '0 10px' }}>
                                    <Input placeholder="Pesquisar" bordered={false} style={{ width: '150px' }} allowClear={true} />
                                </Form.Item>

                                <Form.Item style={{ marginBottom: 0, padding: '0 10px' }}>
                                    <Button type="primary" style={{ borderRadius: '5px' }} icon={<SearchOutlined style={{ fontSize: '14px' }} />} onClick={selectChangeHandler} >Pesquisar</Button>
                                </Form.Item>

                            </Form>

                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    )
}



export default Hero