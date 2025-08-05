import React from "react";
import { NotificationProvider } from "./contexts/NotificationContext";
import NotificationList from "./components/NotificationList";
import Controls from "./components/Controls";
import Toast from "./components/Toast";
import "./styles.css";

export default function App() {
  return (
    <NotificationProvider>
      <div className="app">
        <header>
          <h1>Real-Time Notification Panel</h1>
          <p className="sub">Simulates incoming notifications every 5 seconds.</p>
        </header>

        <main>
          <Controls />
          <NotificationList />
        </main>

        <footer>
          <small>Demo — Notifications simulated with setInterval inside NotificationProvider</small>
        </footer>

        {}
        <Toast />
      </div>
    </NotificationProvider>
  );
}
