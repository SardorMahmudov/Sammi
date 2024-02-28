import { useTranslation } from "react-i18next";
import { withLayout } from "../layout/layout";
import Seo from "../layout/seo/seo";
import { FaqPageComponent } from "../page-component";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Sammi | ${t("faq_page_title", { ns: "seo" })}` || "Sammi | FAQ"}
      metaDescription={
        `Sammi | ${t("faq_page_description", { ns: "seo" })}` || "More users in sammi platform frequently asked question"
      }
    >
      <FaqPageComponent />
    </Seo>
  );
};

export default withLayout(Faq);
