# Start from golang base image
FROM golang:alpine as builder

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
COPY . .

RUN ls /var/server/app

# expose port from container so host can access $PORT
EXPOSE $PORT

# start the app on load
CMD ["./vietnamapis"]