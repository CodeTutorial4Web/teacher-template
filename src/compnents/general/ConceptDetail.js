import { useState } from "react"



export default function ConceptDetail() {


    const [open, setOpen] = useState(false);

    return (
        <li className={open ? "open" : ""} >
        <div>
          <div>
            <span>How To Suiiiii</span>
          </div>

          <i className="fas fa-chevron-down" onClick={ () => {
            setOpen(!open)
          } }></i>
        </div>

        <ul>

          <li>
            Lesson 1
          </li>
          <li>
            Lesson 2
          </li>
          <li>
            Lesson 3
          </li>
        </ul>
      </li>
    )
}