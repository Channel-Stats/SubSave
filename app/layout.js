export const metadata = {
  title: "SubSave",
  description: "Track your subscriptions and save money.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
          background: "#ffffff",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}
