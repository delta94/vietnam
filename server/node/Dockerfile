# A node:14.8.0 box
FROM node:14.8.0

# Who(m) to blame if nothing works
LABEL maintainer "Hieu <hieumdoan@gmail.com>"

# Clear cache
ARG CACHEBUST=1

# Set NODE_ENV to production
ENV NODE_ENV production

# Set WORKDIR
RUN mkdir -p /var/server/app
WORKDIR /var/server/app

# Copy contents of local folder to `WORKDIR`
COPY dist /var/server/app
COPY package.json /var/server/app/package.json
COPY yarn.lock /var/server/app/yarn.lock

RUN ls /var/server/app

# Install dependencies (if any) in package.json
RUN yarn install --ignore-engines

# expose port from container so host can access $PORT
EXPOSE $PORT

# start the app on load
CMD ["npm", "start"]