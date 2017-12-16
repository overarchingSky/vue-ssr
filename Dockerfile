FROM daocloud.io/library/node:8.4.0-onbuild

# Create app directory
RUN mkdir -p /vue-ssr
WORKDIR /vue-ssr

# Bundle app source
COPY ./.nuxt /home/Service
RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]