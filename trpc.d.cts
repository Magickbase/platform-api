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
    transformer: false;
}, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
    rgbpp: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
    }, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
        coinList: _trpc_server.TRPCQueryProcedure<{
            input: {
                page?: number | undefined;
                pageSize?: number | undefined;
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
                            network: "ckb" | "btc" | "unknown" | "doge";
                            count: number;
                        }[];
                        price: string | null;
                        marketCap: string | null;
                        volume24h: string | null;
                        priceChange24h: number | null;
                        circulatingSupply: string | null;
                        fdv: string | null;
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
                network: "ckb" | "btc" | "unknown" | "doge";
                count: number;
                status: {
                    timestamp: number;
                };
            }[];
        }>;
        addressTransactions: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
            } & {
                page?: number | undefined;
                pageSize?: number | undefined;
            };
            output: {
                data: {
                    txHash: string;
                    time: string;
                    network: string;
                    blockNumber: string;
                    changes: {
                        assetId: string;
                        value: string;
                        volume: string;
                    }[];
                    fromAddresses: string[];
                    toAddresses: string[];
                    assets: ({} | null)[];
                }[];
                pagination: {
                    page: number;
                    pageSize: number;
                    rowCount: number;
                };
            };
        }>;
        issueCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                count: number;
                status: {
                    timestamp: number;
                };
                assetType: "xudt" | "dob";
            }[];
        }>;
        holderCountRecords: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                network: "ckb" | "btc" | "unknown" | "doge";
                count: number;
                status: {
                    timestamp: number;
                };
            }[];
        }>;
        marketCap: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                value: string;
                status: {
                    timestamp: number;
                };
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
                        network: "ckb" | "btc" | "unknown" | "doge";
                        count: number;
                    }[];
                    price: string | null;
                    marketCap: string | null;
                    volume24h: string | null;
                    priceChange24h: number | null;
                    circulatingSupply: string | null;
                    fdv: string | null;
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
                    network: "ckb" | "btc" | "unknown" | "doge";
                    count: number;
                }[];
                price: string | null;
                marketCap: string | null;
                volume24h: string | null;
                priceChange24h: number | null;
                circulatingSupply: string | null;
                fdv: string | null;
                txCount24h: number;
            } | null;
        }>;
        topHolders: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId: string;
            };
            output: {
                address: string;
                amount: string;
                value: string;
                network: "ckb" | "btc" | "unknown" | "doge";
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
                    amount: string;
                    value: string;
                    price: string | null;
                    priceChange24h: number | null;
                }[];
                balance: string;
            } | null;
        }>;
        transactionList: _trpc_server.TRPCQueryProcedure<{
            input: {
                assetId?: string | undefined;
            } & {
                page?: number | undefined;
                pageSize?: number | undefined;
            };
            output: {
                data: {
                    network: "ckb" | "btc" | "unknown" | "doge";
                    txHash: string;
                    timestamp: number;
                    btc: {
                        txid: string | null;
                    };
                    ckbTransaction: {
                        outputs: {
                            index: number;
                            txHash: string;
                            capacity: string;
                            lock: {
                                codeHash: string;
                                hashType: string;
                                args: string;
                            };
                            cellType: string;
                            xudtInfo: {
                                symbol: string | null;
                                amount: string;
                                decimal: number | null;
                            } | null;
                        }[];
                    };
                    direction?: "on" | "off" | null | undefined;
                }[];
                pagination: {
                    hasNext: boolean;
                    total?: number | undefined;
                };
            };
        }>;
    }>>;
    temp: {
        btc: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
            ctx: any;
            meta: object;
            errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
            transformer: false;
        }, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
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
                input: {
                    txid: string;
                };
                output: {
                    blockHash: string;
                    blockHeight: number;
                    size: number;
                    txid: string;
                    fee: number;
                    confirmed: boolean;
                    vin: {
                        txid: string;
                        vout: number;
                        isCoinbase: boolean;
                        scriptsig_asm: string;
                        prevout: {
                            address: string;
                            value: number;
                            txid: string;
                            vout: number;
                        };
                    }[];
                    vout: {
                        address: string;
                        value: number;
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
            chainInfo: _trpc_server.TRPCQueryProcedure<{
                input: void;
                output: {
                    difficulty: number;
                    fee: {
                        fastestFee: number;
                        halfHourFee: number;
                        hourFee: number;
                        minimumFee: number;
                    };
                    rgbpp: {
                        holdersCount?: number | undefined;
                        txCountInLast24h?: number | undefined;
                    };
                    tipBlockHeight: number;
                    tipBlockHash: string;
                };
            }>;
            addressBase: _trpc_server.TRPCQueryProcedure<{
                input: string;
                output: {
                    satoshis: number;
                    txCount: number;
                    pendingSatoshis: number;
                };
            }>;
        }>>;
    };
}>>;
type AppRouter = typeof appRouter;

export type { AppRouter as TRPCRouter };
