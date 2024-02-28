import { useTranslation } from "react-i18next";
import { withLayout } from "../layout/layout";
import Seo from "../layout/seo/seo";
import { HomePageComponent } from "../page-component";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Sammi | ${t("main_page_title", { ns: "seo" })}`}
      metaDescription={`${t("main_page_description", { ns: "seo" })}`}
    >
      <HomePageComponent />
    </Seo>
  );
};

export default withLayout(Home);
