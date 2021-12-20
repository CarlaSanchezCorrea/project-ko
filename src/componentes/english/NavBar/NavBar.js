import React, {useState} from 'react';
import './NavBar.css';
import './responsive.css';


function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <div className="navBar" id="shopify-section-header">
        <header  className="site-header">
            <div className="wrapper">
                <div className="grid--full grid--table">

                    <div className="grid__item large--one-quarter medium-down--one-half" id="grid__item">
                        <a href="/">
                            <img 
                                src='https://cdn.shopify.com/s/files/1/0432/9839/0184/files/logo-inline_85x.png?v=1607897970'
                                alt='ko-logo'
                            />
                        </a>
                    </div>

                    <nav className="grid__item large--three-quarters large--text-right medium-down--hide" role="navigation">
                        <ul className="site-nav site-nav--init" id="AccessibleNav">
                            <li className="site-nav__item">about 54d</li>
                            <li className="site-nav__item">what you get</li>
                            <li className="site-nav__item">your coaches</li>
                            <li className="site-nav__item">stories</li>
                            <li className="site-nav__item">merch</li>
                            <li className="site-nav__item_list">
                                <span className="active">en</span>
                                <span>es</span>
                            </li>
                        </ul>
                    </nav>

                </div>



            </div>


        </header>
    </div>
  );
}

export default NavBar;
