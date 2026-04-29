import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  BookOpen, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Info, 
  X,
  Gift,
  Star,
  Users
} from 'lucide-react';
import { 
  ORDINAL_THEORY, 
  ORDINAL_QUESTIONS, 
  GOR_AVATAR, 
  GAYANE_AVATAR,
  GIFT_IMAGE
} from './constants';

type GameState = 'start' | 'theory' | 'playing' | 'end';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [activePlayer, setActivePlayer] = useState<'Gor' | 'Gayane'>('Gor');
  const [scores, setScores] = useState({ Gor: 0, Gayane: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showGift, setShowGift] = useState(false);

  const shuffledQuestions = useMemo(() => {
    return [...ORDINAL_QUESTIONS].sort(() => Math.random() - 0.5);
  }, [gameState === 'playing' && currentIndex === 0]);

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleChoice = (choice: string) => {
    if (feedback) return;
    
    const isCorrect = choice === currentQuestion.target;
    if (isCorrect) {
      setScores(s => ({ ...s, [activePlayer]: s[activePlayer] + 1 }));
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }

    setTimeout(() => {
      if (currentIndex < shuffledQuestions.length - 1) {
        setCurrentIndex(i => i + 1);
        setActivePlayer(activePlayer === 'Gor' ? 'Gayane' : 'Gor');
        setFeedback(null);
      } else {
        setGameState('end');
      }
    }, 1500);
  };

  const restart = () => {
    setGameState('start');
    setCurrentIndex(0);
    setScores({ Gor: 0, Gayane: 0 });
    setFeedback(null);
    setShowGift(false);
    setActivePlayer('Gor');
  };

  const winner = scores.Gor > scores.Gayane ? 'Gor' : scores.Gayane > scores.Gor ? 'Gayane' : 'Both';

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="flex gap-4 md:gap-12 mb-12">
               <motion.div whileHover={{ scale: 1.1 }} className="relative">
                  <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] bg-slate-800">
                     <img src={GOR_AVATAR} className="w-full h-full object-cover" alt="Gor" />
                  </div>
                  <div className="absolute -bottom-2 inset-x-0 bg-blue-600 rounded-full text-[10px] md:text-sm font-black py-1 uppercase tracking-widest">ԳՈՌ</div>
               </motion.div>
               <div className="flex items-center text-3xl md:text-6xl font-black text-slate-700 italic">VS</div>
               <motion.div whileHover={{ scale: 1.1 }} className="relative">
                  <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)] bg-slate-800">
                     <img src={GAYANE_AVATAR} className="w-full h-full object-cover" alt="Gayane" />
                  </div>
                  <div className="absolute -bottom-2 inset-x-0 bg-pink-600 rounded-full text-[10px] md:text-sm font-black py-1 uppercase tracking-widest">ԳԱՅԱՆԵ</div>
               </motion.div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400">
              ՄԵԾ <br/> ՄՐՑՈՒՅԹ
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.4em] mb-12 text-xs md:text-sm">Իսպաներենի Կարգային Թվեր • 20 Փուլ</p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button 
                onClick={() => setGameState('theory')}
                className="flex-1 py-5 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all uppercase"
              >
                <BookOpen className="w-5 h-5 text-blue-400" />
                Թեորիա
              </button>
              <button 
                onClick={() => setGameState('playing')}
                className="flex-1 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl uppercase"
              >
                <Play className="w-6 h-6 fill-current" />
                Սկսել
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'theory' && (
          <motion.div 
            key="theory"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-12"
          >
            <div className="w-full max-w-3xl bg-slate-900/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
               <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                        <Info className="w-6 h-6 text-white" />
                     </div>
                     <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight">Կարգային Թվեր</h2>
                  </div>
                  <button onClick={() => setGameState('start')} className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <X className="w-8 h-8 text-slate-500" />
                  </button>
               </div>

               <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-2xl mb-10">
                  <h3 className="text-blue-400 font-black mb-2 uppercase text-sm tracking-widest">Կարևոր Կանոն</h3>
                  <p className="text-slate-300 font-medium italic">
                    "Primero" և "Tercero" բառերը դառնում են **"Primer"** և **"Tercer"**՝ արական սեռի եզակի գոյականներից առաջ:
                    <br/><span className="text-white font-bold opacity-80 mt-2 block">Օրինակ՝ El primer libro, el tercer piso.</span>
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ORDINAL_THEORY.map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:border-blue-500/50 transition-colors">
                       <div className="flex items-center gap-3">
                          <span className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-lg text-xs font-black text-blue-400">{item.number}</span>
                          <span className="font-black text-lg">{item.ordinal}</span>
                       </div>
                       <span className="text-xs font-bold text-slate-500 uppercase italic">{item.translation}</span>
                    </div>
                  ))}
               </div>

               <button 
                 onClick={() => setGameState('playing')}
                 className="w-full mt-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-600/20"
               >
                 ՊԱՏՐԱՍՏ ԵՄ ՄՐՑՈՒՅԹԻՆ <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 min-h-screen flex flex-col p-4 md:p-8"
          >
            {/* Scoreboard */}
            <div className="flex justify-between items-center bg-slate-900/60 backdrop-blur-2xl p-4 md:p-6 rounded-[2rem] border border-white/10 mb-8 max-w-5xl w-full mx-auto shadow-2xl">
               <div className={`flex items-center gap-4 transition-all duration-500 ${activePlayer === 'Gor' ? 'scale-110' : 'opacity-30 grayscale'}`}>
                 <img src={GOR_AVATAR} className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-blue-500 shadow-lg shadow-blue-500/20" />
                 <div>
                    <div className="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-widest">ԳՈՌ</div>
                    <div className="text-2xl md:text-5xl font-black">{scores.Gor}</div>
                 </div>
               </div>

               <div className="flex flex-col items-center">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Փուլ</div>
                  <div className="bg-white/10 px-6 py-2 rounded-full border border-white/20">
                     <span className="text-xl md:text-3xl font-black tracking-tighter">
                        {currentIndex + 1} <span className="text-slate-500">/</span> {shuffledQuestions.length}
                     </span>
                  </div>
               </div>

               <div className={`flex items-center gap-4 transition-all duration-500 text-right ${activePlayer === 'Gayane' ? 'scale-110' : 'opacity-30 grayscale'}`}>
                 <div>
                    <div className="text-[10px] md:text-xs font-black text-pink-400 uppercase tracking-widest">ԳԱՅԱՆԵ</div>
                    <div className="text-2xl md:text-5xl font-black">{scores.Gayane}</div>
                 </div>
                 <img src={GAYANE_AVATAR} className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-pink-500 shadow-lg shadow-pink-500/20" />
               </div>
            </div>

            {/* Question Area */}
            <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
               <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    className="w-full flex flex-col items-center"
                  >
                     <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white/10 shadow-2xl relative group">
                        <img src={currentQuestion.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Context" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                           <p className="text-slate-300 font-bold italic text-sm md:text-lg mb-1">{currentQuestion.translation}</p>
                        </div>
                     </div>

                     <div className="w-full text-center mb-10">
                        <h2 className="text-3xl md:text-6xl font-black leading-tight italic tracking-tighter">
                          "{currentQuestion.prompt.split('___').map((part, i) => (
                            <React.Fragment key={i}>
                              {part}
                              {i === 0 && <span className="text-blue-400 border-b-4 border-blue-400/30 px-2 mx-1">___</span>}
                            </React.Fragment>
                          ))}"
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                        {currentQuestion.choices.map(choice => (
                          <button
                            key={choice}
                            onClick={() => handleChoice(choice)}
                            disabled={!!feedback}
                            className={`py-6 md:py-8 rounded-3xl font-black text-2xl md:text-3xl transition-all border-b-8 transform active:scale-95 ${
                              feedback === 'correct' && choice === currentQuestion.target
                                ? 'bg-emerald-500 border-emerald-800 text-white scale-105'
                                : feedback === 'incorrect' && choice === choice
                                ? 'bg-rose-500 border-rose-800 text-white translate-y-1'
                                : 'bg-slate-900 border-slate-700 hover:bg-slate-800'
                            }`}
                          >
                            {choice}
                          </button>
                        ))}
                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Feedback Overlay */}
               <AnimatePresence>
                  {feedback && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${feedback === 'correct' ? 'bg-emerald-500/80' : 'bg-rose-500/80'} backdrop-blur-md`}
                    >
                       <div className="text-center">
                          {feedback === 'correct' ? (
                             <div className="animate-bounce">
                                <CheckCircle2 className="w-32 h-32 text-white mx-auto mb-4" />
                                <h3 className="text-6xl font-black uppercase text-white italic">Հիանալի!</h3>
                                <p className="text-2xl text-white/80 font-bold mt-2 uppercase">+1 Միավոր {activePlayer}-ին</p>
                             </div>
                          ) : (
                             <div>
                                <AlertCircle className="w-32 h-32 text-white mx-auto mb-4" />
                                <h3 className="text-4xl font-black uppercase text-white mb-2">Սխալ Է!</h3>
                                <p className="text-2xl text-white font-bold italic uppercase underline decoration-2 underline-offset-8">
                                   Ճիշտը՝ {currentQuestion.target}
                                </p>
                             </div>
                          )}
                       </div>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </motion.div>
        )}

        {gameState === 'end' && (
          <motion.div 
            key="end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6"
          >
             {!showGift ? (
                <div className="bg-slate-900/40 backdrop-blur-2xl p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)] text-center max-w-4xl w-full">
                  <div className="flex justify-center mb-10">
                     <Trophy className="w-32 h-32 text-yellow-400 animate-bounce" />
                  </div>
                  
                  <h2 className="text-6xl md:text-8xl font-black mb-4 uppercase italic tracking-tighter">ՄՐՑՈՒՅԹՆ ԱՎԱՐՏՎԵՑ!</h2>
                  
                  <div className="grid grid-cols-2 gap-6 md:gap-12 mb-16 mt-16">
                     <div className={`p-8 rounded-[2.5rem] border-4 transition-all ${scores.Gor > scores.Gayane ? 'border-yellow-400 bg-yellow-400/10 scale-110 shadow-[0_0_40px_rgba(250,204,21,0.2)]' : 'border-white/5 opacity-50'}`}>
                        <img src={GOR_AVATAR} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500" />
                        <div className="text-xl font-black text-blue-400">ԳՈՌ</div>
                        <div className="text-5xl md:text-7xl font-black mt-2">{scores.Gor}</div>
                        {scores.Gor > scores.Gayane && <div className="text-xs font-black text-yellow-400 mt-4 uppercase tracking-[0.2em]">ՀԱՂԹՈՂ</div>}
                     </div>
                     <div className={`p-8 rounded-[2.5rem] border-4 transition-all ${scores.Gayane > scores.Gor ? 'border-yellow-400 bg-yellow-400/10 scale-110 shadow-[0_0_40px_rgba(250,204,21,0.2)]' : 'border-white/5 opacity-50'}`}>
                        <img src={GAYANE_AVATAR} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-pink-500" />
                        <div className="text-xl font-black text-pink-400">ԳԱՅԱՆԵ</div>
                        <div className="text-5xl md:text-7xl font-black mt-2">{scores.Gayane}</div>
                        {scores.Gayane > scores.Gor && <div className="text-xs font-black text-yellow-400 mt-4 uppercase tracking-[0.2em]">ՀԱՂԹՈՂ</div>}
                     </div>
                  </div>

                  <div className="flex flex-col gap-4">
                     <button 
                        onClick={() => setShowGift(true)}
                        className="w-full py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4 group"
                     >
                        <Gift className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                        ԲԱՑԵԼ ՆՎԵՐԸ
                     </button>
                     <button 
                        onClick={restart}
                        className="w-full py-6 bg-white/5 text-white rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-4"
                     >
                        <RotateCcw className="w-6 h-6" />
                        ՆՈՐԻՑ
                     </button>
                  </div>
                </div>
             ) : (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                   animate={{ opacity: 1, scale: 1, rotate: 0 }}
                   className="text-center p-6 flex flex-col items-center"
                >
                   <div className="relative mb-12">
                      <div className="absolute -inset-8 bg-blue-500 rounded-full blur-[80px] opacity-50 animate-pulse" />
                      <div className="w-64 h-64 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                         <img src={GIFT_IMAGE} className="w-full h-full object-cover" alt="The Prize" />
                      </div>
                      <div className="absolute -top-6 -right-6 bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center shadow-xl rotate-12 z-20">
                         <Star className="w-10 h-10 text-white fill-current" />
                      </div>
                   </div>
                   
                   <h2 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 uppercase italic tracking-tighter mb-4">ՇՆՈՐՀԱՎՈՐՈՒՄ ԵՆՔ!</h2>
                   <p className="text-2xl md:text-3xl font-black text-white/80 uppercase">
                      Ահա հաղթողի նվերը! 🎁
                   </p>
                   {winner !== 'Both' && (
                      <p className="text-xl font-bold text-blue-400 mt-2 uppercase tracking-widest">
                         {winner}-ը այսօր լավագույնն էր:
                      </p>
                   )}

                   <button 
                     onClick={restart}
                     className="mt-12 px-12 py-5 bg-white text-slate-950 rounded-full font-black text-xl hover:scale-110 transition-all shadow-xl uppercase italic ring-8 ring-white/10"
                   >
                     Վերադառնալ
                   </button>
                </motion.div>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
