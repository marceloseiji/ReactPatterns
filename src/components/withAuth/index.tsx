export type User = {
  isLogged: boolean
}

const WithAuth = (
  WrappedComponent: (props: User) => JSX.Element,
  isManuallyDefined = false,
  loggedInReturnedFetch = false
) => {
  const isLogged = isManuallyDefined
    ? loggedInReturnedFetch
    : Math.random() < 0.5

  const HOC = () => {
    return <WrappedComponent isLogged={isLogged} />
  }

  return HOC
}

export default WithAuth
