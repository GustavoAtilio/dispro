import * as yup from "yup";


const CreateUserSchema = yup.object({
    name: yup.string().min(5).max(100).required('Necessário Name'),
    email: yup.string().email().min(5).max(100).required('Necessário Email'),
    number: yup.string().min(9).max(11).required('Necessário Celular'),
    password: yup.string().min(8).max(60).required('Necessário Senha'),
    repeatPassword:yup.string().min(8).max(60).oneOf([yup.ref('password'), null]) .required('Necessário Repedir Senha'),
    acceptTerms: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
  }).required();

  export default CreateUserSchema;