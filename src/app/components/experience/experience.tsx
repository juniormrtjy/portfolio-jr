import Image from 'next/image'
import { SectionTitle } from '../SectionTitle/sectionTitle'
import './experience.scss'
import Skill from '../skill/skill'

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        ducimus inventore.
      </p>
      <div className="experience-time">
        <Skill image="/react 2.png" years="2 years" measure={1} />
        <Skill image="/js 2.png" years="2 years" measure={2} />
        <Skill image="/ts 2.png" years="2 years" measure={2} />
      </div>
    </div>
  )
}
