import { useProjects } from "../../api";
import {
  ErrorIcon,
  LoadingIcon,
  Page,
  PageTitle,
  Subtitle,
} from "../../components";
import { DataPageIndicator } from "../../components/page-indicator/data-page-indicator";
import { usePaginatedQuery } from "../../components/page-indicator/use-query-pagination";
import { ProjectGrid } from "./components";

export const ProjectsPage = () => {
  const { data, page, isLoading, isError, error } =
    usePaginatedQuery(useProjects);

  if (isLoading) {
    return (
      <Page>
        <PageTitle>All Projects - TagMe!</PageTitle>
        <LoadingIcon />
      </Page>
    );
  }

  if (isError) {
    return (
      <Page>
        <PageTitle>All Projects - TagMe!</PageTitle>
        <ErrorIcon error={error} />
      </Page>
    );
  }

  return (
    <Page>
      <PageTitle>All Projects - TagMe!</PageTitle>
      <Subtitle>All Projects</Subtitle>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{String(error)}</p>
      ) : (
        <ProjectGrid projects={data!} />
      )}
      <DataPageIndicator data={page} hideMinAndMax />
    </Page>
  );
};
