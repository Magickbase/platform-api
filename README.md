# Magickbase Web3 Platform API

## Usage with TRPC

```ts
import { TRPCRouter } from "@magickbase/web3platform"
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import SuperJSON from 'superjson'

const client = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `https://api-endpoint.domain/api/trpc`,
            transformer: SuperJSON,
            headers: {
                "Authorization": `Bearer <my-token>`
            }
        }),
    ],
})
```