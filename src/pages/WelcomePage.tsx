export default function WelcomePage({ onStartBooking, onStartChat }: { onStartBooking: () => void; onStartChat: () => void; }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-blue-300">
        <h1 className="text-4xl font-bold mb-8">Welcome to SportifyNCU!</h1>
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition"
            onClick={onStartBooking}
          >
            Start Booking
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
            onClick={onStartChat}
          >
            Chat
          </button>
        </div>
      </div>
    );
  }
  