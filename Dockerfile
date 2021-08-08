#download node
FROM node:14.15

# confirm installation (using RUN is the same as running in the terminal)
RUN node -v
RUN npm -v

# Globally install webpack in the container
RUN npm install webpack -g

# Set up a WORKDIR for application in the container
WORKDIR /app

# We dont want to reinstall our package.json & package-lock.json every time... so we copy it over from our existing docker image cache
COPY package*.json ./

# npm install to create a node_modules in the container (this is just like the terminal command)
RUN npm install

# copy over source code
COPY . .

EXPOSE 6666