import { Head } from "next/document";
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
      <Head>
      <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* New Relic Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              ;window.NREUM||(NREUM={});NREUM.init={distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}};
              ;NREUM.loader_config={accountID:"4640822",trustKey:"4640822",agentID:"1386199071",licenseKey:"NRJS-3d54a44a47b843197e0",applicationID:"1386199071"};
              ;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-3d54a44a47b843197e0",applicationID:"1386199071",sa:1};
              (() => { /* New Relic Loader code */ })();
            `,
          }}
        />
      </Head>
      <body className={sora.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
