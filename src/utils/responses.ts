export function redirectToSignin(props = {}) {
  return {
    props,

    redirect: {
      destination: '/signin',
      permanent: false
    }
  }
}
