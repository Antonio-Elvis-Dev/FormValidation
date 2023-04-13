import { useState } from "react";

import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Menu from "../../components/Menu";

const createFornecedorFormSchema = z.object({
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
  fantasia: z
    .string()
    .nonempty("O sobrenome é obrigatório")
    .transform((fantasia) => {
      return fantasia
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato inválido")
    .toLowerCase(),
  cnpj: z
    .string()
    .nonempty("O CNPJ é obrigatório")
    .min(14, "O CNPJ deve ter 14 digitos")
    .max(14, "O CNPJ deve ter 14 digitos")
    .transform((cnpj) => {
      return String(cnpj);
    }),
    datainic: z
    .string()
    .nonempty("A data é obrigatória")
    ,
  endereco: z
    .string()
    .nonempty("O endereço é obrigatório")
    .transform((endereco) => {
      return endereco
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  bairro: z
    .string()
    .nonempty("O bairro é obrigatório")
    .transform((bairro) => {
      return bairro
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  cidade: z
    .string()
    .nonempty("O cidade é obrigatório")
    .transform((cidade) => {
      return cidade
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  estado: z
    .string()
    .min(7, "Campo inválido")
    .nonempty("O estado é obrigatório"),

  ramo: z.string().min(4, "Campo inválido").nonempty("O estado é obrigatório"),
  cep: z.string().nonempty("CEP deve ter 8 digitos"),

  descricao: z.string().nonempty("Descrição obrigatorio")
});

type CreateFornecedorFormData = z.infer<typeof createFornecedorFormSchema>;

export default function CadastroFornecedor() {
  const [output, setOutput] = useState("");
  const [estados, setEstados] = useState([
    "AC - Acre",
    "AL - Alagoas",
    "AP - Amapá",
    "AM - Amazonas",
    "BA - Bahia",
    "CE - Ceará",
    "DF - Distrito Federal",
    "ES - Espírito Santo",
    "GO - Goiás",
    "MA - Maranhão",
    "MT - Mato Grosso",
    "MS - Mato Grosso do Sul",
    "MG - Minas Gerais",
    "PA - Pará",
    "PB - Paraíba",
    "PR - Paraná",
    "PE - Pernambuco",
    "PI - Piauí",
    "RJ - Rio de Janeiro",
    "RN - Rio Grande do Norte",
    "RS - Rio Grande do Sul",
    "RO - Rondônia",
    "RR - Roraima",
    "SC - Santa Catarina",
    "SP - São Paulo",
    "SE - Sergipe",
    "TO - Tocantins",
  ]);

  const [ramo, setRamo] = useState([
    "Alimentício",
    "Automotivo",
    "Bancário",
    "Comércio Eletrônico",
    "Construção Civil",
    "Educação",
    "Farmacêutico",
    "Financeiro",
    "Governo",
    "Hotelaria e Turismo",
    "Imobiliário",
    "Indústria Automotiva",
    "Indústria Química",
    "Logística e Transporte",
    "Marketing e Publicidade",
    "Mídia e Entretenimento",
    "Saúde",
    "Serviços Financeiros",
    "Tecnologia da Informação",
    "Telecomunicações",
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFornecedorFormData>({
    resolver: zodResolver(createFornecedorFormSchema),
  });

  function createFornecedor(data:any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="bg-zinc-800">
      <Menu />
      <div className="h-screen bg-zinc-800 flex items-center justify-start flex-col ">
        <h2 className="text-2xl text-cyan-100 font-bold">
          Cadastro de Fornecedor
        </h2>
        <form
          action=""
          onSubmit={handleSubmit(createFornecedor)}
          className="flex flex-col gap-2 w-full max-w-3xl text-white"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="flex flex-col gap-2 w-full  max-w-md m-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Nome da Empresa
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("name")}
                />
                {errors.name && <span className="text-red-400 font-semibold">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Nome Fantasia:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("fantasia")}
                />
                {errors.fantasia && <span className="text-red-400 font-semibold">{errors.fantasia.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  E-mail:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="email"
                  {...register("email")}
                />
                {errors.email && <span className="text-red-400 font-semibold">{errors.email.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  CNPJ:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  placeholder="Somente números"
                  type="number"
                  {...register("cnpj")}
                />
                {errors.cnpj && <span className="text-red-400 font-semibold">{errors.cnpj.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Data de Inicio das atividades:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="date"
                  {...register("datainic")}
                />
                {errors.datainic && <span className="text-red-400 font-semibold">{errors.datainic.message}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-md m-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Ramo:</label>
                <select
                  {...register("ramo")}
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                >
                  <option selected value="pad">
                    Selecione um Ramo...
                  </option>
                  {ramo.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
                {errors.ramo && <span className="text-red-400 font-semibold">{errors.ramo.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  CEP:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="number"
                  placeholder="Somente numeros"
                  {...register("cep")}
                />
                {errors.cep && (
                  <span className="text-red-400 font-semibold">
                    {errors.cep.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Endereço:</label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("endereco")}
                />
                {errors.endereco && <span className="text-red-400 font-semibold">{errors.endereco.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Bairro:</label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("bairro")}
                />
                {errors.bairro && <span className="text-red-400 font-semibold">{errors.bairro.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Cidade:</label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("cidade")}
                />
                {errors.cidade && <span className="text-red-400 font-semibold">{errors.cidade.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Estado:</label>
                <select
                  {...register("estado")}
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                >
                  <option selected value="padrao">
                    Selecione o Estado...
                  </option>
                  {estados.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                {errors.estado && <span className="text-red-400 font-semibold">{errors.estado.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Descrição:</label>
                <textarea
                  className="border border-zinc-800 bg-zinc-900  text-white shadow-sm rounded h-24 px-3"
                  
                  {...register("descricao")}
                />
                {errors.descricao && <span className="text-red-400 font-semibold">{errors.descricao.message}</span>}
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
