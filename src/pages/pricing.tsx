import { useTranslation } from "react-i18next";
import { withLayout } from "../layout/layout";
import { PrisingPageComponent } from "../page-component";
import Seo from "../layout/seo/seo";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Sammi | ${t("pricing_page_title", { ns: "seo" })}` || "Sammi | Pricing Package"}
      metaDescription={
        `Sammi | ${t("pricing_page_description", { ns: "seo" })}` ||
        "The best package for using and doing lesson on sammi academy"
      }
    >
      <PrisingPageComponent />
    </Seo>
  );
};

export default withLayout(Pricing);
