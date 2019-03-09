// src/contracts/tictactoe.js

import abi from '../contracts/tictactoe.abi.json';

const CONTRACT_ADDRESS = "0x61b5729410f79c3bcd3da4cfbe8558da4cc4b037";

export default function (web3) {
    return web3.eth.Contract(abi, CONTRACT_ADDRESS)
}