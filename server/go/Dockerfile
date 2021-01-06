# Start from golang base image
FROM golang:alpine as builder

# Who(m) to blame if nothing works
LABEL maintainer "Hieu <hieumdoan@gmail.com>"

# Clear cache
ARG CACHEBUST=1

# Install git.
# Git is required for fetching the dependencies.
RUN apk update && apk add --no-cache 

# Set the current working directory inside the container
RUN mkdir -p /app
WORKDIR /app

# Copy go mod and sum files 
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and the go.sum files are not changed 
RUN go mod download

# Copy the source from the current directory to the working Directory inside the container 
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main ./cmd

# Start a new stage from scratch
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /root/

# Copy the Pre-built binary file from the previous stage.
COPY --from=builder /app/main .
COPY --from=builder /app/.env .
COPY --from=builder /app/templates ./templates
COPY --from=builder /app/pkg ./pkg
COPY --from=builder /app/migrations ./migrations
# COPY --from=builder /app/tls ./tls


# Expose port to the outside world
EXPOSE $PORT

#Command to run the executable
CMD [ "./main" ]