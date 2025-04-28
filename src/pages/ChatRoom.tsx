import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
}

export default function ChatRoom({ onBack }: { onBack: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("chatMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = { id: Date.now(), text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h2 className="text-xl font-bold">SportifyNCU Chat Room</h2>
        <button className="bg-white text-blue-500 px-3 py-1 rounded" onClick={onBack}>Back</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2 flex">
            <div className="bg-blue-200 p-2 rounded-lg max-w-xs">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="flex p-4 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l-lg"
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
