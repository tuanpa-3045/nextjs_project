import Router from "next/router";
import { getCookie } from '../utils/cookie';

export default function (ctx) {
  if (ctx.req) {
    if (ctx.req.header?.cookie) {
      // ctx.store.dispatch(reauthenticate(getCookie('token', ctx.req)));
    }
  } else {
    const token = ctx.store.getState().authentication.token;

    if (token && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
      setTimeout(function () {
        Router.push('/');
      }, 0);
    }
  }
}