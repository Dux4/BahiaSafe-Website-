import React from "react";

const RegistrarOcorrencia = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">
        Registrar Ocorrência
      </h1>
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Título</label>
          <input
            type="text"
            placeholder="Digite o título da ocorrência"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Descrição</label>
          <textarea
            placeholder="Descreva a ocorrência"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Local</label>
          <input
            type="text"
            placeholder="Digite o local da ocorrência"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md w-full">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RegistrarOcorrencia;
