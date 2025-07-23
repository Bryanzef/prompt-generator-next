'use client';

import { Produto } from '@/types';
import React from 'react';

interface ProdutoCardProps {
  produto: Produto;
  isVisible: boolean;
  onProdutoChange: (id: number, field: 'nome' | 'preco' | 'unidade', value: string) => void;
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
      <div className="form-group">
        <label>Unidade:</label>
        <select
          value={produto.unidade}
          onChange={(e) => onProdutoChange(produto.id, 'unidade', e.target.value)}
          required
        >
          <option value="unidade">Unidade</option>
          <option value="kg">Kg</option>
        </select>
      </div>
    </div>
  );
};

export default ProdutoCard; 
