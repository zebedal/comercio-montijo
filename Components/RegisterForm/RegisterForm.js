import styles from './RegisterForm.module.css'
import { useReducer, useState, useRef } from 'react'
import Button from '../UI/Button'
import { useForm } from 'react-hook-form'
import { uploadImageCloudinary } from '../../lib/utils'
import { message, Button as Btn, Steps } from 'antd';

import { CloseOutlined  } from '@ant-design/icons';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const navReducer = (state, action) => {

    switch (action.type) {
        case 'Avançar':
            return state + 1
        case 'Retroceder':
            return state - 1

    }
}


const RegisterForm = props => {

    const {Step} = Steps


    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'all' });
    const [active, dispatch] = useReducer(navReducer, 0)
    const [selectedImage, setSelectedImage] = useState([])
    const [previewImage, setPreviewImage] = useState("")


    const imageInputChangeHandler = e => {

        if (previewImage) {
            setPreviewImage("")
        }

        const fileSize = e.file.size * Math.pow(10, -6)
        if (e.file.type == ! 'image/jpeg' || e.file.type == ! 'image/jpg' || e.file.type == ! 'image/png') {
            message.error('A imagem apenas é permitida nos seguintes formatos: JPG, JPEG ou PNG')
            return
        }

        if (fileSize > 3) {
            message.error('O tamanho da imagem não pode ser superior a 3Mb')
            return
        }

        let fileList = [...e.fileList];
        fileList = fileList.slice(-1);
        setSelectedImage(fileList);

        if (fileList[0]) {
            const reader = new FileReader()

            reader.onload = red => {
                setPreviewImage(red.target.result)
            }

            reader.readAsDataURL(fileList[0].originFileObj)
        }

    }

    const submitRegister = () => {
        console.log(watch())
    }

    return (
        <div className={styles.wrapper}>
            
            <CloseOutlined style={{fontSize:'20px', color:'var(--text-light-color)', position:'absolute', top:'20px', right:'20px', cursor:'pointer'}}/>
            <h2 >Registo de novo comerciante</h2>
            <br/>
            <br/>
            <Steps current={active} responsive >
                <Step title="Dados gerais" />
                <Step title="Imagem" />
                <Step title="Descrição" />
            </Steps>
            <br/>
            <br/>

            <form>
                {active === 0 ? <Step1 register={register} errors={errors}   /> : null}

                {active === 1 ? <Step2 previewImage={previewImage} selectedImage={selectedImage} handler={imageInputChangeHandler } /> : null}

                {active === 2 ?  <Step3 register={register} errors={errors} />: null}

                <div className={styles.flexWrapper}>
                    {active !== 0 ? <Button func={dispatch} text="Retroceder" backgroundColor="none" textColor="var(--text-color)" borderColor="var(--text-color)" /> : null}
                    {active !== 2 ? <Button text="Avançar" func={dispatch} disabled={isValid ? false : true} /> : null}
                    {active === 2 && <Button text="Completar Registo" disabled={isValid ? false : true} click={submitRegister} />}
                </div>

            </form>

        </div>

    )
}



export default RegisterForm