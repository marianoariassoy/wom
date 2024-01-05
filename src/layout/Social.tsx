import { Instagram, Facebook, Linkedin, Twitter } from '../components/icons'

const items = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/womlatam/',
    icon: Instagram
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/womlatam',
    icon: Facebook
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/wom-latam/about/',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/#!/WomLatam',
    icon: Twitter
  }
]

const Social = () => {
  return (
    <nav className='flex gap-x-4 lg:gap-x-8 items-center'>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          rel='noreferrer'
          className='text-light-hover transition-colors'
        >
          <item.icon />
        </a>
      ))}
    </nav>
  )
}

export default Social
