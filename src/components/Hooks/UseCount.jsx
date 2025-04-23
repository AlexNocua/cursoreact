import React, { useEffect, useState } from 'react';

export const UseCount = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prev => {
        if (prev < 20) return prev + 1;
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <h2>Contador: {contador}</h2>
    </div>
  );
};


