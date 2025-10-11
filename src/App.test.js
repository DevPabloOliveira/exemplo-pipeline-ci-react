import { render, screen } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica se o link 'Learn React' é renderizado (teste padrão)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Teste 2: NOVO TESTE PRÁTICO
// Verifica se o texto da demonstração está presente na tela.
test('deve renderizar o texto da demonstração corretamente', () => {
  // 1. Renderiza o componente App em um ambiente de teste
  render(<App />);

  // 2. Procura por um elemento que contenha o texto da mudança.
  // O '/ ... /i' é uma expressão regular que busca pelo texto sem se importar com maiúsculas/minúsculas.
  const textoDaDemonstracao = screen.getByText(/Demonstração do pipeline de CI\/CD/i);

  // 3. Verifica se o elemento com o texto foi encontrado no documento.
  expect(textoDaDemonstracao).toBeInTheDocument();
});