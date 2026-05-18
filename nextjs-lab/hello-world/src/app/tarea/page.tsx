'use client';

import { useEffect, useState } from 'react';

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
};

const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Laptop HP', categoria: 'Tecnología', precio: 2500 },
  { id: 2, nombre: 'Mouse Logitech', categoria: 'Tecnología', precio: 80 },
  { id: 3, nombre: 'Teclado Mecánico', categoria: 'Tecnología', precio: 250 },
  { id: 4, nombre: 'Camiseta Polo', categoria: 'Ropa', precio: 60 },
  { id: 5, nombre: 'Pantalón Jean', categoria: 'Ropa', precio: 120 },
  { id: 6, nombre: 'Zapatillas Nike', categoria: 'Ropa', precio: 320 },
  { id: 7, nombre: 'Pan integral', categoria: 'Alimentos', precio: 8 },
  { id: 8, nombre: 'Leche entera 1L', categoria: 'Alimentos', precio: 5 },
  { id: 9, nombre: 'Manzanas (1kg)', categoria: 'Alimentos', precio: 7 },
];

export default function TareaPage() {
  const [categoria, setCategoria] = useState<string>('Todas');
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(PRODUCTOS);

  const categorias = ['Todas', ...Array.from(new Set(PRODUCTOS.map((p) => p.categoria)))];

  useEffect(() => {
    if (categoria === 'Todas') {
      setProductosFiltrados(PRODUCTOS);
    } else {
      setProductosFiltrados(PRODUCTOS.filter((p) => p.categoria === categoria));
    }
  }, [categoria]);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos (CSR)</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-4 py-2 rounded ${
              categoria === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-gray-600">
        Mostrando <strong>{productosFiltrados.length}</strong> producto(s) — categoría:{' '}
        <strong>{categoria}</strong>
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map((producto) => (
          <li
            key={producto.id}
            className="border rounded p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{producto.nombre}</h2>
            <p className="text-sm text-gray-500">{producto.categoria}</p>
            <p className="mt-2 font-bold text-blue-600">S/ {producto.precio.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
