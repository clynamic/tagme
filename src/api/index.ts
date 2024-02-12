import axios from "axios";
import { initialize } from "./generated";

const config = initialize(
  axios.create({
    baseURL: "http://127.0.0.1:8080",
  })
);

const allProps = { ...config.requests, ...config.queries, ...config.mutations };

export const {
  user,
  users,
  project,
  projects,
  projectVersion,
  projectVersions,
  comment,
  comments,
  contribution,
  contributions,
  interaction,
  interactions,
  login,
  banUser,
  updateUserRank,
  unbanUser,
  editProject,
  deleteProject,
  createProject,
  restoreProject,
  editComment,
  hideComment,
  createComment,
  restoreComment,
  createContribution,
  useUser,
  useUsers,
  useProject,
  useProjects,
  useProjectVersion,
  useProjectVersions,
  useComment,
  useComments,
  useContribution,
  useContributions,
  useInteraction,
  useInteractions,
  useLogin,
  useBanUser,
  useUpdateUserRank,
  useUnbanUser,
  useEditProject,
  useDeleteProject,
  useCreateProject,
  useRestoreProject,
  useEditComment,
  useHideComment,
  useCreateComment,
  useRestoreComment,
  useCreateContribution,
} = allProps;
