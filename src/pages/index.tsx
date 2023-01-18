import { DataService } from "@/api/DataService";
import { Repositories } from "@/models/Repositories";
import { User } from "@/models/User";
import { GetServerSideProps } from "next";

interface HomeParams {
  repositories: Repositories[]
  user: User
}

const Home: React.FC<HomeParams> = ({ repositories, user }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá eu sou, {user?.name}</h1>
      <h2 className="font-bold text-3xl">Meus repositórios no Github</h2>
      <p className="">Github stats: {user.public_repos} / public_gists: {user.public_gists} / Followers: {user.followers} </p>
      {repositories.map((repository: Repositories, index: number) => (
        <div className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md" key={index}>
          <h3 className="font-bold">{repository?.full_name}</h3>
          <p>Language: {repository.language} / Stars: {repository.stargazers_count}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseRepositories = await DataService({ method: 'GET', url: '/ParizotoV/repos' })
  const responseUser = await DataService({ method: 'GET', url: '/ParizotoV' })
  const repositories = responseRepositories?.data as Repositories[]
  const user = responseUser?.data as User

  return {
    props: {
      repositories,
      user
    }
  }
}

export default Home
