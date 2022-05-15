import * as yup from "yup";


const CreateUserSchema = yup.object({
    name: yup.string().required('Necessário Name'),
    email: yup.string().required('Necessário Email'),
    number: yup.string().required('Necessário Celular'),
    password: yup.string().required('Necessário Senha'),
    repeatPassword:yup.string().required('Necessário Repedir Senha'),
    acceptTerms: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
  }).required();

  export default CreateUserSchema;