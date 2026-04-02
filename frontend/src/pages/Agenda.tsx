import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, parseISO, isSameDay, getHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Plus, X, Loader2, CheckCircle, XCircle } from 'lucide-react';
import api from '../services/api';

const Agenda = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  // Resource Data
  const [clientes, setClientes] = useState<any[]>([]);
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [servicos, setServicos] = useState<any[]>([]);

  // Form State
  const [clienteId, setClienteId] = useState('');
  const [profissionalId, setProfisssionalId] = useState('');
  const [servicoId, setServicoId] = useState('');
  const [data, setData] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [hora, setHora] = useState('09:00');

  // Derive days of week
  const startDate = startOfWeek(currentWeek, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  useEffect(() => {
    fetchAgendamentos();
    fetchResources();
  }, [currentWeek]);

  const fetchAgendamentos = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/agendamentos');
      setAgendamentos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchResources = async () => {
    try {
      const [c, p, s] = await Promise.all([
        api.get('/clientes'),
        api.get('/profissionais'),
        api.get('/servicos')
      ]);
      setClientes(c.data);
      setProfissionais(p.data);
      setServicos(s.data);
    } catch (err) {
      console.error('Erro ao carregar recursos', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const data_hora = new Date(`${data}T${hora}:00`).toISOString();
      await api.post('/agendamentos', {
        clienteId,
        profissionalId,
        servicoId,
        data_hora
      });
      setIsModalOpen(false);
      fetchAgendamentos();
    } catch (error: any) {
      alert(error.response?.data?.error || 'Erro ao agendar');
    } finally {
      setBtnLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await api.put(`/agendamentos/${id}`, { status });
      fetchAgendamentos();
    } catch (error) {
      alert('Erro ao atualizar status');
    }
  };

  const nextWeek = () => setCurrentWeek(addDays(currentWeek, 7));
  const prevWeek = () => setCurrentWeek(addDays(currentWeek, -7));

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-gray-800">Agenda</h2>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button onClick={prevWeek} className="p-1 hover:bg-white rounded-md transition-colors text-gray-600">
              <ChevronLeft size={20} />
            </button>
            <span className="px-4 text-sm font-medium text-gray-700 capitalize">
              {format(startDate, "MMMM 'de' yyyy", { locale: ptBR })}
            </span>
            <button onClick={nextWeek} className="p-1 hover:bg-white rounded-md transition-colors text-gray-600">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Novo Agendamento
        </button>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col min-h-[600px]">
        {/* Weekly Header */}
        <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
          <div className="p-3 text-center text-xs font-semibold text-gray-500 border-r border-gray-200">
            Horários
          </div>
          {weekDays.map(day => (
            <div key={day.toString()} className="p-3 text-center border-r border-gray-200 last:border-0">
              <p className="text-xs text-gray-400 uppercase font-medium">{format(day, 'EEE', { locale: ptBR })}</p>
              <p className={`text-lg font-bold ${
                format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') 
                  ? 'text-primary-600' 
                  : 'text-gray-900'
              }`}>
                {format(day, 'dd')}
              </p>
            </div>
          ))}
        </div>

        {/* Time Slots Grid */}
        <div className="flex-1 overflow-y-auto relative bg-grid">
          {loading && (
            <div className="absolute inset-0 bg-white/40 flex items-center justify-center z-20 backdrop-blur-[1px]">
              <Loader2 className="animate-spin text-primary-600" size={32} />
            </div>
          )}
          
          {Array.from({ length: 12 }).map((_, i) => {
            const hour = i + 9; // 9:00 to 20:00
            return (
              <div key={hour} className="grid grid-cols-8 border-b border-gray-100 min-h-[80px]">
                <div className="text-center text-xs text-gray-400 font-medium py-2 border-r border-gray-100 bg-gray-50 flex items-start justify-center">
                  {hour}:00
                </div>
                {weekDays.map((day, dIndex) => {
                  const slots = agendamentos.filter(a => {
                    const date = parseISO(a.data_hora);
                    return isSameDay(date, day) && getHours(date) === hour;
                  });

                  return (
                    <div key={dIndex} className="border-r border-gray-100 last:border-0 p-1 relative min-h-[80px]">
                       {slots.map(slot => (
                         <div 
                          key={slot.id} 
                          className={`mb-1 p-2 rounded-lg text-[10px] shadow-sm border flex flex-col gap-1 group transition-all hover:scale-[1.02] cursor-default
                            ${slot.status === 'CONCLUIDO' ? 'bg-green-50 border-green-200 text-green-700' : 
                              slot.status === 'CANCELADO' ? 'bg-red-50 border-red-200 text-red-700' : 
                              'bg-primary-50 border-primary-200 text-primary-700'}`}
                         >
                            <div className="flex justify-between items-start font-bold">
                              <span>{slot.cliente.nome}</span>
                              {slot.status === 'AGENDADO' && (
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100">
                                  <button onClick={() => updateStatus(slot.id, 'CONCLUIDO')} className="hover:text-green-600"><CheckCircle size={12} /></button>
                                  <button onClick={() => updateStatus(slot.id, 'CANCELADO')} className="hover:text-red-600"><XCircle size={12} /></button>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col text-[8px] opacity-80">
                              <span>{slot.servico.nome} | {slot.profissional.nome}</span>
                              <span className="font-medium mt-1">{slot.status}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Agendamento */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Novo Agendamento</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Data</label>
                  <input type="date" required value={data} onChange={(e) => setData(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Hora</label>
                  <input type="time" required value={hora} onChange={(e) => setHora(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Cliente</label>
                <select required value={clienteId} onChange={(e) => setClienteId(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50">
                  <option value="">Selecionar Cliente</option>
                  {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Profissional</label>
                <select required value={profissionalId} onChange={(e) => setProfisssionalId(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50">
                  <option value="">Selecionar Profissional</option>
                  {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Serviço</label>
                <select required value={servicoId} onChange={(e) => setServicoId(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50">
                  <option value="">Selecionar Serviço</option>
                  {servicos.map(s => <option key={s.id} value={s.id}>{s.nome} (R$ {s.preco})</option>)}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 border rounded-lg text-sm font-bold text-gray-600">Cancelar</button>
                <button type="submit" disabled={btnLoading} className="flex-1 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                  {btnLoading ? <Loader2 size={18} className="animate-spin" /> : 'Confirmar Agenda'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agenda;
