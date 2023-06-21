export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
// `https://api.coingecko.com/api/v3/coins/${id}`;

// console.log(SingleCoin("bitcoin"));
export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
