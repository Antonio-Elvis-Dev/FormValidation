import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className=" flex justify-around flex-row items-center h-16 bg-slate-600 text-zinc-50 px-6">
      <div className="text-3xl font-bold w-full">Master Cadastros</div>
      <div className=" flex flex-row justify-around w-full items-center">
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/cliente"
        >
          Cliente
        </Link>
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/funcionario"
        >
          Funcionário
        </Link>
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/produto"
        >
          Produto
        </Link>
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/fornecedor"
        >
          Fornecedor
        </Link>
        <Link
          className="text-lg bg-slate-800 p-2 rounded font-semibold hover:bg-slate-950"
          to="/concorrente"
        >
          Concorrente
        </Link>
      </div>
    </header>
  );
}
