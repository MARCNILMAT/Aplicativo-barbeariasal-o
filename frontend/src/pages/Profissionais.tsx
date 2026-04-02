import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Award, X, Loader2 } from 'lucide-react';
import api from '../services/api';

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [btnLoading, setBtnLoading] = useState(false);

  // Form State
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [comissao, setComissao] = useState('50');

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

  const handleOpenModal = (prof?: any) => {
    if (prof) {
      setEditingId(prof.id);
      setNome(prof.nome);
      setEspecialidade(prof.especialidade);
      setComissao(prof.comissao.toString());
    } else {
      setEditingId(null);
      setNome('');
      setEspecialidade('');
      setComissao('50');
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const payload = {
        nome,
        especialidade,
        comissao: parseFloat(comissao)
      };

      if (editingId) {
        await api.put(`/profissionais/${editingId}`, payload);
      } else {
        await api.post('/profissionais', payload);
      }
      
      setIsModalOpen(false);
      fetchProfissionais();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error || error.response?.data?.message || 'Erro ao salvar profissional';
      alert(msg);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este profissional?')) return;
    try {
      await api.delete(`/profissionais/${id}`);
      fetchProfissionais();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error || error.response?.data?.message || 'Erro ao excluir profissional';
      alert(msg);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Profissionais</h2>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
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
                <button 
                  onClick={() => handleOpenModal(prof)}
                  className="text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  onClick={() => handleDelete(prof.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
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

      {/* Modal CRUD */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">
                {editingId ? 'Editar Profissional' : 'Novo Profissional'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Especialidade</label>
                <input
                  type="text"
                  required
                  value={especialidade}
                  onChange={(e) => setEspecialidade(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="Ex: Barbeiro Master"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Comissão (%)</label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  value={comissao}
                  onChange={(e) => setComissao(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={btnLoading}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  {btnLoading ? <Loader2 size={18} className="animate-spin" /> : (editingId ? 'Salvar' : 'Criar')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profissionais;
