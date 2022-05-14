import type { NextPage } from 'next'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};


const Home: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className={'w-full h-full flex flex-col md:flex-row'}>

      <div className={'hidden md:block md:w-[50%] bg-sky-700'}>
          <h1>Logo</h1>
      </div>


      <div className={'md:w-[50%] h-screen flex justify-center items-center'}>
        <div className="w-[45%] h-auto p-12 shadow-md rounded-lg border">
          <h2 className='my-2 bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-900 font-bold text-3xl text-center'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
      </div>
    </div>
  )
}

export default Home
