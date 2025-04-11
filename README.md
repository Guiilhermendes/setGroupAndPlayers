# Ignite Teams

Ignite Teams é um aplicativo para gerenciamento de grupos e times, permitindo que você organize pessoas em diferentes turmas e times.

## Funcionalidades

- Criar grupos e times.
- Adicionar e remover pessoas de grupos e times.
- Listar grupos e times existentes.
- Persistência de dados utilizando AsyncStorage.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento e execução de aplicativos React Native.
- **Styled Components**: Biblioteca para estilização de componentes.
- **AsyncStorage**: Biblioteca para armazenamento local.
- **React Navigation**: Navegação entre telas.

## Estrutura do Projeto

O projeto segue a seguinte estrutura de pastas:

```
src/
├── @types/          # Tipos globais do projeto
├── assets/          # Recursos estáticos (imagens, ícones, etc.)
├── components/      # Componentes reutilizáveis
├── routes/          # Configuração de rotas
├── screens/         # Telas do aplicativo
├── storage/         # Funções de persistência de dados
├── theme/           # Configuração de temas e estilos
├── utils/           # Utilitários e classes auxiliares
```

## Pré-requisitos

- Node.js
- Expo CLI
- Emulador Android/iOS ou dispositivo físico

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Guiilhermendes/setGroupAndPlayers
   cd setGroupAndPlayers
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm start
   ```

4. Abra o aplicativo no emulador ou dispositivo físico utilizando o QR Code gerado pelo Expo.

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm android`: Inicia o aplicativo no emulador Android.
- `npm ios`: Inicia o aplicativo no emulador iOS.
- `npm web`: Inicia o aplicativo no navegador.

---
Desenvolvido com 💙 por [Guilherme Mendes].
