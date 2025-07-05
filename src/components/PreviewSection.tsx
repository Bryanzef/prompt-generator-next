'use client';

import React from 'react';

const PreviewSection: React.FC = () => {
  return (
    <div className="preview-section">
      <h2>📱 Como Usar</h2>
      <div className="preview-info">
        <p><strong>1.</strong> Preencha as informações básicas e selecione o número de produtos</p>
        <p><strong>2.</strong> Insira os detalhes dos produtos</p>
        <p><strong>3.</strong> Clique em "Gerar Prompt do Encarte"</p>
        <p><strong>4.</strong> Copie o prompt gerado</p>
      </div>
    </div>
  );
};

export default PreviewSection; 