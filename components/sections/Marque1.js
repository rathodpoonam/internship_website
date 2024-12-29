'use client';
import Menu1 from "../layout/header/Menu1";

export default function Marque1() {
    return (
        <>
            <div className="" style={{ paddingBottom: '6rem', paddingTop: '6rem' }}>
                <div className="mb-20" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                    <div className="mega-menu-wrapper">
                        <div
                            className="header-main style-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-20"
                            style={{ marginBottom: '60px' }}
                        >
                            {/* Header Left */}
                            <div
                                className="header-left flex justify-between gap-2"
                                style={{ display: 'flex' }}
                            >
                                <div
                                    className="theme-btn wow nav2 d-md-block flex items-center"
                                    data-wow-delay=".8s"
                                    style={{
                                        backgroundColor: 'blue',
                                        lineHeight: '8px',
                                        fontSize: '16px',
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                        color: 'white',
                                    }}
                                >
                                    All
                                </div>
                                <div
                                    className="theme-btn wow nav2 d-md-block flex items-center"
                                    data-wow-delay=".8s"
                                    style={{
                                        lineHeight: '8px',
                                        fontSize: '16px',
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                        backgroundColor: 'white',
                                        color: 'black',
                                    }}
                                >
                                    for Brands
                                </div>
                                <div
                                    className="theme-btn wow nav2 d-md-block flex items-center"
                                    data-wow-delay=".8s"
                                    style={{
                                        lineHeight: '8px',
                                        fontSize: '16px',
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                        backgroundColor: 'white',
                                        color: 'black',
                                    }}
                                >
                                    for creators
                                </div>
                            </div>

                            {/* Header Right */}
                            <div
                                className="header-right d-flex justify-end items-center "
                                style={{ display: 'flex', gap: '2.5rem' }}
                            >
                                <nav id="mobile-menu">
                                    <Menu1 />
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="row mb-9">
                    <div className="col-12 col-md-4 mb-4">
                            <div
                                className="item position-relative"
                                style={{
                                    height: '500px',
                                    overflow: 'hidden',
                                    backgroundColor: '#333', // Default background color
                                    transition: 'background-color 0.3s ease-in-out', // Smooth color transition
                                    position: 'relative',
                                }}
                            >
                                {/* Logo at top left corner */}
                                <div
                                    className="logo position-absolute top-0 start-0 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '24px',
                                        transition: 'color 0.3s',
                                        zIndex: 1,
                                    }}
                                >
                                    <img
                                        src="/assets/img/hero/blizzard-light.svg"
                                        alt="Logo"
                                    />
                                </div>

                                {/* Image that will be replaced with blue background on hover */}
                                <img
                                    src="/assets/img/hero/grid1.avif"
                                    alt="Grid Image"
                                    className="image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 0,
                                    }}
                                />

                                {/* Text at bottom of the image */}
                                <div
                                    className="text-container position-absolute bottom-0 inset-0 w-100 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '50px',
                                        fontWeight: '900',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 2, // Ensure it's above the image
                                    }}
                                >
                                    <p className="title-text"
                                    style={{
                                        marginBottom:'20px'
                                    }}
                                    >Bottom Text</p>

                                    {/* Hover text that will appear below */}
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Client</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>Activision Blizzard</div>
                                    </div>
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Service</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>creative</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>paid</div>
                                    </div>

                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>sector</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>gaming</div>
                                       
                                    </div>



                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4 mb-4">
                            <div
                                className="item position-relative"
                                style={{
                                    height: '500px',
                                    overflow: 'hidden',
                                    backgroundColor: '#333', // Default background color
                                    transition: 'background-color 0.3s ease-in-out', // Smooth color transition
                                    position: 'relative',
                                }}
                            >
                                {/* Logo at top left corner */}
                                <div
                                    className="logo position-absolute top-0 start-0 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '24px',
                                        transition: 'color 0.3s',
                                        zIndex: 1,
                                    }}
                                >
                                    <img
                                        src="/assets/img/hero/blizzard-light.svg"
                                        alt="Logo"
                                    />
                                </div>

                                {/* Image that will be replaced with blue background on hover */}
                                <img
                                    src="/assets/img/hero/grid1.avif"
                                    alt="Grid Image"
                                    className="image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 0,
                                    }}
                                />

                                {/* Text at bottom of the image */}
                                <div
                                    className="text-container position-absolute bottom-0 inset-0 w-100 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '50px',
                                        fontWeight: '900',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 2, // Ensure it's above the image
                                    }}
                                >
                                    <p className="title-text"
                                    style={{
                                        marginBottom:'20px'
                                    }}
                                    >Bottom Text</p>

                                    {/* Hover text that will appear below */}
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Client</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>Activision Blizzard</div>
                                    </div>
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Service</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>creative</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>paid</div>
                                    </div>

                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>sector</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>gaming</div>
                                       
                                    </div>



                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-md-4 mb-4">
                            <div
                                className="item position-relative"
                                style={{
                                    height: '500px',
                                    overflow: 'hidden',
                                    backgroundColor: '#333', // Default background color
                                    transition: 'background-color 0.3s ease-in-out', // Smooth color transition
                                    position: 'relative',
                                }}
                            >
                                {/* Logo at top left corner */}
                                <div
                                    className="logo position-absolute top-0 start-0 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '24px',
                                        transition: 'color 0.3s',
                                        zIndex: 1,
                                    }}
                                >
                                    <img
                                        src="/assets/img/hero/blizzard-light.svg"
                                        alt="Logo"
                                    />
                                </div>

                                {/* Image that will be replaced with blue background on hover */}
                                <img
                                    src="/assets/img/hero/grid1.avif"
                                    alt="Grid Image"
                                    className="image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 0,
                                    }}
                                />

                                {/* Text at bottom of the image */}
                                <div
                                    className="text-container position-absolute bottom-0 inset-0 w-100 p-3"
                                    style={{
                                        color: '#fff',
                                        fontSize: '50px',
                                        fontWeight: '900',
                                        transition: 'all 0.3s ease-in-out',
                                        zIndex: 2, // Ensure it's above the image
                                    }}
                                >
                                    <p className="title-text"
                                    style={{
                                        marginBottom:'20px'
                                    }}
                                    >Bottom Text</p>

                                    {/* Hover text that will appear below */}
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Client</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>Activision Blizzard</div>
                                    </div>
                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>Service</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>creative</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>paid</div>
                                    </div>

                                    <div
                                        className="hover-text"
                                        style={{
                                            // fontSize: '30px',
                                            // fontWeight: '700',
                                            color: '#fff',
                                            paddingTop: '10px',
                                            zIndex: 1,
                                        }}
                                    >
                                       <div style={{
                                        fontSize:'15px',
                                        fontWeight:'700',
                                        color:'#AEB3CF',
                                       }}>sector</div>
                                       <div style={{
                                        fontSize:'20px',
                                        fontWeight:'900',
                                        textTransform:'uppercase'
                                       }}>gaming</div>
                                       
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS in JSX */}
            <style jsx>{`
                .item {
                    position: relative;
                    overflow: hidden;
                    background-color: #333; /* Default background color */
                }

                .item:hover {
                    background-color: blue;
                    transition: background-color 0.3s ease-in-out; /* Smooth color transition */
                }

                .item::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: blue; /* Blue background color */
                    transition: transform 0.5s ease-in-out;
                    transform: scaleY(0); /* Start from the bottom */
                    transform-origin: bottom; /* Start transformation from the bottom */
                }

                .item:hover::after {
                    transform: scaleY(1); /* Stretch to full height on hover */
                }

                .item:hover .image {
                    display: none; /* Hide image on hover */
                }

                .text-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px;
                    transition: transform 0.3s ease;
                    z-index: 2;
                }

                .hover-text {
                    font-size: 30px;
                    font-weight: 700;
                    display: none;
                    padding-top: 10px;
                    z-index: 1;
                }

                .item:hover .hover-text {
                    display: block; /* Show the new text on hover */
                }

                /* Bounce Effect */
                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    30% {
                        transform: translateY(-4px);
                    }
                    50% {
                        transform: translateY(2px);
                    }
                    70% {
                        transform: translateY(-2px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                .item:hover .title-text {
                    animation: bounce 0.6s ease-in-out;
                }
            `}</style>
        </>
    );
}
