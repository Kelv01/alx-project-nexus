import React, { useState } from "react";
import { Search, Send, MoreVertical } from "lucide-react";
import Button from "../../components/common/Button";

interface Message {
  id: string;
  sender: "me" | "other";
  text: string;
  time: string;
}

interface Thread {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  tourContext: string;
}

const mockThreads: Thread[] = [
  {
    id: "1",
    name: "Sarah Mwangi (Guide)",
    avatar: "/guides/joecalih.jpg",
    lastMessage:
      "I can confirm the booking for your group. Looking forward to the safari!",
    time: "2h ago",
    unread: 2,
    tourContext: "Masai Mara Big Five",
  },
  {
    id: "2",
    name: "Adventure Seekers Group",
    avatar: "/loginImage.jpg",
    lastMessage: "Does anyone need help with visa arrangements?",
    time: "5h ago",
    unread: 0,
    tourContext: "Serengeti Migration",
  },
  {
    id: "3",
    name: "John Kamau (Guide)",
    avatar: "/guides/masaimale.jpg",
    lastMessage: "The migration is spectacular right now. Perfect timing!",
    time: "1d ago",
    unread: 1,
    tourContext: "Serengeti Migration",
  },
];

const mockMessages: { [key: string]: Message[] } = {
  "1": [
    {
      id: "1",
      sender: "other",
      text: "Hi! Thanks for your interest in the Masai Mara safari.",
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "me",
      text: "Hello! I have a group of 6 people. Can you accommodate us?",
      time: "10:35 AM",
    },
    {
      id: "3",
      sender: "other",
      text: "Absolutely! That's a perfect group size. When are you planning to travel?",
      time: "10:40 AM",
    },
    {
      id: "4",
      sender: "me",
      text: "We're looking at early April. Is that available?",
      time: "10:42 AM",
    },
    {
      id: "5",
      sender: "other",
      text: "Yes, we have availability in April. Let me send you the detailed itinerary and pricing.",
      time: "11:15 AM",
    },
    {
      id: "6",
      sender: "other",
      text: "I can confirm the booking for your group. Looking forward to the safari!",
      time: "2:20 PM",
    },
  ],
};

export default function MessagesPage() {
  const [activeThread, setActiveThread] = useState<string>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentMessages = mockMessages[activeThread] || [];
  const currentThread = mockThreads.find((t) => t.id === activeThread);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      setMessageText("");
    }
  };

  const filteredThreads = mockThreads.filter(
    (thread) =>
      thread.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.tourContext.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="h-[calc(100vh-5rem)] bg-merino-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-6">
        <div className="bg-white rounded-xl shadow-md h-full overflow-hidden flex">
          {/* threads list section */}
          <div className="w-80 border-r border-merino-200 flex flex-col">
            <div className="p-4 border-b border-merino-200">
              <h2 className="mb-4 text-merino-950">Messages</h2>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredThreads.map((thread) => (
                <button
                  key={thread.id}
                  onClick={() => setActiveThread(thread.id)}
                  className={`w-full p-4 flex gap-3 hover:bg-merino-50 transition-colors border-b border-merino-200 ${
                    activeThread === thread.id ? "bg-merino-100" : ""
                  }`}
                >
                  <img
                    src={thread.avatar}
                    alt={thread.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-merino-950 text-sm truncate">
                        {thread.name}
                      </h4>
                      <span className="text-xs text-merino-600 flex-shrink-0 ml-2">
                        {thread.time}
                      </span>
                    </div>
                    <p className="text-xs text-[#e67e22] mb-1">
                      {thread.tourContext}
                    </p>
                    <p className="text-sm text-merino-600 truncate">
                      {thread.lastMessage}
                    </p>
                  </div>
                  {thread.unread > 0 && (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e67e22] text-white text-xs flex items-center justify-center">
                      {thread.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* chat panel section */}
          <div className="flex-1 flex flex-col">
            {currentThread ? (
              <>
                {/* chat header section */}
                <div className="p-4 border-b border-merino-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentThread.avatar}
                      alt={currentThread.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-merino-950">{currentThread.name}</h3>
                      <p className="text-sm text-merino-600">
                        {currentThread.tourContext}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-merino-100 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-merino-600" />
                  </button>
                </div>

                {/* messsages sectiion */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-md px-4 py-3 rounded-lg ${
                          message.sender === "me"
                            ? "bg-[#e67e22] text-white"
                            : "bg-merino-100 text-merino-900"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "me"
                              ? "text-white/80"
                              : "text-merino-600"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* message input section */}
                <div className="p-4 border-t border-merino-200">
                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                    />
                    <Button variant="primary" size="md" type="submit">
                      <Send size={20} />
                      Send
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-merino-600">
                <p>Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
