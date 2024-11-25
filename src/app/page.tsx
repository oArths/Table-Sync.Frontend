import SuspenseImage from "./shared/suspenseImage";
import Form from "./template/form";
export default function Login() {
  return (
    <main className="w-full h-screen bg-primary100 flex items-center justify-center">
      <section className="flex flex-row items-start justify-between w-11/12 h-4/5">
        <aside className=" flex flex-col max-laptop:w-6/12 w-4/12 desktop:h-min desktop-lg:h-full align-top  desktop-lg:space-y-5">
          <header className=" text-left w-3/4">
            <div className=" relative w-[150px] h-[50px]">
              <SuspenseImage
                src="/LogoGrenke.webp"
                alt="Logo da Grenke"
                fill
                sizes="(max-width: 768px) 100px, 150px"
                style={{ objectFit: "contain" }}
                priority={true}
                />
            </div>
            <h1 className=" text-base desktop:text-lg desktop-lg:text-2xl ultrawide:text-4xl text-start py-3 text-white font-light ">
              Bem-vindo de volta! Faça login para continuar.
            </h1>
          </header>
          <Form /> 
        </aside>
        <figure className="relative max-laptop:w-6/12  w-8/12 h-full">
          <SuspenseImage
            src="/LoginImage.webp"
            alt="Mulher segurando um notebook"
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1024px) 60vw, 80vw"
            style={{ objectFit: "cover" }}
            className="rounded"
            priority={true}
          />
        </figure>
      </section>
    </main>
  );
}
