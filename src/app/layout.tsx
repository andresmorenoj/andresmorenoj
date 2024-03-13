import StyledComponentsRegistry from "../../lib/register";
import "../styles/globals.css";

export const metadata = {
  title: "Andrés Moreno",
  description: "My personal website",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
