import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import Button, { IconPosition } from "UI-Components/Button/Button";
import { useForm } from "react-hook-form";
/* import { uploadImageCloudinary } from 'lib/utils' */
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Multistep from "Components/Steps/Multistep";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [activeStep, setActiveStep] = useState<number>(2);

  const submitRegister = () => {
    console.log(watch());
  };

  const stepForward = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const stepBackward = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Multistep activeIndex={activeStep} />
      <br />
      <form>
        {activeStep === 1 && (
          <Step1 register={register} errors={errors} control={control} />
        )}

        {activeStep === 2 && <Step2 />}

        {activeStep === 3 ? (
          <Step3 register={register} errors={errors} />
        ) : null}

        <div className={styles.flexWrapper}>
          {activeStep !== 1 ? (
            <Button
              text="Retroceder"
              click={stepBackward}
              rounded
              icon={<FiChevronLeft />}
              iconPosition={IconPosition.Left}
              noBackground={true}
            />
          ) : null}
          {activeStep !== 3 ? (
            <Button
              text="Avançar"
              click={stepForward}
              rounded
              icon={<FiChevronRight />}
              disabled={!isValid}
            />
          ) : null}
          {activeStep === 3 && (
            <Button
              text="Completar Registo"
              disabled={isValid ? false : true}
              click={submitRegister}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
