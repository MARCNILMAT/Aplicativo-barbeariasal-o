import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Award } from 'lucide-react';
import api from '../services/api';

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfissionais();
  }, []);

  const fetchProfissionais = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/profissionais');
      setProfissionais(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Profissionais</h2>
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Novo Profissional
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-10 text-center text-sm text-gray-500">
            Carregando profissionais...
          </div>
        ) : profissionais.length === 0 ? (
          <div className="col-span-full py-10 text-center text-sm text-gray-500">
            Nenhum profissional cadastrado.
          </div>
        ) : (
          profissionais.map((prof) => (
            <div key={prof.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center hover:shadow-md transition-shadow relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-2xl font-bold mb-4">
                {prof.nome.charAt(0).toUpperCase()}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 text-center">{prof.nome}</h3>
              <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-1">
                <Award size={14} className="text-gray-400" />
                {prof.especialidade}
              </p>
              
              <div className="w-full border-t border-gray-100 mt-auto pt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Comissão p/ Serviço</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {prof.comissao}%
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profissionais;
