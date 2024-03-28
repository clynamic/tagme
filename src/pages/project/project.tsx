import { useParams } from "react-router-dom";
import { useProject, useUser } from "../../api";
import { LoadingIcon, Page, PageTitle, Subtitle } from "../../components";
import { Link } from "react-router-dom";

export const ProjectPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProject(parseInt(id ?? "-1"));
  const { data: userData } = useUser(data?.userId ?? -1, {
    enabled: !isLoading && !isError,
  });

  if (isLoading) {
    return (
      <Page>
        <PageTitle>TagMe!</PageTitle>
        <LoadingIcon />
      </Page>
    );
  }

  if (isError) {
    return (
      <Page>
        <PageTitle>TagMe!</PageTitle>
        <Subtitle>Error</Subtitle>
        <p>{String(error)}</p>
      </Page>
    );
  }

  return (
    <Page>
      <PageTitle>{data!.name + " - TagMe!"}</PageTitle>
      <Subtitle>{data!.name}</Subtitle>
      {
        <span>
          by{" "}
          {userData ? (
            <Link to={`/users/${userData.id}`}> {userData.name}</Link>
          ) : (
            "Unknown"
          )}
          , X Contibutions
        </span>
      }
      <p>{data!.description}</p>
    </Page>
  );
};
