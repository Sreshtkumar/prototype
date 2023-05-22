import Contact from "./Contact";
import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function About () {
    return (<><h1>About Us</h1>
    <CustomLink to="/contact">Contact us</CustomLink></>)
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }