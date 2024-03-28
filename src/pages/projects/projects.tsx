import { useProjects } from "../../api";
import { ErrorIcon, LoadingIcon, Page, Subtitle } from "../../components";
import { DataPageIndicator } from "../../components/page-indicator/data-page-indicator";
import { usePaginatedQuery } from "../../components/page-indicator/use-query-pagination";
import { ProjectTable } from "./components";

export const ProjectsPage = () => {
  const { data, page, isLoading, isError, error } =
    usePaginatedQuery(useProjects);

  return (
    <Page title="All Projects - TagMe!">
      {(() => {
        if (isLoading) {
          return <LoadingIcon />;
        }
        if (isError) {
          return <ErrorIcon error={error} />;
        }
        return (
          <>
            <Subtitle>All Projects</Subtitle>
            <ProjectTable projects={data!} />
            <DataPageIndicator data={page} hideMinAndMax />
          </>
        );
      })()}
    </Page>
  );
};
