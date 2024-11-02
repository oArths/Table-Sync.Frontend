import Image from "next/image";

export default function Login() {
  return (
    <main className="w-full h-screen bg-primary100 flex items-center justify-center">
      <section className="flex flex-row items-start justify-between w-11/12 h-4/5">
        <aside className=" w-4/12 h-full">
          <header className="text-center md:text-left">
            <Image
              src="/LogoGrenke.webp"
              alt="Logo da Grenke"
              width={100}
              height={100}
              layout="responsive"
            />
            <h1 className="text-lg font-semibold mt-4">
              Bem-vindo de volta! Faça login para continuar.
            </h1>
          </header>

          <form className="space-y-6">
            <fieldset>
              <legend className="sr-only">Formulário de Login</legend>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full mt-1 p-2 border rounded"
                />
                <p className="text-xs text-red-500 mt-1">Email inválido</p>
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="sua senha"
                  className="w-full mt-1 p-2 border rounded"
                />
                <p className="text-xs text-red-500 mt-1">Senha inválida</p>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded font-semibold"
            >
              Entrar
            </button>
          </form>
          <footer className="text-center mt-4 text-xs text-gray-500">
            ℗ 2024 Arthur Ferreira, All rights reserved.
          </footer>
        </aside>

        <figure className="relative w-7/12 h-full">
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
