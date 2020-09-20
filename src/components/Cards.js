import React, {useEffect, useContext,useState} from 'react';
import LoginContext from "../context/loginContext";

export default function Cards({ url }) {
    const [cards, setCards] = useState('')
    const [loading, setLoading] = useState(true)
    const { state } = useContext(LoginContext)
    useEffect(() => {
      let token = 'jwt ' + state.token;
      console.log(token)
      fetch(url, {
        method: "GET",
        headers: {
          'Authorization': token,
        }
      })
        .then(res => res.json())
        .then(result => { setCards(result); setLoading(false); console.log(result) })
        .catch(err => { console.log(err); setLoading(false) });
    }, [url]);
    return "hi";
    // return <div>{loading ? 'Loading ....' : cards.map(card => (<div><span>item name: {card.item_name}</span>{' ==== '}<span>quantity: {card.quantity}</span></div>))}</div>;
  }
