import { ContextApi } from 'contexts/Localization/types'
import { MenuEntry } from './UikitMenu'
import Trading from '../icons/trading'
import LP from '../icons/LP'
import Pledge from '../icons/pledge'
// import IDO from '../icons/ido'
import Bridge from '../icons/bridge'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  // {
  //   label: t('Home'),
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: t('Trade'),
    icon: Trading,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: LP,
    href: '/lppools',
  },
  // {
  //   label: t('Pools'),
  //   icon: Pledge,
  //   href: '/staking',
  // },
  {
    label: t('Bridge'),
    icon: Bridge,
    href: 'https://halo.land/#/bridgePage',
  },
  {
    label: t('Genesis'),
    icon: Pledge,
    href: 'https://www.actionworld.io/genesis',
  },
  // TODO 销毁挖矿
  // {
  //   label: t('IFO'),
  //   icon: IDO,
  //   href: '/ifo',
  // },
  // TODO 社区
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: Info,
  //   href: 'https://pancakeswap.info',
  // },
  // TODO 光环桥
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: t('Merch'),
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
