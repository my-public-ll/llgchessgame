# TEST

BSC TESTNET CONTRACT: (0x4691F60c894d3f16047824004420542E4674E621)[https://bscscan.com/address/0x4691f60c894d3f16047824004420542e4674e621]

SERVER: 13.214.68.247

PORT: 8050

API: /play/balance/{address}

    - return code 400 Bad request if {address} is not a valid address
    - return code 200 and object {balance: {balance}}

What I did:

    - Add blockchain config: config/blockchain.js
    - Add blockchain service: services/blockchain/getBalance.js
    - Logic: route (work like controller) -> call service
