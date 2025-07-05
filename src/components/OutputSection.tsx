'use client';

import React, { useState } from 'react';

interface OutputSectionProps {
  prompt: string;
  isVisible: boolean;
}

const OutputSection: React.FC<OutputSectionProps> = ({ prompt, isVisible }) => {
  const [copyText, setCopyText] = useState('📋 Copiar Prompt');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyText('✅ Copiado!');
      setTimeout(() => {
        setCopyText('📋 Copiar Prompt');
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = prompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopyText('✅ Copiado!');
      setTimeout(() => {
        setCopyText('📋 Copiar Prompt');
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="output-section">
      <h2>📝 Prompt Gerado</h2>
      <div className="output-content">{prompt}</div>
      <button className="copy-btn" onClick={copyToClipboard}>
        {copyText}
      </button>
    </div>
  );
};

export default OutputSection; 