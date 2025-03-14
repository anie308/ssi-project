import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";

export const web3auth = new Web3Auth({
  clientId: "BE19aThFj-yQENoJKskvBcI8IQK6P0HQvAfK1dgPNdnArd9Q_KY_yj20sbjTse-Oh341H-p_EB2_4C7v6kFg2lw", // Get this from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x1", // Ethereum mainnet
    rpcTarget: "https://rpc.ankr.com/eth",
  },
  web3AuthNetwork: "cyan",
});

export const initWeb3Auth = async () => {
  try {
    await web3auth.initModal();
    return web3auth;
  } catch (error) {
    console.error("Error initializing Web3Auth:", error);
    throw error;
  }
};