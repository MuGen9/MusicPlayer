import React from 'react';
import './Sidebar.scss';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './../../DataLayer';
import logo from './../../assets/Spotify_Logo_White.png';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="Spotify Logo" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon ={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist, index) => (
                <SidebarOption key={index} title={playlist.name} />
            ))}
            
            <SidebarOption title='Hip hip' />
            <SidebarOption title='RnB' />
        </div>
    )
}

export default Sidebar;

