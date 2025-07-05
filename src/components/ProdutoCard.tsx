'use client';

import React from 'react';
import { Produto } from '@/types';

interface ProdutoCardProps {
  produto: Produto;
  isVisible: boolean;
  onProdutoChange: (id: number, field: 'nome' | 'preco', value: string) => void;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ 
  produto, 
  isVisible, 
  onProdutoChange 
}) => {
  if (!isVisible) return null;

  return (
    <div className="produto-card">
      <h3>Produto {produto.id}</h3>
      <div className="form-group">
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={produto.nome}
          onChange={(e) => onProdutoChange(produto.id, 'nome', e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Preço:</label>
        <input
          type="text"
          value={produto.preco}
          onChange={(e) => onProdutoChange(produto.id, 'preco', e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default ProdutoCard; 