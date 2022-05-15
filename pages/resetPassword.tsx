import type { NextPage } from 'next'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import BodyStruct from '../components/structs/page.struct';
import FieldInput from '../components/inputsFields/field.imput';
import ButtonCard from '../components/button/button';
import ResetPassSchema from '../schemas/reset-pass-user.schema';
import ResetPassModel from '../models/reset-pass.model';
import AppError from '../components/errors/app.error';



const ResetPassword: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<ResetPassModel>(
  {
    defaultValues: {
      email:''
    },
    resolver: yupResolver(ResetPassSchema)
  }
  );

  const onSubmit: SubmitHandler<ResetPassModel> = data => {
    console.log(data)
  };

  return (
    <BodyStruct>
        <>
        <h2 className='titleCard'>Recuperar senha</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
          
          <FieldInput model={'email'} label={'E-mail'} errors={formState.errors.email} register={register}/>
          <ButtonCard title={'Enviar'}/>
          {!formState.errors.email && <AppError msg={'E-mail Invalido.'}/> };
          
          </form>
          </>

    </BodyStruct>
  )
}

export default ResetPassword;
