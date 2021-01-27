import 'bulma/css/bulma.css'

function Navbar() {
  return (
    <nav className="level is-mobile">
      <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
      <p className="level-item has-text-centered">
        <a href="https://www.linkedin.com/in/luis-campos12/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <h1 className="title is-2 level-item has-text-centered">Luis Campos</h1>
      <p className="level-item has-text-centered">
        <a href="https://github.com/luis-campos" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </nav>
  )
}

export default Navbar
