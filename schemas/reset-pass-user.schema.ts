import * as yup from "yup";


const ResetPassSchema = yup.object({
    email: yup.string().email().min(5).max(100).required('Necessário Email'),
  }).required();

  export default ResetPassSchema;