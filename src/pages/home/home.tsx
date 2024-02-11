import { AppDescription, ContributionCounter } from "./components";
import { Subtitle, Page, PageTitle } from "../../components";

export const Home = () => {
  return (
    <Page>
      <PageTitle>TagMe! - E621 Tagging Project Assistant</PageTitle>
      <Subtitle>E621 Tagging Project Assistant</Subtitle>
      <ContributionCounter />
      <AppDescription />
    </Page>
  );
};
