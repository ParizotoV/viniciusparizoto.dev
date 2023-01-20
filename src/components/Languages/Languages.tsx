import Image from "next/image"
import { LanguageParams } from "./Language.interface"



const Languages = () => {
  const languages: LanguageParams[] = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'typescript'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'typescript'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      alt: 'html5'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      alt: 'css3'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'react'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      alt: 'nextjs'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
      alt: 'gatsby'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'python'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      alt: 'nodejs'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      alt: 'express'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      alt: 'nestjs'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
      alt: 'postgres'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      alt: 'mysql'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'mongodb'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      alt: 'npm'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      alt: 'docker'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
      alt: 'heroku'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
      alt: 'git'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      alt: 'gitlab'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      alt: 'github'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      alt: 'jest'
    }
  ]

  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Languages</h3>
      <div className="grid grid-cols-2 md:grid-cols-8 md:gap-2 place-content-center my-6 bg-white rounded-lg leading-none">
        {languages.map(({ alt, src }, index) => (
          <div key={index} className="flex justify-center my-4 md:my-0 px-6 py-6">
            <Image data-tooltip-target={`tooltip-${alt}`} src={src} width="80" height="80" alt={alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages