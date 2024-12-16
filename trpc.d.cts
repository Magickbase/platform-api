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
                    id: string;
                    tags: string[];
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    icon?: string | undefined;
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
                value: number;
            };
        }>;
    }>;
    asset: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: true;
    }, {
        info: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                id: string;
                tags: string[];
                symbol?: string | undefined;
                name?: string | undefined;
                decimals?: number | undefined;
                icon?: string | undefined;
            };
        }>;
        infoList: _trpc_server.TRPCQueryProcedure<{
            input: {
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            };
            output: {
                data: {
                    id: string;
                    tags: string[];
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    icon?: string | undefined;
                }[];
                pagination: {
                    hasNext: boolean;
                };
            };
        }>;
        quote: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                holderCount: {
                    network: "ckb" | "btc" | "doge";
                    count: number;
                }[];
                txCount24h: number;
                totalSupply?: bigint | undefined;
                price?: number | undefined;
                marketCap?: number | undefined;
                volume24h?: number | undefined;
                priceChange24h?: number | undefined;
                circulatingSupply?: bigint | undefined;
                fdv?: number | undefined;
            };
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
                    usd: number;
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
