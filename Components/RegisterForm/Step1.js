import styles from './RegisterForm.module.css'


const Step1 = ({errors, register}) => (
    <div className={styles.step}>
                    <div className={styles.formControl}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder="Inserir nome..." name="nome" {...register('nome',
                            {
                                required: {
                                    value: true,
                                    message: 'Por favor insira um nome'
                                }, maxLength: 40
                            })}></input>
                    </div>
                    {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}


                    <div className={styles.formControl}>
                        <label htmlFor="morada">Morada:</label>
                        <input type="text" placeholder="Inserir morada..." name="morada" {...register('morada',
                            {
                                required: {
                                    value: true,
                                    message: 'Por favor insira uma morada'
                                }, maxLength: {value:50, message: 'A morada não deve exceder os 50 caracteres'}
                            })}></input>
                    </div>
                    {errors.morada && <p className={styles.error}>{errors.morada.message}</p>}

                    <div className={styles.formControl}>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" placeholder="Inserir telefone..." name="telefone" {...register('telefone',
                            {
                                required: {
                                    value: true,
                                    message: 'Por favor insira um telefone de contacto'
                                }, maxLength: {value:20, message: 'O telefone não deve exceder os 20 caracteres'}
                            })}></input>
                    </div>
                    {errors.telefone && <p className={styles.error}>{errors.telefone.message}</p>}

                    <div className={styles.formControl}>
                        <label htmlFor="telefone">Email:</label>
                        <input type="email" placeholder="Inserir email..." name="email" {...register('email')}></input>
                    </div>
                  

                    <div className={styles.formControl}>
                        <label htmlFor="website">Website:</label>
                        <input type="text" placeholder="Inserir endereço website..." name="website" {...register('website', { maxLength: 25 })}></input>
                    </div>

                </div>
)

export default Step1