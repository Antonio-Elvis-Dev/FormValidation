import { useState } from "react";

import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Menu from "../../components/Menu";

const createProdutoFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  descricao: z
    .string()
    .nonempty("A descrição é obrigatória")
    .transform((descricao) => {
      return descricao
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),

  codbarras: z
    .string()
    .nonempty("O código de barras é obrigatório")
    .transform((codbarras) => {
      return String(codbarras);
    }),
  precovenda: z
    .string()
    .nonempty("O preço de venda é obrigatório")
    .transform((precovenda) => {
      return String(precovenda);
    }),
  precocusto: z
    .string()
    .nonempty("O preço de custo é obrigatório")
    .transform((precocusto) => {
      return String(precocusto);
    }),
  qtdestoque: z
    .string()
    .nonempty("O quantidade do estoque é obrigatório")
    .transform((qtdestoque) => {
      return String(qtdestoque);
    }),
  categoria: z
    .string()
    .min(5, "Campo inválido")
    .nonempty("A categoria é obrigatório"),

  nomefornecedor: z
    .string()
    .nonempty("O nome do fornecedor é obrigatório")
    ,
  cnpjfornecedor: z
    .string()
    .nonempty("O CNPJ do fornecedor é obrigatório")
    .transform((cnpjfornecedor) => {
      return String(cnpjfornecedor);
    }),

  datafab: z
    .string()
    .nonempty("A data de fabricação é obrigatória")
    ,
  datavalid: z
    .string()
    .nonempty("A data de validade é obrigatória")
    ,
});

type CreateProdutoFormData = z.infer<typeof createProdutoFormSchema>;

export default function CadastroProduto() {
  const [output, setOutput] = useState("");
  const [produto, setProdutos] = useState([
    "Alimentos e Bebidas",
    "Automóveis e Motocicletas",
    "Bebês e Crianças",
    "Beleza e Cuidados Pessoais",
    "Casa e Jardim",
    "Celulares e Telecomunicações",
    "Eletrônicos",
    "Esportes e Lazer",
    "Ferramentas e Construção",
    "Games e Entretenimento",
    "Informática e Tecnologia",
    "Livros, Filmes e Música",
    "Moda e Acessórios",
    "Papelaria e Escritório",
    "Pet Shop",
    "Saúde e Bem-estar",
    "Serviços",
    "Viagens e Turismo",
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProdutoFormData>({
    resolver: zodResolver(createProdutoFormSchema),
  });

  function createProduto(data) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="bg-zinc-800">
      <Menu />
      <div className="h-screen bg-zinc-800 flex items-center justify-start flex-col ">
        <h2 className="text-2xl text-cyan-100 font-bold">
          Cadastro de Produto
        </h2>
        <form
          action=""
          onSubmit={handleSubmit(createProduto)}
          className="flex flex-col gap-2 w-full max-w-3xl text-white"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="flex flex-col gap-2 w-full  max-w-md m-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Nome:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-400 font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Descrição do produto:
                </label>
                <textarea
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-24 px-3"
                  {...register("descricao")}
                />
                {errors.descricao && (
                  <span className="text-red-400 font-semibold">
                    {errors.descricao.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Código de barras:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  {...register("codbarras")}
                />
                {errors.codbarras && (
                  <span className="text-red-400 font-semibold">
                    {errors.codbarras.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Preço de venda:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  {...register("precovenda")}
                />
                {errors.precovenda && (
                  <span className="text-red-400 font-semibold">
                    {errors.precovenda.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Preço de custo:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  {...register("precocusto")}
                />
                {errors.precocusto && (
                  <span className="text-red-400 font-semibold">
                    {errors.precocusto.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Data de Fabricação.:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="date"
                  {...register("datafab")}
                />
                {errors.datafab && (
                  <span className="text-red-400 font-semibold">
                    {errors.datafab.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Data de validade.:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="date"
                  {...register("datavalid")}
                />
                {errors.datavalid && (
                  <span className="text-red-400 font-semibold">
                    {errors.datavalid.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-md m-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Qtd em estoque:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  {...register("qtdestoque")}
                />
                {errors.qtdestoque && (
                  <span className="text-red-400 font-semibold">
                    {errors.qtdestoque.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Categoria:
                </label>

                <select 
                {...register('categoria')}
                className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3">
                  <option selected value="pad">Selecione uma Categoria</option>
                  {produto.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>

                {errors.categoria && (
                  <span className="text-red-400 font-semibold">
                    {errors.categoria.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Nome do Fornecedor:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("nomefornecedor")}
                />
                {errors.nomefornecedor && (
                  <span className="text-red-400 font-semibold">
                    {errors.nomefornecedor.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  CNPJ do Fornecedor:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  {...register("cnpjfornecedor")}
                />
                {errors.cnpjfornecedor && (
                  <span className="text-red-400 font-semibold">
                    {errors.cnpjfornecedor.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="
            bg-emerald-500
             rounded font-semibold text-white h-10 hover:bg-emerald-600"
          >
            Cadastrar
          </button>
        </form>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
