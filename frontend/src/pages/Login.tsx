import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("email"));

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">Iniciar sesión</h1>
          <p className="text-gray-500 text-sm">
            Bienvenido de nuevo. Ingresa tus datos para continuar.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tu@mail.com"
            aria-invalid={errors.email ? "true" : "false"}
            className={`outline-0 border rounded-lg py-2.5 px-4.5 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", { required: "El correo es requerido" })}
          />
          {errors.email && (
            <p className="text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu contraseña"
            aria-invalid={errors.password ? "true" : "false"}
            className={`outline-0 border rounded-lg py-2.5 px-4.5 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            {...register("password", { required: "La contraseña es requerida" })}
          />
          {errors.password && (
            <p className="text-sm text-red-600" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#4F46E5] text-white font-semibold rounded-lg py-2.5 cursor-pointer"
        >
          Iniciar sesión
        </button>

        <p className="text-sm text-center text-gray-500">
          ¿No tienes cuenta?{" "}
          <a href="" className="text-[#4F46E5] font-semibold">
            Crear cuenta
          </a>
        </p>
      </form>
    </div>
  );
}
