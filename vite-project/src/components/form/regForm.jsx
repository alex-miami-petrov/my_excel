import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "../container/container";
import s from "./regForm.module.css";
import { registerUser } from "../../api/api.js";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import flag from "../../img/flag.png";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обов'язкове поле"),
  email: Yup.string()
    .email("Неправильний формат email")
    .required("Обов'язкове поле"),
  phone: Yup.string().required("Обов'язкове поле"),
  agreement: Yup.boolean().oneOf([true], "Необхідно погодитися з умовами"),
});

const RegForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Container>
        <Formik
          initialValues={{ name: "", email: "", phone: "", agreement: false }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            setIsLoading(true);
            try {
              const responseData = await registerUser(values);
              console.log("Форма успішно відправлена!", responseData);
              iziToast.success({
                title: "Успіх",
                message: "Форма успішно відправлена!",
              });
            } catch (error) {
              console.error("Помилка відправлення форми:", error);
              iziToast.error({
                title: "Помилка",
                message: "Помилка відправлення форми!",
              });
            } finally {
              setIsLoading(false);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className={s.form}>
              {isLoading && <div className={s.loading}>Завантаження...</div>}

              <Field
                name="name"
                placeholder="Введіть своє ім'я"
                className={s.input}
              />
              <ErrorMessage name="name" component="div" className={s.error} />

              <Field
                name="email"
                type="email"
                placeholder="Введіть свій E-mail"
                className={s.input}
              />
              <ErrorMessage name="email" component="div" className={s.error} />
              <div className={s.phoneInputWrapper}>
                <img
                  className={s.flagIcon}
                  src={flag}
                  alt="flag"
                  width="24"
                  height="16"
                />
                <Field
                  name="phone"
                  placeholder="+380 95 -- --- --"
                  className={`${s.input} ${s.phoneInputWithIcon}`}
                />
              </div>
              <ErrorMessage name="phone" component="div" className={s.error} />

              <label className={s.agreementLabel}>
                <Field
                  type="checkbox"
                  name="agreement"
                  className={s.checkbox}
                />
                <div className={s.checkWrap}>
                  <p className={s.checkText}>
                    Згоден з
                    <span className={s.span}>
                      <a href="#" className={s.link}>
                        Політикою конфіденційності
                      </a>
                    </span>
                    та
                    <span className={s.span}>
                      <a href="#" className={s.link}>
                        Умовами користування послугами
                      </a>
                    </span>
                  </p>
                </div>
              </label>
              <ErrorMessage
                name="agreement"
                component="div"
                className={s.error}
              />

              <button type="submit" className={s.regBut} disabled={isLoading}>
                {isLoading ? "Відправлення..." : "Зареєструватися"}
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default RegForm;
