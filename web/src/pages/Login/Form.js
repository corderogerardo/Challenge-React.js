import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./Schema";

import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form>
      <Input
        name="Email"
        type="email"
        error={errors.Email?.message}
        register={register}
      />
      <Input
        name="Password"
        type="password"
        error={errors.Password?.message}
        register={register}
      />
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            id="customCheckLogin"
            type="checkbox"
            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
            style={{ transition: "all .15s ease" }}
          />
          <span className="ml-2 text-sm font-semibold text-gray-700">
            Remember me
          </span>
        </label>
      </div>
      <Button title="Login" onSubmit={onSubmit} handleSubmit={handleSubmit} />
    </form>
  );
}
