import { useState } from "react";

import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Menu from "../../components/Menu";

const createFuncionarioFormSchema = z.object({
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
  sobrenome: z
    .string()
    .nonempty("O sobrenome é obrigatório")
    .transform((sobrenome) => {
      return sobrenome
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
  cpf: z
    .string()
    .nonempty("O cpf é obrigatório")
    .min(11, "O CPF deve ter no mínimo 11 digitos")
    .max(11, "O CPF deve ter no máximo 11 digitos")
    .transform((cpf) => {
      return String(cpf);
    }),
    telefone: z
    .string()
    .nonempty("O telefone é obrigatório")
    .min(11, "O telefone deve ter no mínimo 11 digitos")
    .max(11, "O telefone deve ter no máximo 11 digitos")
    .transform((tel) => {
      return String(tel);
    }),
  datanasc: z
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
    cep: z.string().nonempty("CEP deve ter 8 digitos"),

  sexo: z.string(),

  cargo: z.string().min(7, "Campo inválido").nonempty("Cargo é obrigatório"),
});

type CreateFuncionarioFormData = z.infer<typeof createFuncionarioFormSchema>;

export default function CadastroFuncionario() {
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

  const [cargo, setCargo] = useState([
    "Desenvolvedor de Software",
    "Analista de Sistemas",
    "Arquiteto de Soluções",
    "Engenheiro de Software",
    "Gerente de Projetos de TI",
    "Analista de Dados",
    "Especialista em Segurança da Informação",
    "Administrador de Redes",
    "Suporte Técnico",
    "Consultor em Tecnologia da Informação",
    "Gerente de Tecnologia da Informação",
    "Desenvolvedor Front-End",
    "Desenvolvedor Back-End",
    "Desenvolvedor Full Stack",
    "Engenheiro de DevOps",
    "Engenheiro de Machine Learning",
    "Engenheiro de Software Mobile",
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFuncionarioFormData>({
    resolver: zodResolver(createFuncionarioFormSchema),
  });

  function createFuncionario(data:any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="bg-zinc-800">
      <Menu />
      <div className="h-screen bg-zinc-800 flex items-center justify-start flex-col ">
        <h2 className="text-2xl text-cyan-100 font-bold">
          Cadastro de Funcionário
        </h2>
        <form
          action=""
          onSubmit={handleSubmit(createFuncionario)}
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
                {errors.name && <span className="text-red-400 font-semibold">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Sobrenome:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="text"
                  {...register("sobrenome")}
                />
                {errors.sobrenome && <span className="text-red-400 font-semibold">{errors.sobrenome.message}</span>}
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
                  CPF:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  placeholder="Somente números"
                  type="number"
                  {...register("cpf")}
                />
                {errors.cpf && <span className="text-red-400 font-semibold">{errors.cpf.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Sexo:</label>
                <div className="w-full flex flex-row justify-around ">
                  <label htmlFor="">
                    Maculino: <></>
                    <input
                      type="radio"
                      checked
                      {...register("sexo")}
                      value="masculino"
                    />
                  </label>
                  <label htmlFor="">
                    Feminino: <></>
                    <input
                      type="radio"
                      {...register("sexo")}
                      value="feminino"
                    />
                  </label>
                  <label htmlFor="">
                    Outro: <></>
                    <input type="radio" {...register("sexo")} value="outro" />
                  </label>
                </div>

                {errors.sexo && <span className="text-red-400 font-semibold">{errors.sexo.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="">
                  Data Nasc.:
                </label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  type="date"
                  {...register("datanasc")}
                />
                {errors.datanasc && <span className="text-red-400 font-semibold">{errors.datanasc.message}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-md m-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="">Telefone:</label>
                <input
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                  placeholder="Somente números"
                  type="number"
                  {...register("telefone")}
                />
                {errors.telefone && <span className="text-red-400 font-semibold">{errors.telefone.message}</span>}
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
                  {estados.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.estado && <span className="text-red-400 font-semibold">{errors.estado.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Cargo:</label>
                <select
                  {...register("cargo")}
                  className="border border-zinc-800 bg-zinc-900 text-white shadow-sm rounded h-10 px-3"
                >
                  <option selected value="padrao">
                    Selecione o Cargo...
                  </option>
                  {cargo.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.estado && <span className="text-red-400 font-semibold">{errors.estado.message}</span>}
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
