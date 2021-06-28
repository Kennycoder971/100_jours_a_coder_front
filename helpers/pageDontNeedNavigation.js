export default function pageDontNeedNavigation(router) {
    const path = router.asPath
    const pathsArray = ['/login', '/signup']
    return pathsArray.includes(path)
}