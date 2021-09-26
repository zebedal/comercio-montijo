import styles from './RegisterForm.module.css'
import { TimePicker, Select } from 'antd'

const { Option } = Select


const Step3 = ({ register, errors }) => (
    <div className={styles.step}>
        <div className={styles.formControl}>

            <textarea col="10" rows="5" placeholder="Descrição do negócio" {...register('descricao',
                {
                    required: {
                        value: true,
                        message: 'Por favor insira uma descrição para o seu negócio'
                    }, maxLength: 350
                })}></textarea>
        </div>
        {errors.descricao && <p className={styles.error}>{errors.descricao.message}</p>}

        <div className={styles.formControl}>
            <span>Horário de funcionamento:</span>
            <TimePicker.RangePicker bordered={false} minuteStep={15} secondStep={60} placeholder={['Início', 'Fim']} />
        </div>

        <div className={styles.formControl}>
    
            <span>Descanso semanal:&nbsp;</span>
            <Select
                mode="multiple"
                style={{ flex: '1' }}
                placeholder="selecione os dias"
                defaultValue={['Domingo']}
                onChange={""}
                optionLabelProp="label"
            >
                <Option value="Segunda" label="Segunda">
                    <div className="demo-option-label-item">
                        Segunda
                    </div>
                </Option>
                <Option value="Terça" label="Terça">
                    <div className="demo-option-label-item">
                        Terça
                    </div>
                </Option>
                <Option value="Quarta" label="Quarta">
                    <div className="demo-option-label-item">
                        Quarta
                    </div>
                </Option>
                <Option value="Quinta" label="Quinta">
                    <div className="demo-option-label-item">
                        Quinta
                    </div>
                </Option>
                <Option value="Sexta" label="Sexta">
                    <div className="demo-option-label-item">
                        Sexta
                    </div>
                </Option>
                <Option value="Sábado" label="Sábado">
                    <div className="demo-option-label-item">
                        Sábado
                    </div>
                </Option>
                <Option value="Domingo" label="Domingo">
                    <div className="demo-option-label-item">
                    Domingo
                    </div>
                </Option>
            </Select>
          
        </div>

    </div>
)

export default Step3