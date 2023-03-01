import Image from "next/image"
import { LanguageParams } from "./Language.interface"

import ReactStars from 'react-stars'

const Languages = () => {
  const languages: LanguageParams[] = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'javascript',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'typescript',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      alt: 'html5',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      alt: 'css3',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'react',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      alt: 'nextjs',
      stars: 4
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
      alt: 'gatsby',
      stars: 3
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'python',
      stars: 2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      alt: 'nodejs',
      stars: 3
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      alt: 'express',
      stars: 3
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      alt: 'nestjs',
      stars: 2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
      alt: 'postgres',
      stars: 4
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      alt: 'mysql',
      stars: 4
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'mongodb',
      stars: 2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      alt: 'npm',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      alt: 'docker',
      stars: 2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
      alt: 'heroku',
      stars: 2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
      alt: 'git',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      alt: 'gitlab',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      alt: 'github',
      stars: 5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      alt: 'jest',
      stars: 7
    }
  ]

  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Languages</h3>
      <div className="grid grid-cols-2 md:grid-cols-8 md:gap-2 place-content-center my-6 bg-white rounded-lg leading-none">
        {languages.map(({ alt, src, stars }, index) => (
          <div key={index} className="flex flex-col items-center justify-center my-4 md:my-0 px-6 py-6 bg-black hover:shadow-lg">
            <Image data-tooltip-target={`tooltip-${alt}`} src={src} width="80" height="80" alt={alt} />
            <ReactStars className="mt-2" count={5} size={20} edit={false} value={stars} />
            <h3 className="text-base">{`${stars}/5`}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages