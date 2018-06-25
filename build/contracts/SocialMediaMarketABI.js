export const SocialMediaMarketABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "items",
        "outputs": [
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "adv_address",
                "type": "address"
            },
            {
                "name": "inf_address",
                "type": "address"
            },
            {
                "name": "status",
                "type": "int8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint64"
            }
        ],
        "name": "withdraw",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint64"
            }
        ],
        "name": "payback",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint64"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "adv_address",
                "type": "address"
            },
            {
                "name": "inf_address",
                "type": "address"
            }
        ],
        "name": "initiateEscrow",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "uint64"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "adv_address",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "inf_address",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_time",
                "type": "uint256"
            }
        ],
        "name": "InitiatedEscrow",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "uint64"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_person",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_time",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "id",
                "type": "uint64"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_person",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_time",
                "type": "uint256"
            }
        ],
        "name": "Payback",
        "type": "event"
    }
];