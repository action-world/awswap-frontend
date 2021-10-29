FROM registry.iwanz.me/library/nginx:latest

COPY ./build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
