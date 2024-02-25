import { withLayout } from "@/src/layout/layout";
import { ArticlePageComponent } from "@/src/page-component";
import { GetServerSideProps } from "next";
import { ArticleType } from "src/interfaces/article.interface";
import { Language } from "src/interfaces/constants.interface";
import { Articles } from "src/services/article.service";

const ArticlePage = ({ articles }: ArticlesPageProps) => {
  return <ArticlePageComponent artciles={articles} />;
};

export default withLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<ArticlesPageProps> = async ({ req }) => {
  const lng: Language = req.cookies.i18next as Language;
  const articles = await Articles.getArtciles(lng);
  console.log(articles);

  return {
    props: { articles },
  };
};

interface ArticlesPageProps extends Record<string, unknown> {
  articles: ArticleType[];
}
