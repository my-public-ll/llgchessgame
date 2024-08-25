const { Web3 } = require('web3');

const abi = require("./LLG.abi.json")

var config = require('config');

const web3 = new Web3(config.get("blockchain.rpc"))

module.exports = {
    llgContract: new web3.eth.Contract(abi, config.get("blockchain.llgcontract"))
}