import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import api from '../services/api';

const Agenda = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Derive days of week
  const startDate = startOfWeek(currentWeek, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  useEffect(() => {
    fetchAgendamentos();
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
        
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Novo Agendamento
        </button>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        {/* Weekly Header */}
        <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50">
          <div className="p-3 text-center text-xs font-semibold text-gray-500 border-r border-gray-200">
            Horários
          </div>
          {weekDays.map(day => (
            <div key={day.toString()} className="p-3 text-center border-r border-gray-200 last:border-0 hover:bg-gray-100 cursor-default transition-colors">
              <p className="text-xs text-gray-500 uppercase font-medium">{format(day, 'EEE', { locale: ptBR })}</p>
              <p className={`text-lg font-bold mt-1 ${
                format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') 
                  ? 'text-primary-600' 
                  : 'text-gray-900'
              }`}>
                {format(day, 'dd')}
              </p>
            </div>
          ))}
        </div>

        {/* Time Slots Grid (Mock static for view) */}
        <div className="flex-1 overflow-y-auto relative">
          {loading ? (
             <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10 text-gray-500">
               Carregando agenda...
             </div>
          ) : null}

          {Array.from({ length: 12 }).map((_, i) => {
            const hour = i + 9; // 9:00 to 20:00
            return (
              <div key={hour} className="grid grid-cols-8 border-b border-gray-100 min-h-[80px] group">
                <div className="text-center text-xs text-gray-400 font-medium py-2 border-r border-gray-100 bg-gray-50">
                  {hour}:00
                </div>
                {Array.from({ length: 7 }).map((_, dIndex) => (
                  <div key={dIndex} className="border-r border-gray-100 last:border-0 hover:bg-primary-50/30 transition-colors p-1 relative">
                     {/* Placeholder to render any matching slot if implemented */}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
