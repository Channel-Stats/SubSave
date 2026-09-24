export const metadata = {
  title: "SubSave",
  description: "Track your subscriptions and save money.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
