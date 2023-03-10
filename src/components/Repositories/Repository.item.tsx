import React from 'react';
import { Repositories } from '@/models/Repositories';

const RepositoryItem: React.FC<Repositories> = (repository) => {
  return (
    <div className="my-3 md:my-0 rounded bg-white hover:bg-gray-200 p-4 hover:shadow-md">
      <h3 className="font-bold hover:underline break-all">
        <a href={`https://github.com/${repository?.full_name}`}>{repository?.full_name}</a>
      </h3>
      <p>
        Language: {repository.language} / Stars: {repository.stargazers_count}
      </p>
    </div>
  );
};

export default RepositoryItem;
