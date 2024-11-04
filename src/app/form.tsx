"use client";
import { UserContent } from "./zodValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/button";
export default function Form() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserContent>({
    resolver: zodResolver(UserContent),
  });

  const Send = async (data: UserContent) => {
    setLoading(true);
    return console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(Send)}
      className="flex flex-col align-top  w-3/4 h-full"
    >
      <fieldset className="flex flex-col align-top space-y-5 desktop-lg:space-y-8">
        <legend className="sr-only">Formulário de Login</legend>
        <div>
          <label htmlFor="email" className=" text-base text-white font-regular">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="email@gmail.com"
            {...register("email")}
            className="w-full  p-2  rounded  text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
          />

          <div className="h-1 mt-1">
            {errors.email && (
              <p className="text-xs text-red100 ">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className=" lg:mt-1 xl:mt-4">
          <label
            htmlFor="password"
            className="text-base text-white font-regular"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="sua senha"
            {...register("password")}
            className="w-full  p-2  rounded text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
          />
          <div className="h-1 mt-1">
            {errors.password && (
              <p className="text-xs text-red100 ">{errors.password?.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      <Button
        loading={loading}
        disabled={loading}
        type="submit"
        className=" mt-10 xl:mt-18 desktop:mt-12 desktop-lg:mt-20 "
        title="Entrar"
      />
    </form>
  );
}
