import React from "react";
import { useNotifications } from "../contexts/NotificationContext";

export default function Controls() {
  const { markAllRead, stopNotifications, startNotifications, running, addNotification } = useNotifications();

  return (
    <div className="controls">
      <button className="btn" onClick={markAllRead}>Mark All as Read</button>

      {running ? (
        <button className="btn btn-danger" onClick={stopNotifications}>Stop Notifications</button>
      ) : (
        <button className="btn" onClick={startNotifications}>Start Notifications</button>
      )}

      {/* optional: manually add one */}
      <button className="btn" onClick={() => addNotification("Manually triggered notification")}>Add Now</button>
    </div>
  );
}
