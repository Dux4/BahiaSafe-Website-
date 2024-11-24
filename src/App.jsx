import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  Bell,
  MapPin,
  AlertCircle,
  Phone,
  Shield,
  FileText,
  Lock,
} from "lucide-react";

import securityImage from "./assets/Security.png";


const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const BahiaSafe = () => {
  const crimeData = [
    { name: "Homicídios", value: 50 },
    { name: "Roubos", value: 150 },
    { name: "Furtos", value: 150 },
    { name: "Tráfico de Drogas", value: 160 },
    { name: "Violência Doméstica", value: 200 },
  ];

  const newsItems = [
    {
      title: "Bahia lidera ranking de criminalidade no Brasil",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Taxa de homicídios na Bahia sofre alteração",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Brigas de Trânsito - Como Evitar e Manter a Paz",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Organizações Criminosas crescem e população se preocupa",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Tráfico de drogas - Filhos que se perdem no mundo",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Crime cibernético existe entre os mais preocupantes para Jovens",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-500">BahiaSafe</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Notícias/Educacional
            </a>
            <a href="#" className="text-gray-600">
              Mapa de Calor
            </a>
            <a href="#" className="text-gray-600">
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            Bem-vindo ao Bahia Safe: Conecte-se e Transforme a Segurança Pública
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            A plataforma colaborativa foca na segurança pública, centralizando
            informações, conectando cidadãos e autoridades para tornar nossa
            comunidade mais segura em prevenção.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
              Saiba mais
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={securityImage}
            alt="Security"
            className="rounded-lg"
            style={{
              height: "80%", // 80% da altura do contêiner ou da viewport
              width: "auto", // Largura ajustada proporcionalmente
              maxHeight: "80vh", // Não ultrapassar 80% da altura da viewport
              objectFit: "contain", // Manter proporção sem distorcer
            }}
          />
        </div>
      </section>

      {/* Heat Map Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Mapa de calor - Locais com maior índice de crimes
        </h3>
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-500">Mapa de Calor</span>
        </div>
        <div className="flex justify-center">
        <button
  className="bg-black text-white px-6 py-3 rounded-md"
  onClick={() => (window.location.href = "../pages/RegistrarOcorrencia.html")}
>
  Registrar Ocorrência
</button>

        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Nossos Principais Recursos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="p-6 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Mapa de Risco</h4>
                <p>
                  Visualize áreas de risco em tempo real e tome decisões
                  informadas sobre sua segurança
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 flex flex-col items-center text-center">
                <AlertCircle className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Boletim de Ocorrência</h4>
                <p>
                  Registre ocorrências de forma rápida e segura com
                  acompanhamento em tempo real.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 flex flex-col items-center text-center">
                <Bell className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Alertas</h4>
                <p>
                  Receba notificações importantes sobre ocorrências em sua
                  região
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Crime Statistics */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Crimes Mais Comuns na Bahia: Top 5 deste Mês
        </h3>
        <div className="flex justify-center overflow-x-auto">
          <BarChart width={600} height={300} data={crimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#f97316" />
          </BarChart>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">BahiaSafe</h2>
          <p className="mb-4">
            Inscreva-se para ficar por dentro das novidades sobre a nossa
            plataforma e últimas atualizações. Vamos nessa!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-2 rounded-md text-gray-800"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Inscrever
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BahiaSafe;
