async function addToken() {
    if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
   
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
        alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
        return;
      }
    }

const tokenAddress = '0xDaE6d9662C4904026AC311a5fDc8917FDc51971A';
const tokenSymbol = 'UNI-V2';
const tokenDecimals = 18;
const tokenImage = 'https://pbs.twimg.com/media/F4hmpxbWAAEptQX?format=png&name=small';

try {
  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
  const wasAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress, // The address of the token.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
        decimals: tokenDecimals, // The number of decimals in the token.
        image: tokenImage, // A string URL of the token logo.
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Could not add');
  }
} catch (error) {
  console.log(error);
}
}
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addToken');
    button.addEventListener('click', addToken);
  });