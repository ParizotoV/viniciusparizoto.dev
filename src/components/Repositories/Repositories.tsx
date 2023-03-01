import { Repositories } from "@/models/Repositories"
import { RepositoriesParams } from "./Repositories.interface"
import RepositoryItem from "./Repository.item"
import UserStats from "./UserStats"

const Repositories: React.FC<RepositoriesParams> = ({ repositories, user }) => {
  return (
    <div>
      <h3 className="mx-6 text-4xl font-bold text-center uppercase mt-10 mb-1 text-orange">
        TECH CONTRIBUTIONS
      </h3>
      <UserStats user={user} />
      <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6">
        {repositories.map((repository: Repositories, index: number) => (
          <RepositoryItem key={index} {...repository} />
        ))}
      </div>
    </div>
  )
}

export default Repositories