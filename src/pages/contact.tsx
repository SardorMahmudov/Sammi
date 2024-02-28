import { useTranslation } from "react-i18next";
import { withLayout } from "../layout/layout";
import Seo from "../layout/seo/seo";
import { ContactPageComponent } from "../page-component";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Sammi | ${t("contact_page_title", { ns: "seo" })}` || "Sammi | Contact us"}
      metaDescription={
        `Sammi | ${t("contact_page_description", { ns: "seo" })}` || "Contact with Sammi and you can ask any questions"
      }
    >
      <ContactPageComponent />
    </Seo>
  );
};

export default withLayout(Contact);
