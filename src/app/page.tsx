import Image from "next/image";

export default function Login() {
  return (
    <main className="w-full h-screen bg-primary100 flex items-center justify-center">
      <section className="flex flex-row items-start justify-between w-11/12 h-4/5">
        <aside className=" flex flex-col w-4/12 desktop:h-min desktop-lg:h-full align-top  desktop-lg:space-y-12">
          <header className=" text-left w-3/4">
            <div className=" relative w-[150px] h-[50px]">
              <Image
                src="/LogoGrenke.webp"
                alt="Logo da Grenke"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <h1 className=" text-base desktop:text-lg desktop-lg:text-2xl text-start py-3 text-white font-light ">
              Bem-vindo de volta! Faça login para continuar.
            </h1>
          </header>

          <form className="flex flex-col align-top  lg:space-y-10 xl:space-y-18 w-3/4 h-full">
            <fieldset className="flex flex-col align-top space-y-5 desktop-lg:space-y-10">
              <legend className="sr-only">Formulário de Login</legend>
              <div>
                <label
                  htmlFor="email"
                  className=" text-base text-white font-regular"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full  p-2  rounded  text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
                />
                <p className="text-xs text-red100 mt-1">Email inválido</p>
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
                  placeholder="sua senha"
                  className="w-full  p-2  rounded text-white border border-solid  border-primary100  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
                />
                <p className="text-xs text-red100 mt-1">Senha inválida</p>
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full mt-10 bg-blue270 text-white  p-2 rounded font-semibold"
            >
              Entrar
            </button>
          </form>
        </aside>

        <figure className="relative w-8/12 h-full">
          <Image
            src="/LoginImage.webp"
            alt="Mulher segurando um notebook"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded"
          />
        </figure>
      </section>
    </main>
  );
}
