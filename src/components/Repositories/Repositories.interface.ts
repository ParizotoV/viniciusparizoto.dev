import { Repositories } from "@/models/Repositories";
import { User } from "@/models/User";

export interface RepositoriesParams {
  repositories: Repositories[]
  user: User
}