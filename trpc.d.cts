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
        coinList: _trpc_server.TRPCQueryProcedure<{
            input: {
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            } | undefined;
            output: {
                data: {
                    info: {
                        symbol: string | null;
                        id: string;
                        name: string | null;
                        decimals: number | null;
                        icon: string | null;
                        tags: string[];
                    };
                    quote: {
                        totalSupply: string | null;
                        holderCount: {
                            network: "unknown" | "ckb" | "btc" | "doge";
                            count: number;
                        }[];
                        price: string | null;
                        marketCap: string | null;
                        volume24h: string | null;
                        circulatingSupply: string | null;
                        fdv: string | null;
                        priceChange24h: number | null;
                        txCount24h: number;
                    };
                }[];
                pagination: {
                    hasNext: boolean;
                    total?: number | undefined;
                };
            };
        }>;
        transactionCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                status: {
                    timestamp: number;
                };
                network: "unknown" | "ckb" | "btc" | "doge";
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
                network: "unknown" | "ckb" | "btc" | "doge";
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
                info: {
                    symbol: string | null;
                    id: string;
                    name: string | null;
                    decimals: number | null;
                    icon: string | null;
                    tags: string[];
                };
                quote: {
                    totalSupply: string | null;
                    holderCount: {
                        network: "unknown" | "ckb" | "btc" | "doge";
                        count: number;
                    }[];
                    price: string | null;
                    marketCap: string | null;
                    volume24h: string | null;
                    circulatingSupply: string | null;
                    fdv: string | null;
                    priceChange24h: number | null;
                    txCount24h: number;
                };
            } | null;
        }>;
        quote: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                totalSupply: string | null;
                holderCount: {
                    network: "unknown" | "ckb" | "btc" | "doge";
                    count: number;
                }[];
                price: string | null;
                marketCap: string | null;
                volume24h: string | null;
                circulatingSupply: string | null;
                fdv: string | null;
                priceChange24h: number | null;
                txCount24h: number;
            } | null;
        }>;
        topHolders: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                value: string;
                address: string;
                amount: string;
                network: "unknown" | "ckb" | "btc" | "doge";
                percentage: number;
            }[] | null;
        }>;
        addressHoldAssets: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
            };
            output: {
                assets: {
                    info: {
                        symbol: string | null;
                        id: string;
                        name: string | null;
                        decimals: number | null;
                        icon: string | null;
                    };
                    value: string;
                    amount: string;
                    price: string | null;
                    priceChange24h: number | null;
                }[];
                balance: string;
            } | null;
        }>;
        transactionList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
                pageSize?: number | undefined;
                pageIndex?: number | undefined;
            };
            output: {
                data: {
                    network: "unknown" | "ckb" | "btc" | "doge";
                    txHash: string;
                }[];
                pagination: {
                    hasNext: boolean;
                    total?: number | undefined;
                };
            };
        }>;
    }>;
    temp: {
        btc: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
            ctx: any;
            meta: object;
            errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
            transformer: true;
        }, {
            address: _trpc_server.TRPCQueryProcedure<{
                input: string;
                output: {
                    address: string;
                    chain: {
                        sats: number;
                        tx: {
                            count: number;
                        };
                    };
                    mempool: {
                        sats: number;
                        tx: {
                            count: number;
                        };
                    };
                };
            }>;
            transaction: _trpc_server.TRPCQueryProcedure<{
                input: string;
                output: {
                    blockHash: string;
                    txid: string;
                    blockHeight: number;
                    size: number;
                    fee: number;
                    confirmed: boolean;
                    vin: {
                        txid: string;
                        vout: number;
                        isCoinbase: boolean;
                        scriptsig_asm: string;
                        prevout: {
                            value: number;
                            address: string;
                            txid: string;
                            vout: number;
                        };
                    }[];
                    vout: {
                        value: number;
                        address: string;
                        scriptpubkey_address: string;
                        scriptpubkey_asm: string;
                        scriptpubkey_type: string;
                        spent: {
                            status: {
                                block_hash: string;
                                confirmed: boolean;
                                block_height: number;
                                block_time: number;
                            };
                            txid: string;
                            vin: number;
                        } | null;
                    }[];
                };
            }>;
        }>;
    };
}>>;
type AppRouter = typeof appRouter;

export type { AppRouter as TRPCRouter };
