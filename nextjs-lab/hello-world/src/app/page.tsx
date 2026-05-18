'use client';

import { useState } from 'react';

export default function CSRPage() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  const actualizarHora = () => {
    setHora(new Date().toLocaleTimeString());
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Renderizado en el Cliente (CSR)</h1>
      <p suppressHydrationWarning>Hora actual: {hora}</p>
      <button
        onClick={actualizarHora}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Actualizar hora
      </button>
    </main>
  );
}
