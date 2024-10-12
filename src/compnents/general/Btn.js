import { Link } from "react-router-dom";



export default function Btn ({link, text}) {

    return <Link className="btn" to={link} title={text} >{text}</Link>
}