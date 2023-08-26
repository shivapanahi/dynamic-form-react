import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function ReactHook() {
  const { register, handleSubmit, watch, formState: { errors },setError } = useForm<Inputs>({
   defaultValues:{
    example:"example",
    exampleRequired:"exampleRequired"
   }
  });
  console.log('errors>>',errors)
  const onSubmit: SubmitHandler<Inputs> = data =>{
   
    console.log('data',data)
    console.log('errors',errors)
  };
  console.log('watch',watch().example)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("example")} />
      <input {...register("exampleRequired", { required: "thid is requierd" ,disabled:false,minLength:{
        value:5,
        message:"this is about minlength"
      }})} />
      { <span>{errors.exampleRequired?.message} </span>}
      <input type="submit" />
    </form>
  );
}




