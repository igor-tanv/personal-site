import React, { useContext, useState } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  const [openedNavMenu, setOpenedNavMenu] = useState(false)
  let navbarToggleEle = null;
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md" onToggle={() => setOpenedNavMenu(!openedNavMenu)}>
      <Navbar.Brand as={Link} to="/">
        <FontAwesomeIcon
          icon={["fab", `${dark ? "empire" : "rebel"}`]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={ele => navbarToggleEle = ele}/>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/certificates" title="Certificates">
            Certificates
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
        {openedNavMenu && <div className="navbar-collapse-backdrop" onClick={() => {
          if (navbarToggleEle) navbarToggleEle.click()
        }}/>}
      </Navbar.Collapse>
    </Navbar>
  )
}
