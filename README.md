## Getting Started

## Initial Setup

In each repository directory, run the following commands:

```bash
     cd lolo-frontend
     cp .env.example .env.development
     cp .env.example .env.production
```

### Development Environment

To start the development environment, run:

```bash
docker compose -f  docker-compose.dev.yml up --build
```

This will host the application in port 3000.
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Note: To stop and remove docker container

```bash
docker compose -f  docker-compose.dev.yml down
```

### Production Environment

To start the production environment, run:

```bash
docker compose -f  docker-compose.prod.yml up --build
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Note: To stop and remove docker container

```bash
docker compose -f  docker-compose.prod.yml down
```

# Next JS Configuration

## Building static files

In your next.config.js file, There is set the output to export. This configuration is used to create an out folder when running the build command. This is particularly useful for static site generation (SSG).

```bash
// next.config.js
module.exports = {
  output: 'export',
};
```

When you run npm run build, Next.js will generate a static site and output the files into the out directory.

## Redirects Configuration

We have configured redirects in our next.config.js file. This setup ensures that specific routes are redirected to new destinations, allowing for control over URL modifications and proper navigation.

```bash

    // next.config.js
    module.exports = {
      async redirects() {
        return [
          // Basic redirect
          {
            source: "/about",
            destination: "/",
            permanent: true,
          },
          // Wildcard path matching
          {
            source: "/blog/:slug",
            destination: "/news/:slug",
            permanent: true,
          },
        ];
      },
    };
```

Basic Redirect: Redirects the /about page to the home page (/). This is useful for controlling access to the /about page.

Wildcard Path Matching: Redirects any /blog/:slug path to /news/:slug. This allows you to handle dynamic routes, ensuring that blog posts are accessible under the /news path instead.

By combining these configurations, you ensure that your Next.js application generates static files correctly and handles route redirects efficiently, providing better control over your site's navigation.
