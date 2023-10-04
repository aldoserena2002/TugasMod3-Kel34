// src/Counter.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    // useEffect akan dijalankan setiap kali komponen di-render atau nilai count berubah.
    // Di sini, kita memeriksa apakah nilai count adalah bilangan genap atau ganjil.
    setIsEven(count == 10);
  }, [count]); // [count] adalah array dependensi, useEffect akan dijalankan jika nilai di dalamnya berubah.

  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>{isEven ? 'Sudah Sepuluh' : 'Kelompok 34'}</p>

      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  );
};

export default Counter;
