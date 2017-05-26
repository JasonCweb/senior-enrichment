import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.list
  };
};

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;
