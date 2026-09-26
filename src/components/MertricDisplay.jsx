import React from 'react';

export default function MetricDisplay({ result }) {
  const themes = {
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    orange: "bg-orange-50 text-orange-800 border-orange-200",
    rose: "bg-rose-50 text-rose-800 border-rose-200"
  };

  return (
    <div class={`p-6 rounded-2xl border transition-all animate-fadeIn ${themes[result.colorTheme] || themes.emerald}`}>
      <div class="flex items-baseline justify-between mb-2">
        <span class="text-sm font-semibold tracking-wide uppercase opacity-70">Calculated Vector</span>
        <span class="text-3xl font-extrabold tracking-tight">{result.bmi}</span>
      </div>
      <div class="text-lg font-bold mb-1">{result.classification}</div>
      <p class="text-sm opacity-90 leading-relaxed mb-3">{result.message}</p>
      <div class="pt-3 border-t border-current/10 flex flex-wrap gap-2 text-xs font-medium">
        <span class="bg-current/10 px-2 py-1 rounded">Weight: {result.weight}kg</span>
        <span class="bg-current/10 px-2 py-1 rounded">Height: {result.height}cm</span>
        <span class="bg-current/10 px-2 py-1 rounded max-w-xs truncate">Goal: {result.goal}</span>
      </div>
    </div>
  );
}
