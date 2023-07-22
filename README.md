This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Cloudflare

To benifit from Cloudflare CDN deploy you nextjs app to the cloudflare pages and workers at the edge and use the server side rendering follow the [official documentation]().
We can use CircleCI to build nextjs app and deploy it to the cloudflare pages using the following command:

```shell

curl --request POST \
  --url https://circleci.com/api/v2/project/gh/siemah/ecommerce-at-edge/pipeline \
  --header 'Circle-Token: CCIPAT_EfYGBR3fS4KuAJrMPZEjkz_2246d017a261b8762ab8f90398280dc66243a1e0' \
  --header 'content-type: application/json' \
  --data '{"branch":"circleci-project-setup","parameters":{"cloudflare_account_id": "<your cloudflare accound id>", "cloudflare_api_token":"<change this with you api token>", "name":"<change it with your project name>"}}'

```

For more details check:

- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/#get-credentials-from-cloudflare)
- [CircleCI doc](https://circleci.com/docs/configuration-reference) and its [REST API](https://circleci.com/docs/api/v2/index.html)
- [Nextjs docs](https://nextjs.org/docs).