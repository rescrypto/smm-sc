var Big = require('bignumber.js')

function rpc(method, arg) {
    var req = {
        jsonrpc: "2.0",
        method: method,
        id: new Date().getTime()
    }
    if (arg) req.params = arg

    return new Promise((resolve, reject) => {
        web3.currentProvider.sendAsync(req, (err, result) => {
            if (err) return reject(err)
            if (result && result.error) {
                return reject(new Error("RPC Error: " + (result.error.message || result.error)))
            }
            resolve(result)
        })
    })
}

// Change block time using the rpc call "evm_setTimestamp"
// https://github.com/ethereumjs/testrpc/issues/47
web3.evm = web3.evm || {}
web3.evm.increaseTime = function(time) {
    return rpc('evm_increaseTime', [time])
}

function ifUsingTestRPC() {
    return
}

// lifted from: https://ethereum.stackexchange.com/questions/9103/how-can-you-handle-an-expected-throw-in-a-contract-test-using-truffle-and-ethere
function assertThrows (fn, args) {
    //Asserts that `fn(args)` will throw a specific type of error.
    return new Promise(
        function(resolve, reject){
            fn.apply(this, args)
                .then(() => {
                    assert(false, 'No error thrown.');
                    resolve();
                },
                (error) => {
                    var errstr = error.toString();
                    var newErrMsg = errstr.indexOf('invalid opcode') != -1;
                    var oldErrMsg = errstr.indexOf('invalid JUMP') != -1;
                    if(!newErrMsg && !oldErrMsg)
                      assert(false, 'Did not receive expected error message');
                    resolve();
                })
        })
}

// Some default values for gas
var gasAmount = 3000000
var gasPrice = 20000000
var initialDisbursement = new Big(1500000000000000000000000)
var nmr_per_week = new Big(96153846153846100000000).add(53846153)

var multiSigAddresses = ['0x54fd80d6ae7584d8e9a19fe1df43f04e5282cc43', '0xa6d135de4acf44f34e2e14a4ee619ce0a99d1e08']
