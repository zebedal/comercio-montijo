import styles from "./RegisterForm.module.scss";

interface StepProps {
  errors?: any;
  register?: any;
}

const Step3 = ({ register, errors }: StepProps) => (
  <div className={styles.step}>
    <div className={styles.formControl}>
      <textarea
        col="10"
        rows="5"
        placeholder="Descrição do negócio"
        {...register("descricao", {
          required: {
            value: true,
            message: "Por favor insira uma descrição para o seu negócio",
          },
          maxLength: 350,
        })}
      ></textarea>
    </div>
    {errors.descricao && (
      <p className={styles.error}>{errors.descricao.message}</p>
    )}

    <div className={styles.formControl}>
      <span>Horário de funcionamento:</span>
    </div>

    <div className={styles.formControl}>
      <span>Descanso semanal:&nbsp;</span>
    </div>
  </div>
);

export default Step3;
