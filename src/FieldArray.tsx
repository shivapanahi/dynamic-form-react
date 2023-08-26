import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";

type FormValues = {
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

let renderCount = 0;



export default function FieldArray() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }]
    },
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control
  });
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={"section"} key={field.id}>
                <input
                  placeholder="name"
                  {...register(`cart.${index}.name` as const, {
                    required: true
                  })}
                  className={errors?.cart?.[index]?.name ? "error" : ""}
                  defaultValue={field.name}
                />
                <input
                  placeholder="quantity"
                  type="number"
                  {...register(`cart.${index}.quantity` as const, {
                    valueAsNumber: true,
                    required: true
                  })}
                  className={errors?.cart?.[index]?.quantity ? "error" : ""}
                  defaultValue={field.quantity}
                />
                <input
                  placeholder="value"
                  type="number"
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true
                  })}
                  className={errors?.cart?.[index]?.price ? "error" : ""}
                  defaultValue={field.price}
                />
                <button type="button" onClick={() => remove(index)}>
                  DELETE
                </button>
              </section>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() =>
            append({
              name: "",
              quantity: 0,
              price: 0
            })
          }
        >
          APPEND
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}