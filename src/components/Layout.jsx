import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

function Layout(props) {
    const {user, signOut} = props;

    return(
        <div className="layout">
            <Header
                user={user}
                signOut={signOut}
            />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;