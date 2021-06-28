export default function pageDontNeedFooter(router) {
    const path = router.asPath
    const pathsArray = ['/login', '/signup']
    return pathsArray.includes(path)
}