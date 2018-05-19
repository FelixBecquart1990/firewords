import {store} from '../store'

export default (to, from, next) => {
  // check is the user is signed in
  let user = store.state.user
  let uid = user.user.uid
  if (
  /*store.state.user.uid == "4DCnopEZOxUBRHSAReI5i1vsHnp1" || // Xavier
  store.state.user.uid == "EhDVCphoojUP0vEajE00woZRg7a2" || // Fabian
  store.state.user.uid == "mTMiwNjHBWQcNqiFvtbtAjAFEaf1" || // Lucas
  store.state.user.uid == "gfdg67NK9rXY405jWO3C5CWs98V2" || // Louis
  store.state.user.uid == "DyQAdBZLa1aT6VM0s82tBiTcChT2" || // Augustin*/
  uid == "DFNJ4Jb50yeBlVGoECs0RhuEWK43" || // Félix
  uid == "TgFPj5LfpZUbdjLsVYlC8N6no3A3" || // Félix
  uid == "4RFeUhajmbb9JA6w9UlcFWvbiyj1" && // Félix
  !store.state.playing) {
    next()
  } else {
    next("/")
  }
}
