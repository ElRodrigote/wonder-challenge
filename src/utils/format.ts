const FIRST_TWO_RELEVANT_DECIMALS = /^-?\d*\.?0*\d{0,2}/;

const getFirstTwoRelevantDecimals = (balance: string) =>
  parseFloat(balance).toFixed(20).match(FIRST_TWO_RELEVANT_DECIMALS)?.[0];

export const formatBalance = (balance: string = "0") =>
  parseFloat(balance) % 1 === 0
    ? parseInt(balance)
    : getFirstTwoRelevantDecimals(balance);
