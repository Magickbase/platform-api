import * as _trpc_server from '@trpc/server';
import * as _trpc_server_unstable_core_do_not_import from '@trpc/server/unstable-core-do-not-import';
import { z } from 'zod';

declare const appRouter: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
    ctx: any;
    meta: object;
    errorShape: {
        data: {
            zodError: z.typeToFlattenedError<any, string> | null;
            code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        message: string;
        code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
    rgbpp: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: {
            data: {
                zodError: z.typeToFlattenedError<any, string> | null;
                code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        /**
         * List of the basic asset infomation, including details like name, symbol, icon, etc.
         */
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
        /**
         * A list of the number of RGB++ assets issued with the timestamp.
         */
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
        /**
         * A list of the holder count of RGB++ assets with the timestamp.
         */
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
        /**
         * The entire market cap of RGB++ assets
         */
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
        errorShape: {
            data: {
                zodError: z.typeToFlattenedError<any, string> | null;
                code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: _trpc_server_unstable_core_do_not_import.TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        /**
         * Basic asset infomation, including details like name, symbol, icon, etc.
         */
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
        /**
         * List of the basic asset infomation, including details like name, symbol, icon, etc.
         */
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
        /**
         * The latest market data for the asset, including price(in USD), total/circulating supply, market cap, etc
         */
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
        /**
         * The holder list of the asset
         */
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
        /**
         * The transaction hashes of the asset
         */
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
type TRPCRouter = typeof appRouter;

export type { TRPCRouter };
