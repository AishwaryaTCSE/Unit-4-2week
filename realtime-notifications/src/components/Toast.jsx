import React from "react";
import { useNotifications } from "../contexts/NotificationContext";

export default function Toast() {
  const { lastNotification } = useNotifications();

  if (!lastNotification) return null;

  return (
    <div className="toast">
      <div className="toast-inner">
        <strong>New Notification</strong>
        <div>{lastNotification.message}</div>
      </div>
    </div>
  );
}
