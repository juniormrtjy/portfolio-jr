import Image from 'next/image'

interface SkillProps {
  image: string
  years: string
  measure: number
}
export default function Skill(props: SkillProps) {
  return (
    <div className="experience-language">
      <Image
        src={props.image}
        alt="Java Logo"
        width={40}
        height={40}
        priority
      />

      <div className="experience-unit">
        <div
          className={`experience-measure measure-1 measure-${props.measure}`}
        >
          {props.years}
        </div>
      </div>
    </div>
  )
}
