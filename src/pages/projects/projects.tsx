import { useProjects } from "../../api";

export const Projects = () => {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    // error to string;
    return <h1>Error: {String(error)}</h1>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data!.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};
