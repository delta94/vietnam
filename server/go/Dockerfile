# STAGE 1
FROM golang:alpine as builder

# Who(m) to blame if nothing works
LABEL maintainer "Hieu <hieumdoan@gmail.com>"

# Clear cache
ARG CACHEBUST=1

# Set WORKDIR
RUN apk update && apk add --no-cache git
RUN mkdir /build
ADD . /build/
WORKDIR /build

# Build
RUN go get -d -v
RUN go build -o main .

# STAGE 2
FROM alpine
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/ /app/
WORKDIR /app

# expose port from container so host can access $PORT
EXPOSE $PORT

# start the app on load and set GO_ENV to production
CMD ["GO_ENV=production ./main"]
