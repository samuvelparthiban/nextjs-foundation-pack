import "./globals.css";
export const metadata = { title: "Enterprise App" };
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100 p-6">{children}</body>
    </html>
  );
}