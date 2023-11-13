// Componente para buscar o preço de uma única moeda
import useSWR from 'swr';
import { iCoin } from '@/pages/api/coins';

interface iProps {
  coin: iCoin
}

export default function CoinPrice(props: iProps) {

  const coinString = props.coin.name || props.coin;
  const url = `https://api.coinbase.com/v2/prices/${coinString}-USD/sell`;

  const fetcher = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.data.amount > props.coin.target) console.log(`${props.coin.name} bateu seu valor`)
    const formatAmount = parseFloat(data.data.amount).toFixed(2)
    return formatAmount;
  };

  const { data: price, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  if (error) {
    return <div>There is no {props.coin.name}</div>
  }

  return <div>{price || 'Loading...'}</div>
}