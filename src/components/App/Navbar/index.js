import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'


const Navbar = () => (
  <AppBar title='Hangman'>
    <Navigation type='horizontal'>
      <Link href='/' active label='Play' />

      {/* <Link href='http://' label='Inbox' icon='inbox' /> */}
      {/* <Link href='http://' active label='Profile' icon='person' /> */}
    </Navigation>
  </AppBar>
);

export default Navbar;