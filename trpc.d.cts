import * as openapi_fetch from 'openapi-fetch';
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
    address: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
    }, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
        historyAsset: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
                recentDays?: number | undefined;
            };
            output: {
                date: string;
                value: string;
            }[];
        }>;
        historyTransactionCount: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
                recentMonths?: number | undefined;
            };
            output: {
                count: number;
                month: string;
            }[];
        }>;
        overview: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
            };
            output: {
                volume: string;
                received: string;
                sent: string;
                transactions: number;
            };
        }>;
        liveCells: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
                pageSize?: number | undefined;
                cursor?: string | undefined;
            };
            output: {
                data: {
                    amount: string;
                    tokenInfo: {
                        symbol: string | null;
                        id: string;
                        layer: number;
                        parentId: string | null;
                        name: string;
                        totalSupply: bigint | null;
                        decimals: number | null;
                        description: string | null;
                        icon: string | null;
                        keywords: string | null;
                        public: boolean;
                        firstFoundBlock: string | null;
                        firstMintAt: Date | null;
                    } | {
                        symbol: string | null;
                        id: string;
                        decimals: number | null;
                        icon: string | null;
                    } | null;
                    token: string;
                    blockHeight: number;
                    outPoint: string;
                    capacity: string;
                }[];
                hasNext: boolean;
                lastCursor: string;
            };
        }>;
        transactions: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
                orderBy?: ("asc" | "desc" | "time" | "asset" | "change")[] | undefined;
                asset?: string | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                chain?: "CKB" | "BTC" | undefined;
            };
            output: {
                data: {
                    network: "CKB" | "BTC";
                    txHash: string;
                    time: Date;
                    blockNumber: number;
                    assets: {
                        symbol: string | null;
                        id: string;
                        layer: number;
                        parentId: string | null;
                        name: string;
                        totalSupply: bigint | null;
                        decimals: number | null;
                        description: string | null;
                        icon: string | null;
                        keywords: string | null;
                        public: boolean;
                        firstFoundBlock: string | null;
                        firstMintAt: Date | null;
                    }[];
                    changes: {
                        assetId: string;
                        volume: number;
                        value: string;
                    }[];
                    fromAddresses: string[];
                    toAddresses: string[];
                }[];
                pagination: {
                    page: number;
                    pageSize: number;
                    rowCount: number;
                };
            };
        }>;
        getProtocals: _trpc_server.TRPCQueryProcedure<{
            input: {
                address: string;
            };
            output: {
                type: string;
                value: string;
                key: string;
                depositVolume: string;
                compensationVolume: string;
                deposit: string;
                depositTimestamp: Date | null;
                compensation: string;
            }[];
        }>;
        getAddressAssets: _trpc_server.TRPCQueryProcedure<{
            input: string;
            output: {
                assetId: string;
                assetAmount: string;
                value: string | null;
                percentChange24h: number;
                assetInfo: {
                    symbol: string | null;
                    id: string;
                    layer: number;
                    parentId: string | null;
                    name: string;
                    totalSupply: bigint | null;
                    decimals: number | null;
                    description: string | null;
                    icon: string | null;
                    keywords: string | null;
                    public: boolean;
                    firstFoundBlock: string | null;
                    firstMintAt: Date | null;
                } | null;
            }[];
        }>;
        getAddressFirstTx: _trpc_server.TRPCQueryProcedure<{
            input: string;
            output: {
                network: string;
                txHash: string;
                time: Date;
                blockNumber: number;
                assets: ({
                    symbol?: string | null | undefined;
                    id?: string | undefined;
                    layer?: number | undefined;
                    parentId?: string | null | undefined;
                    name?: string | undefined;
                    totalSupply?: bigint | null | undefined;
                    decimals?: number | null | undefined;
                    description?: string | null | undefined;
                    icon?: string | null | undefined;
                    keywords?: string | null | undefined;
                    public?: boolean | undefined;
                    firstFoundBlock?: string | null | undefined;
                    firstMintAt?: Date | null | undefined;
                } | null)[];
            } | undefined;
        }>;
    }>>;
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
    explorer: _trpc_server_unstable_core_do_not_import.BuiltRouter<{
        ctx: any;
        meta: object;
        errorShape: _trpc_server_unstable_core_do_not_import.DefaultErrorShape;
        transformer: false;
    }, _trpc_server_unstable_core_do_not_import.DecorateCreateRouterOptions<{
        nervosDao: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: openapi_fetch.FetchResponse<{
                parameters: {
                    query?: never;
                    header: {
                        Accept: string;
                        "Content-Type": string;
                    };
                    path?: never;
                    cookie?: never;
                };
                requestBody?: never;
                responses: {
                    200: {
                        headers: {
                            [name: string]: unknown;
                        };
                        content: {
                            "application/json": {
                                data: {
                                    attributes: {
                                        average_deposit_time: string;
                                        claimed_compensation: string;
                                        claimed_compensation_changes: string;
                                        deposit_changes: string;
                                        deposit_compensation: string;
                                        depositor_changes: string;
                                        depositors_count: string;
                                        estimated_apc: string;
                                        mining_reward: string;
                                        total_deposit: string;
                                        treasury_amount: string;
                                        unclaimed_compensation: string;
                                        unclaimed_compensation_changes: string;
                                    };
                                };
                            };
                        };
                        400: {
                            headers: {
                                [name: string]: unknown;
                            };
                            content: {
                                "application/json": Record<string, never>;
                            };
                        };
                    };
                };
            }, {
                params: {
                    header: {
                        'Content-Type': string;
                        Accept: string;
                    };
                };
            }, `${string}/${string}`>;
        }>;
        nervosDaoTx: _trpc_server.TRPCQueryProcedure<{
            input: ({
                page?: number | undefined;
                pageSize?: number | undefined;
            } & {
                address?: string | undefined;
            }) | undefined;
            output: {
                data?: {
                    id?: string;
                    type?: string;
                    attributes?: {
                        is_cellbase: boolean;
                        transaction_hash?: string;
                        block_number?: string;
                        block_timestamp?: string;
                        display_inputs_count: number;
                        display_outputs_count: number;
                        display_inputs?: {
                            id?: string;
                            from_cellbase: boolean;
                            capacity?: string;
                            address_hash?: string;
                            generated_tx_hash?: string;
                            cell_index?: string;
                            cell_type?: string;
                            since?: {
                                raw?: string;
                                median_timestamp?: string;
                            };
                        }[];
                        display_outputs?: {
                            id?: string;
                            capacity?: string;
                            address_hash?: string;
                            status?: string;
                            consumed_tx_hash?: string;
                            cell_type?: string;
                        }[];
                        income?: unknown;
                    };
                }[];
                meta?: {
                    total: number;
                    page_size: number;
                };
            } | undefined;
        }>;
        daoDepositors: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: openapi_fetch.FetchResponse<{
                parameters: {
                    query?: never;
                    header: {
                        Accept: string;
                        "Content-Type": string;
                    };
                    path?: never;
                    cookie?: never;
                };
                requestBody?: never;
                responses: {
                    200: {
                        headers: {
                            [name: string]: unknown;
                        };
                        content: {
                            "application/json": {
                                data: {
                                    attributes: {
                                        address_hash: string;
                                        average_deposit_time: string;
                                        dao_deposit: string;
                                    };
                                }[];
                            };
                        };
                    };
                    400: {
                        headers: {
                            [name: string]: unknown;
                        };
                        content: {
                            "application/json": Record<string, never>;
                        };
                    };
                };
            }, {
                params: {
                    header: {
                        'Content-Type': string;
                        Accept: string;
                    };
                };
            }, `${string}/${string}`>;
        }>;
        totalDaoDepositStatistics: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: openapi_fetch.FetchResponse<{
                parameters: {
                    query?: never;
                    header: {
                        Accept: string;
                        "Content-Type": string;
                    };
                    path?: never;
                    cookie?: never;
                };
                requestBody?: never;
                responses: {
                    200: {
                        headers: {
                            [name: string]: unknown;
                        };
                        content: {
                            "application/json": {
                                data: {
                                    attributes: {
                                        created_at_unixtimestamp: string;
                                        total_dao_deposit: string;
                                        total_depositors_count: string;
                                    };
                                }[];
                            };
                        };
                    };
                    400: {
                        headers: {
                            [name: string]: unknown;
                        };
                        content: {
                            "application/json": Record<string, never>;
                        };
                    };
                };
            }, {
                params: {
                    header: {
                        'Content-Type': string;
                        Accept: string;
                    };
                };
            }, `${string}/${string}`>;
        }>;
        typeOf: _trpc_server.TRPCQueryProcedure<{
            input: string;
            output: "address" | "block" | "udt" | "bitcoin_block" | "ckb_transaction" | "lock_hash" | "type_script" | "lock_script" | "bitcoin_transaction" | "token_collection" | "token_item" | "did" | "bitcoin_address" | "fiber_graph_node" | "not_found";
        }>;
        addressBase: _trpc_server.TRPCQueryProcedure<{
            input: string;
            output: {
                balance: {
                    total: string;
                    occupied: string;
                };
                tx: {
                    count: string;
                };
            };
        }>;
        chainInfo: _trpc_server.TRPCQueryProcedure<{
            input: void;
            output: {
                txCountInLast24h: number | null;
                fees: {
                    low: number;
                    medium: number;
                    high: number;
                };
                tipBlock: {
                    number: number | null;
                };
                udtStats: {
                    holders: number | null;
                    txCountInLast24h: number | null;
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
