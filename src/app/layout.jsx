import "@/app/globals.css";
import MainLayout from "../components/MainLayout";

export const metadata = {
  title: "Quosphere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
