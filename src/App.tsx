
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import BookingPage from "./pages/BookingPage";
import ChatRoom from "./pages/ChatRoom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState<"welcome" | "booking" | "chat">("welcome");

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  if (page === "welcome") {
    return <WelcomePage onStartBooking={() => setPage("booking")} onStartChat={() => setPage("chat")} />;
  }

  if (page === "chat") {
    return <ChatRoom onBack={() => setPage("welcome")} />;
  }

  if (page === "booking") {
    return <BookingPage />;
  }

  return null;
}

export default App;
