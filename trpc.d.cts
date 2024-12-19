import * as _trpc_server from '@trpc/server';
import * as _trpc_server_unstable_core_do_not_import from '@trpc/server/unstable-core-do-not-import';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
declare const appRouter: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
    ctx: any;
    meta: object;
    errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
    transformer: true;
}, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
    rgbpp: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: true;
    }, {
        infoList: _trpc_server.TRPCQueryProcedure<{
            input: {
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            };
            output: {
                data: {
                    symbol: string | null;
                    id: string;
                    name: string | null;
                    decimals: number | null;
                    icon: string | null;
                    tags: string[];
                }[];
                pagination: {
                    hasNext: boolean;
                };
            };
        }>;
        transactionCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status: {
                    timestamp: number;
                };
                network: "ckb" | "btc" | "doge";
                count: number;
            }[];
        }>;
        issueCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status: {
                    timestamp: number;
                };
                count: number;
                assetType: "xudt" | "dob";
            }[];
        }>;
        holderCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status: {
                    timestamp: number;
                };
                network: "ckb" | "btc" | "doge";
                count: number;
            }[];
        }>;
        marketCap: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status: {
                    timestamp: number;
                };
                value: string;
            };
        }>;
        info: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                symbol: string | null;
                id: string;
                name: string | null;
                decimals: number | null;
                icon: string | null;
                tags: string[];
            } | null;
        }>;
        quote: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                totalSupply: bigint | null;
                holderCount: {
                    network: "ckb" | "btc" | "doge";
                    count: number;
                }[];
                price: string | null;
                marketCap: string | null;
                volume24h: string | null;
                priceChange24h: number | null;
                circulatingSupply: bigint | null;
                fdv: string | null;
                txCount24h: number;
            } | null;
        }>;
        holderList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            };
            output: {
                data: {
                    value: bigint;
                    address: string;
                    network: "ckb" | "btc" | "doge";
                    usd: string;
                    percentage: number;
                }[];
                pagination: {
                    hasNext: boolean;
                };
            };
        }>;
        transactionList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            };
            output: {
                data: {
                    network: "ckb" | "btc" | "doge";
                    txHash: string;
                }[];
                pagination: {
                    hasNext: boolean;
                };
            };
        }>;
    }>;
}>>;
type AppRouter = typeof appRouter;

export type { AppRouter as TRPCRouter };
