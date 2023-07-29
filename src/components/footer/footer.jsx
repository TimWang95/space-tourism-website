import useActive from "src/hooks/useActive";

function Footer() {
  const {active, handleToggle} = useActive();

  return (
    <div className="attribution">
      {active ? (
        <div className="attribution__context">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/TimWang95">Tim Wang</a>.
        </div>
      ):(null)}
      <button type="button" className="btn" onClick={handleToggle}>
        <img src="https://avatars.githubusercontent.com/u/113501106?v=4" alt="btn"/>
      </button>
    </div>
  )
}

export default Footer;