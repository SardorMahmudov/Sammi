import { withLayout } from "@/src/layout/layout";
import Seo from "@/src/layout/seo/seo";
import { DetailedCourseComponent } from "@/src/page-component";
import { useRouter } from "next/router";

const DetailedCoursePage = () => {
  const router = useRouter();

  return (
    <Seo metaTitle={`Sammi course | ${router.query.slug}`}>
      <DetailedCourseComponent />
    </Seo>
  );
};

export default withLayout(DetailedCoursePage);
