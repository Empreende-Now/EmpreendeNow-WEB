# Usa a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências
RUN npm install

# Faz o build da aplicação
RUN npm run build --prod

# Expõe a porta do servidor Angular
EXPOSE 4200

# Inicia a aplicação Angular
CMD ["npm", "start"]
