import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import PageContentLayout from "~/shared/layouts/PageContent";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PageContentLayout>
      <Component {...pageProps} />
    </PageContentLayout>
  );
};

export default MyApp;
