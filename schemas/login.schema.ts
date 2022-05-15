import * as yup from "yup";

const LoginSchema = yup.object({
    userName: yup.string().required('Necessário Usuário'),
    password: yup.string().required('Necessário Senha'),
  }).required();

  export default LoginSchema;