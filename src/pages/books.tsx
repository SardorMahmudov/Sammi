import { useTranslation } from "react-i18next";
import { withLayout } from "../layout/layout";
import Seo from "../layout/seo/seo";
import { BookPageComponent } from "../page-component";

const Books = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={`Sammi | ${t("books_page_title", { ns: "seo" })}` || "Sammi | Books"}
      metaDescription={`Sammi | ${t("books_page_description", { ns: "seo" })}` || "Sammi can advice books for you"}
    >
      <BookPageComponent />
    </Seo>
  );
};

export default withLayout(Books);
