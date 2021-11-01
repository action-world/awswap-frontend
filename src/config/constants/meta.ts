import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AWSWAP',
  description:
    'About Action World upcoming launch on HALO chain. Action World is an IDO platform and SWAP decentralized exchange based on HALO Chain. AW’s vision is to become an incubator for projects in Southeast Asia. The success of AW will drive the growth of Halo Chain in Southeast Asia, as such Halo Labs will also actively promote the launch and development of AW.',
  image: '/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HOSWAP')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HOSWAP')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HOSWAP')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HOSWAP')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HOSWAP')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HOSWAP')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('HOSWAP')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HOSWAP')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HOSWAP')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('HOSWAP')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('HOSWAP')}`,
      }
    default:
      return {
        title: `${t('HOSWAP')}`,
      }
  }
}
