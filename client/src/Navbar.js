import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({isLoggedIn}){
    
    return ( <nav className="nav">
    <Link to="/" className="site-title">Hangry.</Link>
    <ul>
        {isLoggedIn ? <CustomLink to="signout">Logout</CustomLink> : <CustomLink to="/auth">Log In</CustomLink>}
        <CustomLink to="/recipes">Recipes</CustomLink>
        <CustomLink to="/recipeform">Add Recipe</CustomLink>
        {isLoggedIn ? <CustomLink to="/reviewedrecipes">My Recipes</CustomLink> : null}
    </ul>
</nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}