"use client"

import { Chat } from "./components/Chat";
import { ChatProvider } from "./contexts/ChatContext";
import { UserProvider } from "./contexts/UserContext";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full px-2">
        <UserProvider>
          <ChatProvider>
            <h1 className="text-3xl my-3 text-center">Chat Simples</h1>
            <Chat />
          </ChatProvider>
        </UserProvider>
      </div>
    </div>

  );
}

export default Page;