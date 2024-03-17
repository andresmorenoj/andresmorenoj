import { Sora } from "next/font/google";
import StyledComponentsRegistry from "../../lib/register";

export const metadata = {
  title: "Andrés Moreno",
  description: "My personal website",
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={sora.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
