import { DataService } from "@/api/DataService";
import Education from "@/components/Education";
import Head from "@/components/Head";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Repositories from "@/components/Repositories";
import Summary from "@/components/Summary";
import { Repositories as ModelRepositories } from "@/models/Repositories";
import { User } from "@/models/User";
import { GetServerSideProps } from "next";

interface HomeParams {
  repositories: ModelRepositories[]
  user: User
}

const Home: React.FC<HomeParams> = ({ repositories, user }) => {
  return (
    <div className="container mx-auto px-32 bg-network">
      <Head />
      <Hero />
      <Summary />
      <Education />
      <Languages />
      <Repositories repositories={repositories} user={user} />
      <p className="text-center mb-4">© 2022-2023 V V P Tecnologia LTDA. Todos os direitos reservados.</p>
    </div >
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
