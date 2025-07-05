# 🏪 Gerador de Encarte Promocional - Torres

Sistema automatizado para gerar prompts de encarte promocional para o Mercado e Sacolão Torres, desenvolvido com Next.js 15, TypeScript e React.

## ✨ Funcionalidades

- **Formulário Intuitivo**: Interface moderna e responsiva para inserção de dados
- **Geração Automática**: Cria prompts detalhados para criação de encartes promocionais
- **Múltiplos Produtos**: Suporte para 2, 3 ou 6 produtos em promoção
- **Layout Otimizado**: Design específico para WhatsApp (formato 9:16)
- **Cópia Fácil**: Botão para copiar o prompt gerado diretamente para a área de transferência
- **Responsivo**: Funciona perfeitamente em desktop e mobile

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **React Hooks** - Gerenciamento de estado moderno
- **CSS Modules** - Estilos modulares e organizados
- **ESLint** - Linting e formatação de código

## 📦 Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone [URL_DO_REPOSITORIO]
cd prompt-generator-next
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse o projeto:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎯 Como Usar

1. **Preencha as informações básicas:**
   - Nome do estabelecimento
   - Endereço
   - Dia da promoção
   - Data da promoção
   - Número de produtos

2. **Insira os detalhes dos produtos:**
   - Nome de cada produto
   - Preço de cada produto

3. **Gere o prompt:**
   - Clique em "🎨 Gerar Prompt do Encarte"
   - O sistema criará um prompt detalhado

4. **Copie e use:**
   - Clique em "📋 Copiar Prompt"
   - Cole no ChatGPT ou outra IA para gerar a imagem

## 🏗️ Estrutura do Projeto

```
prompt-generator-next/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   ├── Header.tsx           # Cabeçalho
│   │   ├── ProdutoCard.tsx      # Card de produto
│   │   ├── OutputSection.tsx    # Seção de output
│   │   └── PreviewSection.tsx   # Seção de instruções
│   └── types/
│       └── index.ts             # Definições de tipos
├── public/                      # Arquivos estáticos
└── package.json
```

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

1. **Conecte seu repositório:**
   - Faça push do código para GitHub/GitLab
   - Conecte na Vercel

2. **Configure o projeto:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy automático:**
   - A Vercel detectará automaticamente as configurações
   - Cada push para main gerará um novo deploy

### Deploy Manual

```bash
# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificar código com ESLint

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- **Desktop**: Layout completo com grid de produtos
- **Tablet**: Layout adaptado com colunas reduzidas
- **Mobile**: Layout em coluna única otimizado para toque

## 🎨 Design System

### Cores Principais
- **Verde Fresco**: #2E8B57, #32CD32
- **Laranja Vibrante**: #FF8C00
- **Branco**: #FFFFFF
- **Fundo Escuro**: #0A0A0A

### Tipografia
- **Fonte Principal**: Inter, -apple-system, BlinkMacSystemFont
- **Fonte Monospace**: Courier New (para prompts)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais oficiais do Mercado e Sacolão Torres.

---

**Desenvolvido com ❤️ para o Mercado e Sacolão Torres**
