import React from 'react'
import { SvgProps, Flex, Link } from '@pancakeswap/uikit'
import * as IconModule from '../icons'
import { socials } from '../config'

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const SocialLinks: React.FC = () => (
  <Flex justifyContent="space-between" width="100%">
    {socials.map((social) => {
      const Icon = Icons[social.icon]
      const iconProps = { width: '24px', color: 'text', style: { cursor: 'pointer' } }

      return (
        <Link external key={social.label} href={social.href} aria-label={social.label}>
          <Icon {...iconProps} />
        </Link>
      )
    })}
  </Flex>
)

export default React.memo(SocialLinks, () => true)
