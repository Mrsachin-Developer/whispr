import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/chatContainer";
import RightSideBar from "../components/RightSideBar";

export default function HomePage() {
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <div className="h-screen w-full border sm:px-[15%] sm:py-[5%]">
      <div className="grid-cols-1 grid backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%]  relative">
        <SideBar />
        <ChatContainer />
        <RightSideBar />
      </div>
    </div>
  );
}
