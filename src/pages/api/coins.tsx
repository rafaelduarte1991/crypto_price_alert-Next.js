export interface iCoin {
  id: number
  name: string
  target: number
}

export default function handler(req:any, res:any) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    const coinsJSON = localStorage.getItem('coins')
    if (coinsJSON) {
      const coins = JSON.parse(coinsJSON) || []
      res.status(200).json({ coins })
    }
  }
}
