import styles from './RegisterForm.module.css'
import StepsHeader from './StepsHeader'
import { useReducer, useState, useRef } from 'react'
import Button from '../UI/Button'
import {useForm} from 'react-hook-form'


const navReducer = (state, action) => {

    switch (action.type) {
        case 'Avançar':
            return state + 1
        case 'Retroceder':
            return state - 1

    }
}


const RegisterForm = props => {

  
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: 'all'}); 
    const [active, dispatch] = useReducer(navReducer, 1)
   

  
   
    return (
        <div className={styles.wrapper}>
            <h2>É comerciante?</h2>
            <p>Registe-se gratuitamente e faça parte da maior comunidade de comerciantes do Montijo</p>
            <br />
            <StepsHeader active={active} />
            <br />

            <form>
                {active === 1 ? <div className={styles.step}>
                    <div className={styles.formControl}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder="Inserir nome..." name="nome" {...register('nome', 
                        {required: {
                            value: true,
                            message: 'Por favor insira um nome'
                            }, maxLength:40})}></input>
                    </div>
                    {errors.nome &&  <p className={styles.error}>{errors.nome.message}</p> }
                  

                    <div className={styles.formControl}>
                        <label htmlFor="morada">Morada:</label>
                        <input type="text" placeholder="Inserir morada..." name="morada" {...register('morada', 
                        {required:{
                            value: true,
                            message: 'Por favor insira uma morada'
                        }, maxLength:50})}></input>
                    </div>
                    {errors.morada &&  <p className={styles.error}>{errors.morada.message}</p> }

                    <div className={styles.formControl}>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" placeholder="Inserir telefone..." name="telefone" {...register('telefone', 
                        {required: {
                            value: true,
                            message:'Por favor insira um telefone de contacto'
                        }, maxLength:20})}></input>
                    </div>
                    {errors.telefone &&  <p className={styles.error}>{errors.telefone.message}</p> }

                    <div className={styles.formControl}>
                        <label htmlFor="website">Website:</label>
                        <input type="text" placeholder="Inserir endereço website..." name="website" {...register('website', {maxLength: 25})}></input>
                    </div>

                </div> : null}

                {active === 2 ? <div className={styles.step}>
                    <div className={styles.imagePreview}></div>
                    <div className={styles.formControl}>
                        <label htmlFor="foto">Fotografia:</label>
                        <input type="file" name="foto"></input>
                    </div>
                </div> : null}

                {active === 3 ? <div className={styles.step}>
                    <div className={styles.formControl}>
                        <label htmlFor="foto">Descrição:</label>
                        <textarea col="10" rows="10" placeholder="Descrição do negócio" {...register('descricao')}></textarea>
                    </div>
                </div> : null}



                <div className={styles.flexWrapper}>
                    {active !== 1 ? <Button func={dispatch} text="Retroceder" backgroundColor="none" textColor="var(--text-color)" borderColor="var(--text-color)" /> : null}
                    {active !== 3 ? <Button text="Avançar" func={dispatch} disabled={isValid ? false : true} /> : null }
                    {active === 3 && <Button text="Completar Registo" /> }
                </div>

            </form>

            <pre>
                {console.log(errors)}
                
            </pre>
        </div>

    )
}



export default RegisterForm