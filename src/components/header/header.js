import classes from '../header/header.module.css'

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.h1}>Investment Calculator</h1>
      </header>
    </div>
  );
}

export default Header;
