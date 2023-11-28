import Image from 'next/image'

import './header.scss'

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi. i'm Paulo!</h1>
        <h2>Front-end Developer</h2>
      </div>
      <Image
        src="/me.jpg"
        alt="vercel Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}
