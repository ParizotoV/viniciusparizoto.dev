import React from 'react';
import { EducationParams } from './Education.interface';

const EducationItem: React.FC<EducationParams> = ({ degree, institution, subject }) => {
  return (
    <div className="my-4 md:my-0 px-6 py-6 bg-white rounded-lg">
      <h4 className="text-lg uppercase font-bold text-orange mb-2 leading-none">{degree}</h4>
      <p className="text-2xl uppercase mb-1 leading-none">{subject}</p>
      <p className="font-bold normal-case text-lg leading-none">{institution}</p>
    </div>
  );
};

export default EducationItem;
