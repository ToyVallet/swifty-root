export const COOKIE_KEYS = {
  accessToken: 'swifty-access',
  refreshToken: 'swifty-refresh',
} as const;

export const SERVER_URL = 'https://dpi.swifty.kr';

export const API = {
  admin: {
    lineup: {
      lineups: '/admin/line_up',
      lineupSubId: (id: string) => `/admin/line_up/${id}`,
    },
    client: {
      host: `/admin/host`,
      hostSubid: (id: string) => `/admin/host/${id}`,
    },
  },
  festival: {
    festivals: '/admin/festival',
    festivalSubid: (id: string) => `/admin/festival/${id}`,
    detail: (id: string) => `/admin/festival/detail/${id}`,
  },
  search: {
    keyword: (keyword: string) => `/festival/search?keyword=${keyword}`,
    q: `festival/search`,
  },
  login: '/user/login',
} as const;
