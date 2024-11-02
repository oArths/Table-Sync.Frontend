import Image from "next/image";

export default function Login() {
  return (
    <main className="w-full h-screen bg-primary100 flex items-center justify-center">
      <section className="flex flex-row items-start justify-between w-11/12 h-4/5">
        <aside className=" flex flex-col w-4/12 h-full align-top justify-between">
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
            <h1 className=" text-lg text-start py-3 text-white font-light ">
              Bem-vindo de volta! Faça login para continuar.
            </h1>
          </header>

          <form className="flex flex-col align-top space-y-6 w-3/4">
            <fieldset>
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
                  className="w-full mt-1 p-2 border rounded"
                />
                <p className="text-xs text-red100 mt-1">Email inválido</p>
              </div>

              <div className="mt-4">
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
                  className="w-full mt-1 p-2 border rounded"
                />
                <p className="text-xs text-red100 mt-1">Senha inválida</p>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue270 text-white  p-2 rounded font-semibold"
            >
              Entrar
            </button>
          </form>
          <footer className="text-center  align-bottom mt-auto h-auto w-3/4  text-xs text-gray300">
            ℗ 2024 Arthur Ferreira, All rights reserved.
          </footer>
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
