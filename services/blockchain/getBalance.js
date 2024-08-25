const { llgContract } = require("../../config/blockchain")
const BigNumber = require('bignumber.js');

module.exports = async function (address) {
    try {
        let data = await llgContract.methods.balanceOf(address).call()
        const balance = new BigNumber(data) / new BigNumber(10 ** 9)
        console.log(balance)
        return balance
    } catch (error) {
        throw new Error(error)
    }
}

