# Magickbase Platform API

## Usage with tRPC

```ts
import { TRPCRouter } from '@magickbase/p';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import SuperJSON from 'superjson';

const client = createTRPCClient<TRPCRouter>({
  links: [
    httpBatchLink({
      url: `https://api-endpoint.domain/api/trpc`,
      transformer: SuperJSON,
      headers: {
        Authorization: `Bearer <my-token>`,
      },
    }),
  ],
});
```

It is recommended to use tRPC and TypeScript to interact with the platform API for a better development experience

![](./assets/p-client.gif)

## Import this Repo

```json
{
  "dependencies": {
    "@magickbase/p": "github:magickbase/platform-api"
  }
}
```
