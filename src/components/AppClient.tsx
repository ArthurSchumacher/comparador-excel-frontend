"use client";

import { compareFiles } from "@/actions/compare";
import { Dot } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  file_input: any;
  file_input2: any;
};

const AppClient = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const [values, setValues] = useState<string[]>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formData: FormData = new FormData();
      formData.append("files", data.file_input[0]);
      formData.append("files", data.file_input2[0]);

      const result = await compareFiles(formData);

      if (result) {
        if (result.message) {
          setValues([result.message]);
        }

        if (!result.message) {
          setValues(result);
        }
        toast.success("Sucesso ao comparar arquivos.");
      }
    } catch (error) {
      toast.error("Falha ao enviar arquivos.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pb-8">
        <h1 className="text-2xl">Selecione os arquivos</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="bg-[#13152A] px-5 py-12 rounded-md shadow-md mb-8 flex flex-col items-start gap-8"
      >
        <div className="w-full">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Arquivo 1:
          </label>
          <input
            {...register("file_input")}
            type="file"
            id="file_input"
            accept=".xlsx"
            className="block w-full file:mr-4 file:p-4 file:border-[1px] file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <div className="w-full">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            htmlFor="file_input2"
          >
            Arquivo 2:
          </label>
          <input
            {...register("file_input2")}
            type="file"
            id="file_input2"
            accept=".xlsx"
            className="block w-full file:mr-4 file:p-4 file:border-[1px] file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="mx-auto p-4 bg-[#653DB0] rounded-sm w-full max-w-xs rounded-lg shadow-md"
        >
          {isSubmitting ? "Enviando arquivos..." : "Enviar"}
        </button>
      </form>

      {values && (
        <div className="bg-[#13152A] px-5 py-12 rounded-md shadow-md">
          <p>Valores repetidos:</p>
          <ul>
            {values.map((value, index) => {
              return (
                <li key={index} className="py-4 inline-flex items-center">
                  <Dot />
                  <p>{value}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default AppClient;
