import { CategoriasNegocios as options } from "utils/consts";
import styles from "./RegisterForm.module.scss";
import Select, { StylesConfig } from "react-select";
import { useForm, Controller } from "react-hook-form";

interface StepProps {
  errors?: any;
  register?: any;
  control?: any;
}

const Step1 = ({ errors, register, control }: StepProps) => {
  const customStyles: StylesConfig = {
    control: (provided: Record<string, unknown>, state: any) => ({
      ...provided,

      border: "1px solid rgba(57, 57, 57, 0.3)",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        boxShadow: "none",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "rgba(189,197,209,.3)" : "white",
      fontSize: "$text-small",
    }),
  };

  return (
    <div className={styles.step}>
      <div className={styles.formControl}>
        <label htmlFor="nome">* Nome:</label>
        <input
          type="text"
          placeholder="Inserir nome..."
          name="nome"
          {...register("nome", {
            required: {
              value: true,
              message: "Por favor insira um nome",
            },
            maxLength: 40,
          })}
        ></input>
      </div>
      {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}

      <div className={styles.formControl}>
        <label htmlFor="morada">* Morada:</label>
        <input
          type="text"
          placeholder="Inserir morada..."
          name="morada"
          {...register("morada", {
            required: {
              value: true,
              message: "Por favor insira uma morada",
            },
            maxLength: {
              value: 50,
              message: "A morada não deve exceder os 50 caracteres",
            },
          })}
        ></input>
      </div>
      {errors.morada && <p className={styles.error}>{errors.morada.message}</p>}

      <div className={styles.formControl}>
        <label htmlFor="telefone">* Telefone:</label>
        <input
          type="number"
          placeholder="Inserir telefone..."
          name="telefone"
          {...register("telefone", {
            required: {
              value: true,
              message: "Por favor insira um telefone de contacto",
            },
            maxLength: {
              value: 20,
              message: "O telefone não deve exceder os 20 caracteres",
            },
          })}
        ></input>
      </div>
      {errors.telefone && (
        <p className={styles.error}>{errors.telefone.message}</p>
      )}

      <div className={styles.formControl}>
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          placeholder="Inserir email..."
          name="email"
          {...register("email", {
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email inválido",
            },
          })}
        ></input>
      </div>
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <div className={styles.formControl}>
        <label htmlFor="Categoria">* Categoria:</label>
        <Controller
          control={control}
          name="categoria"
          rules={{
            required: {
              value: true,
              message: "Por favor insira uma categoria",
            },
          }}
          render={({ field: { onChange, value, name } }) => {
            console.log(onChange);
            return (
              <Select
                options={options}
                styles={customStyles}
                className={styles.selectContainer}
                isClearable
                maxMenuHeight={200}
                name={name}
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
      </div>
      {errors.categoria && (
        <p className={styles.error}>{errors.categoria.message}</p>
      )}
    </div>
  );
};

export default Step1;
