import { EducationParams } from "./Education.interface"
import EducationItem from "./EducationItem"

const Education = ({ }) => {
  const courses: EducationParams[] = [
    {
      degree: 'Course',
      subject: 'DevReactJS',
      institution: 'DevPleno'
    },
    {
      degree: 'Course',
      subject: 'Entendendo TypeScript',
      institution: 'Cod3r'
    },
    { 
      degree: 'Course',
      subject: 'Pentest Ethical Hacking',
      institution: 'OnzziSec'
    }
  ]

  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Courses / specializations</h3>
      <div className='md:grid md:grid-cols-2 md:gap-2 my-6 leading-none'>
        {courses.map(({ degree, institution, subject }, index) => (
          <EducationItem key={index} degree={degree} institution={institution} subject={subject} />
        ))}
      </div>
    </div>
  )
}

export default Education