const { stakingPricedLP } = require("../helper/staking");
const ethers = require("ethers")
const { config } = require('@defillama/sdk/build/api');
const { getProvider } = require("@defillama/sdk/build/general")

if (!getProvider("astar"))
    config.setProvider("astar", new ethers.providers.StaticJsonRpcProvider(
        "https://rpc.astar.network:8545",
        {
            name: "astar",
            chainId: 592,
        }
    ));

const VAL = "0xe1af4d744e2a66cd07c474bed167960be872fcd9"

const stakingContract = "0x99a2278ab93Ee6F590a87D8F37a16EE8f53F97Cc"

const arthswapValUsdcPool = "0x56Ce6643eDD621EcD904d9b6C9e88745A125AF6d"

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: "TVL is calculated by getting value of staked VAL using Arthswap DEX value of VAL.",
    astar: {
        tvl: () => ({}),
        staking: stakingPricedLP(stakingContract, VAL, "astar", arthswapValUsdcPool, "usd-coin", true, 6)
    },
} 