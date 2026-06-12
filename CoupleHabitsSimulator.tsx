import { useState } from 'react';
import {
  Heart,
  Sparkles,
  BookOpen,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkle
} from 'lucide-react';
import CoupleHabitsSimulator from './components/CoupleHabitsSimulator';
import TechProposalDoc from './components/TechProposalDoc';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'specs'>('simulator');

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#FDF8F6] text-slate-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      
      {/* Decorative colored glow backdrop elements in theme tones */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/20 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pink-200/20 dark:bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Header Block / Brand Core with DuoHabit touch */}
        <header className="mb-8 border-b border-orange-100 dark:border-zinc-900 pb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white/70 dark:bg-zinc-950/60 p-6 rounded-[32px] border-2 border-slate-100/80 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-1 px-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-mono text-[10px] font-bold rounded-full flex items-center gap-1.5 shadow-xs uppercase tracking-wider">
                <Heart className="w-3 h-3 fill-white text-white animate-pulse" />
                Atomic Habits Co-Op Framework
              </div>
            </div>
            
            <h1 className="text-3xl font-black text-slate-900 dark:text-zinc-50 tracking-tight mt-3 flex items-center gap-1.5">
              <span>Vínculo</span>
              <span className="text-orange-500 font-extrabold">.</span>
              <span className="text-lg font-light text-slate-400">Hábitos en Pareja</span>
            </h1>
            <p className="text-sm text-slate-500 dark:text-zinc-450 mt-1 max-w-2xl leading-relaxed">
              Conceptualización del producto, diseño de experiencia de usuario y arquitectura de datos lógica para el desarrollo rápido de hábitos colaborativos basados en las 4 leyes de James Clear.
            </p>
          </div>

          {/* Core Navigation Controls */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'simulator'
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md'
                  : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Demo de Alta Fidelidad
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md'
                  : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Arquitectura de Requisitos
            </button>
          </div>
        </header>

        {/* Content Split: Tab Rendering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Workspace content */}
          <div className="lg:col-span-8">
            {activeTab === 'simulator' ? (
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-zinc-900/60 p-5 rounded-2xl border border-orange-100/55 dark:border-zinc-850">
                  <h3 className="text-lg font-black text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                    <Sparkle className="w-4 h-4 text-orange-500 fill-orange-500" />
                    Simulador Interactivo de la Aplicación Móvil
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Experimenta cómo se sincronizan las metas cotidianas en pareja. Puedes alternar la vista entre <strong>Mateo</strong> y <strong>Sofía</strong> en la barra superior para registrar hábitos diarios en las tres categorías obligatorias, reclamar recompensas acumuladas y ensayar recordatorios atómicos.
                  </p>
                </div>
                
                <CoupleHabitsSimulator />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-zinc-900/60 p-5 rounded-2xl border border-orange-100/55 dark:border-zinc-850">
                  <h3 className="text-lg font-black text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-500" />
                    Especificación de Arquitectura de Datos y Stack
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Diccionario lógico y fundamentos computacionales para el desarrollo productivo.
                  </p>
                </div>
                
                <TechProposalDoc />
              </div>
            )}
          </div>

          {/* Right Sidebar: Product Concept & Atomic Habits Hookups */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Box 1: Product Strategy with theme styles */}
            <div className="bg-white dark:bg-zinc-900 border-2 border-slate-100 dark:border-zinc-850 p-6 rounded-[32px] shadow-sm">
              <h4 className="text-sm font-black text-slate-900 dark:text-zinc-100 flex items-center gap-2 border-b border-orange-50 dark:border-zinc-800 pb-3 mb-3 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                Filosofía de Negocio
              </h4>
              
              <ul className="space-y-4">
                <li className="flex gap-2.5 text-xs text-slate-600 dark:text-zinc-405">
                  <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-zinc-200 block">Metas en Pareja Autonómas</strong>
                    Espacios compartidos bajo un mismo CoupleID pero manteniendo registros individuales independientes para proteger la autonomía personal.
                  </div>
                </li>

                <li className="flex gap-2.5 text-xs text-slate-600 dark:text-zinc-405">
                  <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-zinc-200 block">Sintonía de Progreso Diaria</strong>
                    Gráficos unificados inspirados en anillos de salud, incentivando a que ambos miembros coordinen sus hábitos para alcanzar el 100% de sintonía diaria.
                  </div>
                </li>

                <li className="flex gap-2.5 text-xs text-slate-600 dark:text-zinc-405">
                  <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-zinc-200 block">Garantía de Refuerzo Positivo</strong>
                    Sistema de recompensas ("Rewards Core") donde los puntos de hábitos individuales se cambian exclusivamente por compromisos afectivos o tareas del otro.
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 2: Habit Loops Applied */}
            <div className="bg-gradient-to-br from-orange-400/5 to-pink-500/5 dark:from-orange-500/10 dark:to-pink-500/10 border-2 border-orange-100/40 dark:border-zinc-800/80 p-6 rounded-[32px]">
              <h4 className="text-sm font-black text-slate-900 dark:text-zinc-100 flex items-center gap-2 pb-3 mb-3 border-b border-orange-400/15">
                <Clock className="w-4 h-4 text-orange-500" />
                El Bucle de Hábito Atómico
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-[10px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-850 dark:text-zinc-200 block">Señal (Cue)</strong>
                    Hacerlo Obvio. El diseño asocia siempre el inicio del hábito con una acción diaria ineludible de la rutina de pareja.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-pink-550 bg-gradient-to-tr from-orange-400 to-pink-500 text-white flex items-center justify-center font-black text-[10px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-850 dark:text-zinc-200 block">Anhelo (Craving)</strong>
                    Hacerlo Atractivo. Visualizar el premio acumulando puntos y la recompensa romántica acordada.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-[10px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-850 dark:text-zinc-200 block">Respuesta (Response)</strong>
                    Hacerlo Sencillo. Micro-hábitos de inicio veloz (regla de los 2 minutos) con interfaces de registros de un solo toque en el smartphone.
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-[10px] flex-shrink-0">
                    4
                  </div>
                  <div>
                    <strong className="text-slate-850 dark:text-zinc-200 block">Recompensa (Reward)</strong>
                    Hacerlo Satisfactorio. Sincronización remota, felicitaciones instantáneas en el chat interno de apoyo y canjes mutuos divertidos.
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Technical summary */}
            <div className="p-5 bg-slate-900 text-zinc-300 rounded-[32px] space-y-2 font-mono text-[10px] border-2 border-slate-850">
              <span className="text-[9px] font-bold text-slate-450 uppercase tracking-widest block mb-1">
                METADATOS DEL PROYECTO
              </span>
              <div className="flex justify-between">
                <span>Versión Lógica:</span>
                <span className="text-orange-400 font-bold">v1.2.0-Alpha</span>
              </div>
              <div className="flex justify-between">
                <span>Plataforma Target:</span>
                <span className="text-pink-400 font-bold">iOS, Android (Flutter)</span>
              </div>
              <div className="flex justify-between">
                <span>Motor de Datos:</span>
                <span className="text-teal-400 font-bold">Firebase Realtime</span>
              </div>
              <div className="flex justify-between grid-cols-2">
                <span>Modo de Diseño:</span>
                <span className="text-indigo-400 font-bold">Vibrant Palette (Duo)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-orange-100 dark:border-zinc-905 text-center text-xs text-slate-400 dark:text-zinc-500 pb-8">
          <p>© {currentYear} Vínculo Inc. Propuestas arquitectónicas de hábitos atómicos para parejas.</p>
        </footer>

      </div>
    </div>
  );
}
