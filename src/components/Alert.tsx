'use client'

import useSWR from 'swr';

export default function Alert() {
  const dataObject = JSON.parse(localStorage.getItem('data') || '{}');
  const dataArray = [dataObject];
  console.log(dataArray)
  const coin = dataArray[0].coin
  const url = `https://api.coinbase.com/v2/prices/${coin}-USD/sell`

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.data.amount;
  };

  const { data: price, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  if (error) return <div>Error ao buscar dados</div>;
  if (!price) return <div>Carregando...</div>;

  return (
    <div>
      <h3>Active Alerts</h3>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Current Price</th>
            <th>Target Price</th>
          </tr>
        </thead>
        <tbody>
          {dataArray && dataArray.map((item: any, index: number) => (
            <tr key={index}>
              <td id="alertCoin">{item.coin} - USD</td>
              <td id="alertCurrPrice">{price}</td>
              <td id="alertPrice">{item.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
