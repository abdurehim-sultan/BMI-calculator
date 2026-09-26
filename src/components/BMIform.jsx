import React, { useState } from 'react';
import { Scale, Ruler, Target } from 'lucide-react';

export default function BMIForm({ onCalculate }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    onCalculate({ weight: parseFloat(weight), height: parseFloat(height), goal });
    setWeight('');
    setHeight('');
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit} class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
      <h2 class="text-lg font-semibold text-slate-800 mb-2">Log New Day</h2>
      
      <div>
        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Weight (kg)</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Scale class="w-5 h-5" />
          </span>
          <input
            type="number"
            step="0.1"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="72.5"
            class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Height (cm)</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Ruler class="w-5 h-5" />
          </span>
          <input
            type="number"
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="175"
            class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Intentional Goal / Focus</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Target class="w-5 h-5" />
          </span>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g., Build endurance, dynamic mobility"
            class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
      >
        Analyze Metric Entry
      </button>
    </form>
  );
}
