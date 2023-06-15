import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({ messages }: any) {
  const randomMessage = (): any => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [greeting, setGreeting] = useState<string>(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
