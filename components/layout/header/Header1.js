import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";


export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  isSearch,
  handleSearch,
  onePageNav,
}) {
  return (
    <>
      <header>

        <div
          id="header-sticky "
          className={`header-1 ${scroll ? "sticky" : ""}`}
          style={{
            backgroundColor: scroll ? "white" : "transparent !important", 
          }}
          
        >
          <div className="">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo md:pl-8 pl-4"
                    style={{
                      color: 'black',
                      lineHeight: '15px',
                      fontSize: '30px',
                      fontWeight:'900',
                      textTransform:'uppercase',
                      paddingTop:'15px',
                      paddingBottom:'15px',
                      paddingLeft:'16px'
                      

                    }}
                    >
                   <p>NewGen</p>
                  </div>
                </div>
                <div style={{
                  gap:'2.5rem',
                  display:'flex'
                }}>
                  <div className="header-right d-flex justify-content-end align-items-center "
                  style={{
                    paddingRight:'1rem'
                  }}>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                          {onePageNav ? <OnePageNav /> : <Menu />}
                        </nav>
                      </div>
                    </div>

                    <div className="header__hamburger d-md-none my-auto ">
                      <div className="sidebar__toggle" onClick={handleOffCanvas}>
                        <i className="fas fa-bars" style={{
                          color:'black'
                        }}/>
                      </div>
                    </div>

                  </div>

                  <div

                    className="theme-btn wow d-none d-md-block flex items-center "
                    data-wow-delay=".8s"
                    style={{
                      backgroundColor: 'black',
                      lineHeight: '15px',
                      fontSize: '16px',
                      fontWeight:'900',
                      textTransform:'uppercase'
                    }}

                  >
                    Get in touch
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
