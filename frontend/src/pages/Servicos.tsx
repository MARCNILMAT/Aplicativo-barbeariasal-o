import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2 } from 'lucide-react';
import api from '../services/api';

const Servicos = () => {
  const [servicos, setServicos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [btnLoading, setBtnLoading] = useState(false);

  // Form State
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [duracao, setDuracao] = useState('30');

  useEffect(() => {
    fetchServicos();
  }, []);

  const fetchServicos = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/servicos');
      setServicos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (servico?: any) => {
    if (servico) {
      setEditingId(servico.id);
      setNome(servico.nome);
      setPreco(servico.preco.toString());
      setDuracao(servico.duracao.toString());
    } else {
      setEditingId(null);
      setNome('');
      setPreco('');
      setDuracao('30');
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const payload = {
        nome,
        preco: parseFloat(preco),
        duracao: parseInt(duracao)
      };

      if (editingId) {
        await api.put(`/servicos/${editingId}`, payload);
      } else {
        await api.post('/servicos', payload);
      }
      setIsModalOpen(false);
      fetchServicos();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error || error.response?.data?.message || 'Erro ao salvar serviço';
      alert(msg);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Excluir este serviço permanentemente?')) return;
    try {
      await api.delete(`/servicos/${id}`);
      fetchServicos();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error || error.response?.data?.message || 'Erro ao excluir serviço';
      alert(msg);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Serviços</h2>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Novo Serviço
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-10 text-center text-sm text-gray-500">
            Carregando serviços...
          </div>
        ) : servicos.length === 0 ? (
          <div className="col-span-full py-10 text-center text-sm text-gray-500">
            Nenhum serviço cadastrado.
          </div>
        ) : (
          servicos.map((servico) => (
            <div key={servico.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">{servico.nome}</h3>
                <div className="flex gap-2">
                  <button onClick={() => handleOpenModal(servico)} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => handleDelete(servico.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary-600">
                  R$ {servico.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {servico.duracao} min
                </div>
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
                {editingId ? 'Editar Serviço' : 'Novo Serviço'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Serviço</label>
                <input
                  type="text" required value={nome} onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Ex: Corte de Cabelo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
                <input
                  type="number" step="0.01" required value={preco} onChange={(e) => setPreco(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duração (minutos)</label>
                <input
                  type="number" required value={duracao} onChange={(e) => setDuracao(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">Cancelar</button>
                <button type="submit" disabled={btnLoading} className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
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

export default Servicos;
