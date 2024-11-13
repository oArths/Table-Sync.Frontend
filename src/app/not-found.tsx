export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen  bg-primary100">
      <h1 className="font-bold  text-9xl text-white text-center">404</h1>
      <p className="font-medium mt-5 text-4xl text-white text-center">
        Pagina não encontrada
      </p>
      <a
        className="flex items-center justify-center rounded w-48 h-10 bg-blue270 mt-10  no-underline font-medium text-white"
        href="/"
      >
        Login
      </a>
    </div>
  );
}
