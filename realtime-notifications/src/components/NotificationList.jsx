import React from "react";
import { useNotifications } from "../contexts/NotificationContext";

/**
 * Displays notification list with unread styling
 */
export default function NotificationList() {
  const { notifications } = useNotifications();

  if (!notifications.length) {
    return <div className="empty">No notifications yet.</div>;
  }

  return (
    <div className="notification-list">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.read ? "read" : "unread"}`}>
          <div className="message">{n.message}</div>
          <div className="meta">
            <small>{new Date(n.createdAt).toLocaleTimeString()}</small>
            {!n.read && <span className="badge">New</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
