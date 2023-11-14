import useSWR from 'swr';

interface iProps {
  coinName: string;
}

const CoinPrice: React.FC<iProps> = (props) => {
  const { data: coinData, error } = useSWR(
    `https://api.coinbase.com/v2/prices/${props.coinName}-USD/sell`,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return parseFloat(data.data.amount).toFixed(2);
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 300000,
    }
  );

  if (error) {
    return <div>Error fetching coin price</div>;
  }

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return <div>{coinData}</div>;
};

export default CoinPrice;
