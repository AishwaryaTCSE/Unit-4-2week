import React, { createContext, useContext, useEffect, useRef, useState } from "react";
const NotificationContext = createContext();

export function useNotifications() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [running, setRunning] = useState(true); 
  const intervalRef = useRef(null);
  const idCounterRef = useRef(0);

  const [lastNotification, setLastNotification] = useState(null);

  const makeId = () => {
    idCounterRef.current += 1;
    return `${Date.now()}_${idCounterRef.current}`;
  };

  const addNotification = (message = "You have a new message") => {
    const newNoti = {
      id: makeId(),
      message,
      read: false,
      createdAt: Date.now(),
    };
    setNotifications((prev) => [newNoti, ...prev]);
    setLastNotification(newNoti);
    // Play beep
    playBeep();
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const stopNotifications = () => {
    setRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startNotifications = () => {
    setRunning(true);
  };

  const playBeep = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(880, ctx.currentTime); 
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.01);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.08);
      setTimeout(() => {
        if (ctx && ctx.state !== "closed") ctx.close();
      }, 200);
    } catch (e) {
      console.warn("Beep not supported", e);
    }
  };

  useEffect(() => {
    if (!running) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const samples = [
        "You have a new message",
        "New comment on your post",
        "Your order status changed",
        "Reminder: meeting in 30 minutes",
        "Someone liked your photo",
      ];
      const rand = samples[Math.floor(Math.random() * samples.length)];
      addNotification(rand);
    }, 5000); 

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]); // restart effect when running flips
  useEffect(() => {
    if (!lastNotification) return;
    const t = setTimeout(() => {
      setLastNotification(null);
    }, 3000);
    return () => clearTimeout(t);
  }, [lastNotification]);

  const value = {
    notifications,
    addNotification,
    markAllRead,
    stopNotifications,
    startNotifications,
    running,
    lastNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
