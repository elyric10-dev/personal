import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import PageContentLayout from "~/shared/layouts/PageContent";
import store from "~/redux/store";
import { Provider } from "react-redux";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PageContentLayout>
        <Component {...pageProps} />
      </PageContentLayout>
    </Provider>
  );
};

export default MyApp;
