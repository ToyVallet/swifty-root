export const SERVER_URL = 'https://dpi.swifty.kr' as const;

export const API_LINEUP = {
  lineup: (id?: string) => (id ? `/admin/line_up/${id}` : '/admin/line_up'),
};

export const API_CLIENT = {
  host: (id?: string) => (id ? `/admin/host/${id}` : '/admin/host'),
};

export const API_FESTIVAL = {
  lineup: (id?: string) => (id ? `/admin/festival/${id}` : '/admin/festival'),
  detail: (id: string) => `/admin/festival/detail/${id}`,
};

export const API_SEARCH = {
  search: (q?: string) =>
    q ? `/festival/search?keyword=${q}` : `festival/search`,
};

export const API_AUTH = {
  login: '/user/login',
} as const;
