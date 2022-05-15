import * as yup from "yup";

const LoginSchema = yup.object({
    userName: yup.string().min(5).max(100).required('Necessário Usuário'),
    password: yup.string().min(8).max(60).required('Necessário Senha'),
  }).required();

  export default LoginSchema;