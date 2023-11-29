import { SectionTitle } from '../SectionTitle/sectionTitle'
import './experience.scss'

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        ducimus inventore.
      </p>
      <div className="experience-time"></div>
    </div>
  )
}
