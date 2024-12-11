import * as _trpc_server from '@trpc/server';
import * as _trpc_server_unstable_core_do_not_import from '@trpc/server/unstable-core-do-not-import';

declare const appRouter: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
    ctx: any;
    meta: object;
    errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
    transformer: false;
}, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
    rgbpp: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
    }, {
        /**
         * List of the basic asset infomation, including details like name, symbol, icon, etc.
         */
        infoList: _trpc_server.TRPCQueryProcedure<{
            input: {
                pageSize?: number;
                pageIndex?: number;
            };
            output: {
                data?: {
                    symbol?: string;
                    id?: string;
                    name?: string;
                    decimals?: number;
                    icon?: string;
                    tags?: string[];
                }[];
                pagination?: {
                    hasNext?: boolean;
                };
            };
        }>;
        /**
         * A list of the number of RGB++ assets issued with the timestamp.
         */
        issueCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status?: {
                    timestamp?: number;
                };
                count?: number;
                assetType?: "xudt" | "dob";
            }[];
        }>;
        /**
         * A list of the holder count of RGB++ assets with the timestamp.
         */
        holderCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status?: {
                    timestamp?: number;
                };
                network?: "ckb" | "btc" | "doge";
                count?: number;
            }[];
        }>;
        /**
         * The entire market cap of RGB++ assets
         */
        marketCap: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status?: {
                    timestamp?: number;
                };
                value?: number;
            };
        }>;
    }>;
    asset: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
    }, {
        /**
         * Basic asset infomation, including details like name, symbol, icon, etc.
         */
        info: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId?: string;
            };
            output: {
                symbol?: string;
                id?: string;
                name?: string;
                decimals?: number;
                icon?: string;
                tags?: string[];
            };
        }>;
        /**
         * List of the basic asset infomation, including details like name, symbol, icon, etc.
         */
        infoList: _trpc_server.TRPCQueryProcedure<{
            input: {
                pageSize?: number;
                pageIndex?: number;
            };
            output: {
                data?: {
                    symbol?: string;
                    id?: string;
                    name?: string;
                    decimals?: number;
                    icon?: string;
                    tags?: string[];
                }[];
                pagination?: {
                    hasNext?: boolean;
                };
            };
        }>;
        /**
         * The latest market data for the asset, including price(in USD), total/circulating supply, market cap, etc
         */
        quote: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId?: string;
            };
            output: {
                totalSupply?: bigint;
                holderCount?: {
                    network?: "ckb" | "btc" | "doge";
                    count?: number;
                }[];
                price?: number;
                marketCap?: number;
                volume24h?: number;
                priceChange24h?: number;
                circulatingSupply?: bigint;
                fdv?: number;
                txCount24h?: number;
            };
        }>;
        /**
         * The holder list of the asset
         */
        holderList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId?: string;
                pageSize?: number;
                pageIndex?: number;
            };
            output: {
                data?: {
                    value?: bigint;
                    address?: string;
                    network?: "ckb" | "btc" | "doge";
                    usd?: number;
                    percentage?: number;
                }[];
                pagination?: {
                    hasNext?: boolean;
                };
            };
        }>;
        /**
         * The transaction hashes of the asset
         */
        transactionList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId?: string;
                pageSize?: number;
                pageIndex?: number;
            };
            output: {
                data?: {
                    network?: "ckb" | "btc" | "doge";
                    txHash?: string;
                }[];
                pagination?: {
                    hasNext?: boolean;
                };
            };
        }>;
    }>;
}>>;
type AppRouter = typeof appRouter;

export type { AppRouter };
