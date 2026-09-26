import React from 'react';
import { Trash2, Calendar } from 'lucide-react';

export default function HistoryLog({ entries, onDelete }) {
  const badgeClasses = {
    emerald: "bg-emerald-100 text-emerald-800",
    amber: "bg-amber-100 text-amber-800",
    orange: "bg-orange-100 text-orange-800",
    rose: "bg-rose-100 text-rose-800"
  };

  return (
    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full max-h-[580px] flex flex-col">
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-slate-800">Historical Journal</h2>
        <p class="text-xs text-slate-400 mt-0.5">Tracks long-term patterns safely stored in state cache.</p>
      </div>

      {entries.length === 0 ? (
        <div class="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-xl p-8 text-center text-slate-400">
          <Calendar class="w-8 h-8 mb-2 stroke-1" />
          <p class="text-sm">No recorded historical instances available yet.</p>
        </div>
      ) : (
        <div class="flex-1 overflow-y-auto space-y-3 pr-1">
          {entries.map((entry) => (
            <div
              key={entry.id}
              class="group flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-all"
            >
              <div class="space-y-1.5 min-w-0 flex-1 pr-3">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm font-bold text-slate-700">BMI: {entry.bmi}</span>
                  <span class={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeClasses[entry.colorTheme] || badgeClasses.emerald}`}>
                    {entry.classification}
                  </span>
                  <span class="text-[11px] text-slate-400 ml-auto whitespace-nowrap">{entry.date}</span>
                </div>
                <div class="text-xs text-slate-500 flex flex-wrap gap-x-2 gap-y-0.5">
                  <span>w: <strong class="text-slate-700">{entry.weight}kg</strong></span>
                  <span>h: <strong class="text-slate-700">{entry.height}cm</strong></span>
                  <span class="italic text-slate-400 truncate max-w-[180px]">“{entry.goal}”</span>
                </div>
              </div>

              <button
                onClick={() => onDelete(entry.id)}
                aria-label="Delete metric log"
                class="text-slate-300 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition-colors focus:outline-none"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
