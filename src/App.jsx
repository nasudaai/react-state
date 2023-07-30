import { useState } from 'react'
import Counter from './counter'

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('hi');
  if (isSent) {
    return <h1>Your message is on it way</h1>
  }
  console.log(message);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Form />
      <Counter />
    </>
  )
} 
