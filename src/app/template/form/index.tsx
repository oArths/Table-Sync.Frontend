"use client";
import { UserContent } from "../../zodValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/app/components/button";
import { useRouter } from "next/navigation";
import { UserInstance } from "@/app/services";
export default function Form() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const usuarios = new UserInstance();
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
    try {
      const user = await usuarios.LoginUser(data);
      console.log(user);
      // router.push("/home")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(Send)}
      className="flex flex-col align-top  w-3/4 h-full"
    >
      <fieldset className="flex flex-col align-top space-y-5 desktop-lg:space-y-8 ultrawide:space-y-12 4k:space-y-20  ">
        <legend className="sr-only">Formulário de Login</legend>
        <div>
          <label
            htmlFor="email"
            className=" text-base ultrawide:text-2xl text-white font-regular"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            autoComplete="off"
            placeholder="email@gmail.com"
            {...register("email")}
            className="w-full  p-2 ultrawide:text-xl ultrawide:mt-2 rounded  text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
          />

          <div className="h-1 mt-1">
            {errors.email && (
              <p className="text-xs ultrawide:text-base font-bold text-red300/70  ">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className=" lg:mt-1 xl:mt-4">
          <label
            htmlFor="password"
            className="text-base ultrawide:text-2xl  text-white font-regular"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="sua senha"
            {...register("password")}
            className="w-full  p-2  ultrawide:text-xl ultrawide:mt-2 rounded text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
          />
          <div className="h-1 mt-1">
            {errors.password && (
              <p className="text-xs ultrawide:text-base font-bold text-red300/70 ">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      <Button
        loading={loading}
        disabled={loading}
        type="submit"
        className=" w-full h-10 ultrawide:h-14 mt-10 xl:mt-18 desktop:mt-12 desktop-lg:mt-20 4k:mt-28 "
        title={loading ? "" : "Entrar"}
      />
    </form>
  );
}
