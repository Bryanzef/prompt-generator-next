'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import ProdutoCard from '@/components/ProdutoCard';
import OutputSection from '@/components/OutputSection';
import PreviewSection from '@/components/PreviewSection';
import { Produto, FormData } from '@/types';

// Dados iniciais dos produtos
const produtosIniciais: Produto[] = [
  { id: 1, nome: 'Laranja Suco', preco: 'R$ 2,99/kg' },
  { id: 2, nome: 'Banana', preco: 'R$ 2,99/kg' },
  { id: 3, nome: 'Maracujá', preco: 'R$ 5,99/kg' },
  { id: 4, nome: 'Limão', preco: 'R$ 1,99' },
  { id: 5, nome: 'Cenoura', preco: 'R$ 1,99/kg' },
  { id: 6, nome: 'Beterraba', preco: 'R$ 1,99/kg' },
];

export default function Home() {
  // Estados do formulário
  const [formData, setFormData] = useState<FormData>({
    nomeEstabelecimento: 'MERCADO E SACOLÃO TORRES',
    endereco: 'R. Luíz Gonzaga Capaverde, 1150 - Torres, RS',
    diaPromocao: 'Sábado',
    dataPromocao: new Date().toISOString().split('T')[0],
    numProdutos: 6,
    produtos: produtosIniciais,
  });

  const [prompt, setPrompt] = useState<string>('');
  const [showOutput, setShowOutput] = useState<boolean>(false);

  // Função para formatar data para formato brasileiro
  const formatDateToBrazilian = (dateString: string): string => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year.slice(-2)}`;
  };

  // Função para gerar o prompt
  const generatePrompt = () => {
    const { nomeEstabelecimento, endereco, diaPromocao, dataPromocao, numProdutos, produtos } = formData;
    const dataFormatada = formatDateToBrazilian(dataPromocao);
    const produtosAtivos = produtos.slice(0, numProdutos);

    let promptText = `# Prompt para Criação de Encarte Promocional

Crie uma imagem de encarte promocional vertical para WhatsApp com as seguintes especificações:

## 🏪 INFORMAÇÕES BÁSICAS
**Nome:** ${nomeEstabelecimento}
**Endereço:** ${endereco}
**Promoção:** Ofertas Especiais de ${diaPromocao} - ${dataFormatada}

## 🎨 ESPECIFICAÇÕES VISUAIS

### Layout Vertical:
- **Formato:** 9:16 (otimizado para celular)
- **Fundo:** Gradiente verde fresco (#2E8B57 para #32CD32) com elementos de laranja vibrante (#FF8C00)

### Estrutura da Imagem (de cima para baixo):

**1. CABEÇALHO (topo):**
- Nome "${nomeEstabelecimento}" em fonte bold, branca, centralizada
- Fundo verde com elementos decorativos (folhas, ícones de frescor)

**2. TÍTULO DA PROMOÇÃO:**
- "OFERTAS ESPECIAIS DE ${diaPromocao.toUpperCase()} - ${dataFormatada}"
- Fonte grande, bold, cor laranja (#FF8C00) com destaque visual
- Fundo branco ou com banner

**3. ÁREA DE PRODUTOS (seção principal):**
`;

    if (numProdutos === 2) {
      promptText += `
- **Produtos em linha horizontal:**
- Cada produto em um card branco com bordas arredondadas
- **Produto 1:** ${produtosAtivos[0].nome} - ${produtosAtivos[0].preco}
- **Produto 2:** ${produtosAtivos[1].nome} - ${produtosAtivos[1].preco}
- Include imagens realistas dos produtos
- Preços em fonte grande, bold, cor laranja
- Sombra suave nos cards
`;
    } else if (numProdutos === 3) {
      promptText += `
- **Produtos em linha horizontal:**
- Cada produto em um card branco com bordas arredondadas
- **Produto 1:** ${produtosAtivos[0].nome} - ${produtosAtivos[0].preco}
- **Produto 2:** ${produtosAtivos[1].nome} - ${produtosAtivos[1].preco}
- **Produto 3:** ${produtosAtivos[2].nome} - ${produtosAtivos[2].preco}
- Include imagens realistas dos produtos
- Preços em fonte grande, bold, cor laranja
- Sombra suave nos cards
`;
    } else {
      promptText += `
**Parte Superior - 3 produtos em linha horizontal:**
- Cada produto em um card branco com bordas arredondadas
- **Produto 1:** ${produtosAtivos[0].nome} - ${produtosAtivos[0].preco}
- **Produto 2:** ${produtosAtivos[1].nome} - ${produtosAtivos[1].preco}
- **Produto 3:** ${produtosAtivos[2].nome} - ${produtosAtivos[2].preco}
- Include imagens realistas dos produtos
- Preços em fonte grande, bold, cor laranja
- Sombra suave nos cards

**Parte Inferior - 3 produtos em disposição triangular:**
- Mesmo estilo visual da parte superior
- **Produto 4:** ${produtosAtivos[3].nome} - ${produtosAtivos[3].preco}
- **Produto 5:** ${produtosAtivos[4].nome} - ${produtosAtivos[4].preco}
- **Produto 6:** ${produtosAtivos[5].nome} - ${produtosAtivos[5].preco}
- Include imagens realistas dos produtos
- Preços destacados em laranja
`;
    }

    promptText += `
**4. RODAPÉ:**
- Endereço em fonte pequena mas legível
- Texto: "Ofertas válidas apenas no dia ${dataFormatada} ou enquanto durarem os estoques"
- Fundo neutro

## 🎯 ELEMENTOS ESSENCIAIS

### Cores Principais:
- Verde fresco (#2E8B57, #32CD32)
- Laranja vibrante (#FF8C00)
- Branco para contraste
- Preto/cinza escuro para textos

### Estilo Visual:
- Design moderno e limpo
- Bordas arredondadas nos elementos
- Sombras suaves para profundidade
- Tipografia sans-serif, legível
- Elementos gráficos de frescor (folhas, gotas)

### Produtos com Imagens:
- **${numProdutos} produtos selecionados com preços reais:**
${produtosAtivos.map((p) => `  - ${p.nome} - ${p.preco}`).join('\n')}
- Cards organizados em layout otimizado
- Cada produto deve have imagem realista, nome e preço destacado
- Imagens de alta qualidade, bem iluminadas

## 📱 OTIMIZAÇÃO
- Texto legível mesmo em telas pequenas
- Cores vibrantes para destaque no WhatsApp
- Layout vertical adaptado para celular
- Informações importantes na parte superior

**Objetivo:** Criar um encarte atrativo, profissional e otimizado para compartilhamento no WhatsApp que desperte interesse e transmita qualidade dos produtos do mercado.`;

    setPrompt(promptText);
    setShowOutput(true);
  };

  // Função para atualizar dados do formulário
  const handleFormChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Função para atualizar produtos
  const handleProdutoChange = (id: number, field: 'nome' | 'preco', value: string) => {
    setFormData(prev => ({
      ...prev,
      produtos: prev.produtos.map(produto =>
        produto.id === id ? { ...produto, [field]: value } : produto
      )
    }));
  };

  // Função para lidar com o submit do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generatePrompt();
  };

  return (
    <div className="container">
      <Header />
      
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>📋 Informações Básicas</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="nomeEstabelecimento">Nome do Estabelecimento:</label>
                <input
                  type="text"
                  id="nomeEstabelecimento"
                  value={formData.nomeEstabelecimento}
                  onChange={(e) => handleFormChange('nomeEstabelecimento', e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="endereco">Endereço:</label>
                <input
                  type="text"
                  id="endereco"
                  value={formData.endereco}
                  onChange={(e) => handleFormChange('endereco', e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="diaPromocao">Dia da Promoção:</label>
                <select
                  id="diaPromocao"
                  value={formData.diaPromocao}
                  onChange={(e) => handleFormChange('diaPromocao', e.target.value)}
                  required
                >
                  <option value="Segunda Feira">Segunda Feira</option>
                  <option value="Terça Feira">Terça Feira</option>
                  <option value="Quarta Feira">Quarta Feira</option>
                  <option value="Quinta Feira">Quinta Feira</option>
                  <option value="Sexta Feira">Sexta Feira</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="dataPromocao">Data da Promoção:</label>
                <input
                  type="date"
                  id="dataPromocao"
                  value={formData.dataPromocao}
                  onChange={(e) => handleFormChange('dataPromocao', e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="numProdutos">Número de Produtos:</label>
                <select
                  id="numProdutos"
                  value={formData.numProdutos}
                  onChange={(e) => handleFormChange('numProdutos', parseInt(e.target.value))}
                >
                  <option value={2}>2 Produtos</option>
                  <option value={3}>3 Produtos</option>
                  <option value={6}>6 Produtos</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>🛒 Produtos em Promoção</h2>
            <div className="produtos-grid">
              {formData.produtos.map((produto) => (
                <ProdutoCard
                  key={produto.id}
                  produto={produto}
                  isVisible={produto.id <= formData.numProdutos}
                  onProdutoChange={handleProdutoChange}
                />
              ))}
            </div>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn">
              🎨 Gerar Prompt do Encarte
            </button>
          </div>
        </form>

        <OutputSection prompt={prompt} isVisible={showOutput} />
        
        <PreviewSection />
        
        <div className="btn-container">
          <a 
            href="https://chat.openai.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn" 
            style={{ background: 'linear-gradient(135deg, #5865F2, #7289DA)' }}
          >
            💬 Ir para o ChatGPT
          </a>
        </div>
      </div>
    </div>
  );
}
