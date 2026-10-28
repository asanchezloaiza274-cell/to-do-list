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
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-heading">
          <h1 className="login-title">Iniciar sesión</h1>
          <p className="login-description">
            Bienvenido de nuevo. Ingresa tus datos para continuar.
          </p>
        </div>

        <div className="login-field">
          <label htmlFor="email" className="login-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tu@mail.com"
            aria-invalid={errors.email ? "true" : "false"}
            className={`field-input ${errors.email ? "field-input-error" : ""}`}
            {...register("email", { required: "El correo es requerido" })}
          />
          {errors.email && (
            <p className="login-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="login-field">
          <label htmlFor="password" className="login-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu contraseña"
            aria-invalid={errors.password ? "true" : "false"}
            className={`field-input ${errors.password ? "field-input-error" : ""}`}
            {...register("password", { required: "La contraseña es requerida" })}
          />
          {errors.password && (
            <p className="login-error" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="primary-button"
        >
          Iniciar sesión
        </button>

        <p className="login-footer">
          ¿No tienes cuenta?{" "}
          <a href="" className="login-link">
            Crear cuenta
          </a>
        </p>
      </form>
    </div>
  );
}
