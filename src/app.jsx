import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import BMIForm from './components/BMIForm';
import MetricDisplay from './components/MetricDisplay';
import HistoryLog from './components/HistoryLog';
import { Heart } from 'lucide-react';

export default function App() {
  const [entries, setEntries] = useLocalStorage('bmi_tracker_entries', []);
  const [currentResult, setCurrentResult] = useState(null);

  const handleCalculate = (data) => {
    const heightInMeters = data.height / 100;
    const bmiValue = parseFloat((data.weight / (heightInMeters * heightInMeters)).toFixed(1));
    
    let classification = "Balanced Range";
    let message = "Your weight aligns soundly with typical physiological baseline structures.";
    let colorTheme = "emerald";

    if (bmiValue < 18.5) {
      classification = "Nourishment Focused";
      message = "Prioritizing nutrient density and strength preservation might be supportive.";
      colorTheme = "amber";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      classification = "Stamina Checked";
      message = "Focusing on metabolic health marker stability can offer excellent longevity.";
      colorTheme = "orange";
    } else if (bmiValue >= 29.9) {
      classification = "Vitals Monitored";
      message = "Partnering with healthcare allies can help create an optimized lifestyle frame.";
      colorTheme = "rose";
    }

    const newEntry = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      weight: data.weight,
      height: data.height,
      bmi: bmiValue,
      goal: data.goal || "Maintain Vitality",
      classification,
      colorTheme
    };

    setEntries([newEntry, ...entries]);
    setCurrentResult(newEntry);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
    if (currentResult && currentResult.id === id) {
      setCurrentResult(null);
    }
  };

  return (
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <header class="text-center mb-10">
          <div class="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl text-emerald-600 mb-4">
            <Heart class="w-8 h-8" fill="currentColor" />
          </div>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mindful Metrics Framework
          </h1>
          <p class="mt-2 text-md text-slate-500 max-w-md mx-auto">
            A compassionate tool focusing on holistic trend accountability rather than stark, cold numbers.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div class="space-y-6">
            <BMIForm onCalculate={handleCalculate} />
            {currentResult && <MetricDisplay result={currentResult} />}
          </div>
          <div>
            <HistoryLog entries={entries} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
