import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { useQuery, useMutation, useQueryClient, type QueryClient, type UseMutationOptions, type UseQueryOptions, type MutationFunction, type UseMutationResult, type UseQueryResult } from "@tanstack/react-query";
export type UserCredentials = {
    password: string;
    username: string;
};
export type UserRank = "Member" | "Privileged" | "Janitor" | "Admin";
export type User = {
    id: number;
    name: string;
    rank: UserRank;
    strikes: number;
};
export type UserPage = {
    items: User[];
    page: number;
    pages: number;
    total: number;
};
export type ProjectOption = {
    add: string[];
    name: string;
    remove: string[];
};
export type SelectionMode = "One" | "Many";
export type Project = {
    conditionals: string[];
    createdAt: string;
    description: string;
    guidelines: string;
    id: number;
    meta: string;
    mode: SelectionMode;
    name: string;
    options: ProjectOption[];
    tags: string[];
    updatedAt?: string | null;
    userId: number;
    version: number;
};
export type ProjectPage = {
    items: Project[];
    page: number;
    pages: number;
    total: number;
};
export type ProjectRequest = {
    conditionals?: string[];
    description: string;
    guidelines: string;
    meta: string;
    mode: SelectionMode;
    name: string;
    options: ProjectOption[];
    tags: string[];
    userId: number;
};
export type ProjectEdit = {
    conditionals?: string[];
    description?: string | null;
    guidelines?: string | null;
    mode?: SelectionMode;
    name?: string | null;
    options?: ProjectOption[] | null;
    tags?: string[];
};
export type ProjectVersion = {
    conditionals: string[];
    createdAt: string;
    description: string;
    guidelines: string;
    id: number;
    meta: string;
    mode: SelectionMode;
    name: string;
    options: ProjectOption[];
    projectId: number;
    tags: string[];
    version: number;
};
export type ProjectVersionPage = {
    items: ProjectVersion[];
    page: number;
    pages: number;
    total: number;
};
export type Comment = {
    content: string;
    createdAt: string;
    hiddenBy?: number | null;
    id: number;
    projectId: number;
    updatedAt?: string | null;
    userId: number;
};
export type CommentPage = {
    items: Comment[];
    page: number;
    pages: number;
    total: number;
};
export type CommentRequest = {
    content: string;
    projectId: number;
    userId: number;
};
export type CommentEdit = {
    content?: string | null;
};
export type Contribution = {
    createdAt: string;
    id: number;
    postId: number;
    projectId: number;
    projectVersion: number;
    userId: number;
};
export type ContributionPage = {
    items: Contribution[];
    page: number;
    pages: number;
    total: number;
};
export type ContributionRequest = {
    postId: number;
    projectId: number;
    userId: number;
};
export type Interaction = {
    createdAt: string;
    endpoint: string;
    id: number;
    origin: string;
    response: number;
    userId?: number | null;
};
export type InteractionPage = {
    items: Interaction[];
    page: number;
    pages: number;
    total: number;
};
export type AxiosConfig = {
    paramsSerializer?: AxiosRequestConfig["paramsSerializer"];
};
export type Config = {
    mutations?: MutationConfigs;
    axios?: AxiosConfig;
};
export function initialize(axios: AxiosInstance, config?: Config) {
    const requests = makeRequests(axios, config?.axios);
    return {
        requests,
        queries: makeQueries(requests),
        mutations: makeMutations(requests, config?.mutations)
    };
}
function useRapiniMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationFn: MutationFunction<TData, TVariables>, config?: (queryClient: QueryClient) => Pick<UseMutationOptions<TData, TError, TVariables, TContext>, "onSuccess" | "onSettled" | "onError">, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">): UseMutationResult<TData, TError, TVariables, TContext> {
    const { onSuccess, onError, onSettled, ...rest } = options ?? {};
    const queryClient = useQueryClient();
    const conf = config?.(queryClient);
    const mutationOptions: typeof options = {
        onSuccess: (data: TData, variables: TVariables, context?: TContext) => {
            conf?.onSuccess?.(data, variables, context);
            onSuccess?.(data, variables, context);
        },
        onError: (error: TError, variables: TVariables, context?: TContext) => {
            conf?.onError?.(error, variables, context);
            onError?.(error, variables, context);
        },
        onSettled: (data: TData | undefined, error: TError | null, variables: TVariables, context?: TContext) => {
            conf?.onSettled?.(data, error, variables, context);
            onSettled?.(data, error, variables, context);
        },
        ...rest
    };
    return useMutation({ mutationFn, ...mutationOptions });
}
function nullIfUndefined<T>(value: T): NonNullable<T> | null {
    return typeof value === "undefined" ? null : value as NonNullable<T> | null;
}
export const queryKeys = {
    user: (id: number) => ["user", id] as const,
    users: (page?: number, size?: number, sort?: string, order?: string) => ["users", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order)] as const,
    project: (id: number) => ["project", id] as const,
    projects: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, name?: string, description?: string, guidelines?: string, tags?: string, search?: string) => ["projects", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order), nullIfUndefined(user), nullIfUndefined(name), nullIfUndefined(description), nullIfUndefined(guidelines), nullIfUndefined(tags), nullIfUndefined(search)] as const,
    projectVersion: (id: number) => ["projectVersion", id] as const,
    projectVersions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", project?: number) => ["projectVersions", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order), nullIfUndefined(project)] as const,
    comment: (id: number) => ["comment", id] as const,
    comments: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number) => ["comments", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order), nullIfUndefined(user), nullIfUndefined(project)] as const,
    contribution: (id: number) => ["contribution", id] as const,
    contributions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number) => ["contributions", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order), nullIfUndefined(user), nullIfUndefined(project)] as const,
    interaction: (id: number) => ["interaction", id] as const,
    interactions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", endpoint?: string, origin?: string, user?: number, response?: number) => ["interactions", nullIfUndefined(page), nullIfUndefined(size), nullIfUndefined(sort), nullIfUndefined(order), nullIfUndefined(endpoint), nullIfUndefined(origin), nullIfUndefined(user), nullIfUndefined(response)] as const
} as const;
export type QueryKeys = typeof queryKeys;
function makeRequests(axios: AxiosInstance, config?: AxiosConfig) {
    return {
        login: (payload: UserCredentials) => axios.request<string>({
            method: "post",
            url: `/login`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        user: (id: number) => axios.request<User>({
            method: "get",
            url: `/users/${id}`
        }).then(res => res.data),
        banUser: (id: number) => axios.request<unknown>({
            method: "delete",
            url: `/users/${id}`
        }).then(res => res.data),
        users: (page?: number, size?: number, sort?: string, order?: string) => axios.request<UserPage>({
            method: "get",
            url: `/users`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        updateUserRank: (payload: ("Member" | "Privileged" | "Janitor" | "Admin"), id: number) => axios.request<unknown>({
            method: "patch",
            url: `/users/${id}/rank`,
            data: payload,
            headers: {
                "Content-Type": "text/plain"
            }
        }).then(res => res.data),
        unbanUser: (id: number) => axios.request<unknown>({
            method: "patch",
            url: `/users/${id}/restore`
        }).then(res => res.data),
        project: (id: number) => axios.request<Project>({
            method: "get",
            url: `/projects/${id}`
        }).then(res => res.data),
        deleteProject: (id: number) => axios.request<unknown>({
            method: "delete",
            url: `/projects/${id}`
        }).then(res => res.data),
        editProject: (payload: ProjectEdit, id: number) => axios.request<unknown>({
            method: "put",
            url: `/projects/${id}`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        projects: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, name?: string, description?: string, guidelines?: string, tags?: string, search?: string) => axios.request<ProjectPage>({
            method: "get",
            url: `/projects`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined),
                ...(user !== undefined ? { user } : undefined),
                ...(name !== undefined ? { name } : undefined),
                ...(description !== undefined ? { description } : undefined),
                ...(guidelines !== undefined ? { guidelines } : undefined),
                ...(tags !== undefined ? { tags } : undefined),
                ...(search !== undefined ? { search } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createProject: (payload: ProjectRequest) => axios.request<number>({
            method: "post",
            url: `/projects`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        restoreProject: (id: number) => axios.request<unknown>({
            method: "patch",
            url: `/projects/${id}/restore`
        }).then(res => res.data),
        projectVersion: (id: number) => axios.request<ProjectVersion>({
            method: "get",
            url: `/project-versions/${id}`
        }).then(res => res.data),
        projectVersions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", project?: number) => axios.request<ProjectVersionPage>({
            method: "get",
            url: `/project-versions`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined),
                ...(project !== undefined ? { project } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        comment: (id: number) => axios.request<Comment>({
            method: "get",
            url: `/comments/${id}`
        }).then(res => res.data),
        hideComment: (id: number) => axios.request<unknown>({
            method: "delete",
            url: `/comments/${id}`
        }).then(res => res.data),
        editComment: (payload: CommentEdit, id: number) => axios.request<unknown>({
            method: "put",
            url: `/comments/${id}`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        comments: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number) => axios.request<CommentPage>({
            method: "get",
            url: `/comments`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined),
                ...(user !== undefined ? { user } : undefined),
                ...(project !== undefined ? { project } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createComment: (payload: CommentRequest) => axios.request<number>({
            method: "post",
            url: `/comments`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        restoreComment: (id: number) => axios.request<unknown>({
            method: "patch",
            url: `/comments/${id}/restore`
        }).then(res => res.data),
        contribution: (id: number) => axios.request<Contribution>({
            method: "get",
            url: `/contributions/${id}`
        }).then(res => res.data),
        contributions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number) => axios.request<ContributionPage>({
            method: "get",
            url: `/contributions`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined),
                ...(user !== undefined ? { user } : undefined),
                ...(project !== undefined ? { project } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createContribution: (payload: ContributionRequest) => axios.request<number>({
            method: "post",
            url: `/contributions`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        interaction: (id: number) => axios.request<Interaction>({
            method: "get",
            url: `/interactions/${id}`
        }).then(res => res.data),
        interactions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", endpoint?: string, origin?: string, user?: number, response?: number) => axios.request<InteractionPage>({
            method: "get",
            url: `/interactions`,
            params: {
                ...(page !== undefined ? { page } : undefined),
                ...(size !== undefined ? { size } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(order !== undefined ? { order } : undefined),
                ...(endpoint !== undefined ? { endpoint } : undefined),
                ...(origin !== undefined ? { origin } : undefined),
                ...(user !== undefined ? { user } : undefined),
                ...(response !== undefined ? { response } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data)
    } as const;
}
export type Requests = ReturnType<typeof makeRequests>;
export type Response<T extends keyof Requests> = Awaited<ReturnType<Requests[T]>>;
function makeQueries(requests: Requests) {
    return {
        useUser: (id: number, options?: Omit<UseQueryOptions<Response<"user">, unknown, Response<"user">, ReturnType<QueryKeys["user"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"user">, unknown> => useQuery({ queryKey: queryKeys.user(id), queryFn: () => requests.user(id), ...options }),
        useUsers: (page?: number, size?: number, sort?: string, order?: string, options?: Omit<UseQueryOptions<Response<"users">, unknown, Response<"users">, ReturnType<QueryKeys["users"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"users">, unknown> => useQuery({ queryKey: queryKeys.users(page, size, sort, order), queryFn: () => requests.users(page, size, sort, order), ...options }),
        useProject: (id: number, options?: Omit<UseQueryOptions<Response<"project">, unknown, Response<"project">, ReturnType<QueryKeys["project"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"project">, unknown> => useQuery({ queryKey: queryKeys.project(id), queryFn: () => requests.project(id), ...options }),
        useProjects: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, name?: string, description?: string, guidelines?: string, tags?: string, search?: string, options?: Omit<UseQueryOptions<Response<"projects">, unknown, Response<"projects">, ReturnType<QueryKeys["projects"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"projects">, unknown> => useQuery({ queryKey: queryKeys.projects(page, size, sort, order, user, name, description, guidelines, tags, search), queryFn: () => requests.projects(page, size, sort, order, user, name, description, guidelines, tags, search), ...options }),
        useProjectVersion: (id: number, options?: Omit<UseQueryOptions<Response<"projectVersion">, unknown, Response<"projectVersion">, ReturnType<QueryKeys["projectVersion"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"projectVersion">, unknown> => useQuery({ queryKey: queryKeys.projectVersion(id), queryFn: () => requests.projectVersion(id), ...options }),
        useProjectVersions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", project?: number, options?: Omit<UseQueryOptions<Response<"projectVersions">, unknown, Response<"projectVersions">, ReturnType<QueryKeys["projectVersions"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"projectVersions">, unknown> => useQuery({ queryKey: queryKeys.projectVersions(page, size, sort, order, project), queryFn: () => requests.projectVersions(page, size, sort, order, project), ...options }),
        useComment: (id: number, options?: Omit<UseQueryOptions<Response<"comment">, unknown, Response<"comment">, ReturnType<QueryKeys["comment"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"comment">, unknown> => useQuery({ queryKey: queryKeys.comment(id), queryFn: () => requests.comment(id), ...options }),
        useComments: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number, options?: Omit<UseQueryOptions<Response<"comments">, unknown, Response<"comments">, ReturnType<QueryKeys["comments"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"comments">, unknown> => useQuery({ queryKey: queryKeys.comments(page, size, sort, order, user, project), queryFn: () => requests.comments(page, size, sort, order, user, project), ...options }),
        useContribution: (id: number, options?: Omit<UseQueryOptions<Response<"contribution">, unknown, Response<"contribution">, ReturnType<QueryKeys["contribution"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"contribution">, unknown> => useQuery({ queryKey: queryKeys.contribution(id), queryFn: () => requests.contribution(id), ...options }),
        useContributions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", user?: number, project?: number, options?: Omit<UseQueryOptions<Response<"contributions">, unknown, Response<"contributions">, ReturnType<QueryKeys["contributions"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"contributions">, unknown> => useQuery({ queryKey: queryKeys.contributions(page, size, sort, order, user, project), queryFn: () => requests.contributions(page, size, sort, order, user, project), ...options }),
        useInteraction: (id: number, options?: Omit<UseQueryOptions<Response<"interaction">, unknown, Response<"interaction">, ReturnType<QueryKeys["interaction"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"interaction">, unknown> => useQuery({ queryKey: queryKeys.interaction(id), queryFn: () => requests.interaction(id), ...options }),
        useInteractions: (page?: number, size?: number, sort?: string, order?: "ASC" | "DESC" | "ASC_NULLS_FIRST" | "DESC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC_NULLS_LAST", endpoint?: string, origin?: string, user?: number, response?: number, options?: Omit<UseQueryOptions<Response<"interactions">, unknown, Response<"interactions">, ReturnType<QueryKeys["interactions"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"interactions">, unknown> => useQuery({ queryKey: queryKeys.interactions(page, size, sort, order, endpoint, origin, user, response), queryFn: () => requests.interactions(page, size, sort, order, endpoint, origin, user, response), ...options })
    } as const;
}
type MutationConfigs = {
    useLogin?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"login">, unknown, Parameters<Requests["login"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useBanUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"banUser">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useUpdateUserRank?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"updateUserRank">, unknown, Parameters<Requests["updateUserRank"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useUnbanUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"unbanUser">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useEditProject?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"editProject">, unknown, Parameters<Requests["editProject"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteProject?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteProject">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateProject?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createProject">, unknown, Parameters<Requests["createProject"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useRestoreProject?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"restoreProject">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useEditComment?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"editComment">, unknown, Parameters<Requests["editComment"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useHideComment?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"hideComment">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateComment?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createComment">, unknown, Parameters<Requests["createComment"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useRestoreComment?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"restoreComment">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateContribution?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createContribution">, unknown, Parameters<Requests["createContribution"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
};
function makeMutations(requests: Requests, config?: Config["mutations"]) {
    return {
        useLogin: (options?: Omit<UseMutationOptions<Response<"login">, unknown, Parameters<Requests["login"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"login">, unknown, Parameters<Requests["login"]>[0]>(payload => requests.login(payload), config?.useLogin, options),
        useBanUser: (id: number, options?: Omit<UseMutationOptions<Response<"banUser">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"banUser">, unknown, unknown>(() => requests.banUser(id), config?.useBanUser, options),
        useUpdateUserRank: (id: number, options?: Omit<UseMutationOptions<Response<"updateUserRank">, unknown, Parameters<Requests["updateUserRank"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"updateUserRank">, unknown, Parameters<Requests["updateUserRank"]>[0]>(payload => requests.updateUserRank(payload, id), config?.useUpdateUserRank, options),
        useUnbanUser: (id: number, options?: Omit<UseMutationOptions<Response<"unbanUser">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"unbanUser">, unknown, unknown>(() => requests.unbanUser(id), config?.useUnbanUser, options),
        useEditProject: (id: number, options?: Omit<UseMutationOptions<Response<"editProject">, unknown, Parameters<Requests["editProject"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"editProject">, unknown, Parameters<Requests["editProject"]>[0]>(payload => requests.editProject(payload, id), config?.useEditProject, options),
        useDeleteProject: (id: number, options?: Omit<UseMutationOptions<Response<"deleteProject">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteProject">, unknown, unknown>(() => requests.deleteProject(id), config?.useDeleteProject, options),
        useCreateProject: (options?: Omit<UseMutationOptions<Response<"createProject">, unknown, Parameters<Requests["createProject"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createProject">, unknown, Parameters<Requests["createProject"]>[0]>(payload => requests.createProject(payload), config?.useCreateProject, options),
        useRestoreProject: (id: number, options?: Omit<UseMutationOptions<Response<"restoreProject">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"restoreProject">, unknown, unknown>(() => requests.restoreProject(id), config?.useRestoreProject, options),
        useEditComment: (id: number, options?: Omit<UseMutationOptions<Response<"editComment">, unknown, Parameters<Requests["editComment"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"editComment">, unknown, Parameters<Requests["editComment"]>[0]>(payload => requests.editComment(payload, id), config?.useEditComment, options),
        useHideComment: (id: number, options?: Omit<UseMutationOptions<Response<"hideComment">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"hideComment">, unknown, unknown>(() => requests.hideComment(id), config?.useHideComment, options),
        useCreateComment: (options?: Omit<UseMutationOptions<Response<"createComment">, unknown, Parameters<Requests["createComment"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createComment">, unknown, Parameters<Requests["createComment"]>[0]>(payload => requests.createComment(payload), config?.useCreateComment, options),
        useRestoreComment: (id: number, options?: Omit<UseMutationOptions<Response<"restoreComment">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"restoreComment">, unknown, unknown>(() => requests.restoreComment(id), config?.useRestoreComment, options),
        useCreateContribution: (options?: Omit<UseMutationOptions<Response<"createContribution">, unknown, Parameters<Requests["createContribution"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createContribution">, unknown, Parameters<Requests["createContribution"]>[0]>(payload => requests.createContribution(payload), config?.useCreateContribution, options)
    } as const;
}
