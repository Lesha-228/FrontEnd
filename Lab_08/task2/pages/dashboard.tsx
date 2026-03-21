import { GetServerSideProps } from "next";
import {
  getCurrentUser,
  getUserNotifications,
  getUserAnalytics,
  User,
  Notification,
} from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <section
        style={{
          marginTop: 24,
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>Analytics</h2>
        <p>Page Views: {analytics.pageViews.toLocaleString()}</p>
        <p>Sessions: {analytics.sessions.toLocaleString()}</p>
        <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>
      </section>

      <section
        style={{
          marginTop: 24,
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} style={{ marginBottom: 8 }}>
              <strong>[{notif.type}]</strong> {notif.message} —{" "}
              {notif.read ? "Read" : "Unread"}
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: 24 }}>
        <p>Last updated: {currentTime}</p>
      </footer>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};