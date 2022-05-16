const BAS_API_URL = 'https://chabloz.eu/ws/chat/';

export const clientId = (new Date()).getTime();

export const apiLogin = BAS_API_URL + `user/login?cid=${clientId}&user=`;

export const apiLogout = BAS_API_URL + `user/logout?cid=${clientId}`;

export const apiOnline = BAS_API_URL + `user/online?cid=${clientId}`;

export const apiMsgAdd = BAS_API_URL + `msg/add?cid=${clientId}&msg=`;

export const apiMsgGet = BAS_API_URL + `msg/get?cid=${clientId}`;