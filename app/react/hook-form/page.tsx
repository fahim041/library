'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  age: z.number({ invalid_type_error: 'Age field is required' }).min(18, {message: 'Age must be at least 18'}),
});

type formData = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-2">
        <label htmlFor="name">Name</label>
        <input id="name" className="border p-2" {...register('name')} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="p-2">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          className="border p-2"
          {...register('age', { valueAsNumber: true })}
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>
      <button className="border p-2 bg-slate-400 text-white disabled:bg-white disabled:text-gray-500" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
