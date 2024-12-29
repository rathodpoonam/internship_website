'use client';
import { useEffect, useState } from 'react';

export default function Hero1() {
    const [showImage, setShowImage] = useState(false); // State to control image visibility
    const [moveSpans, setMoveSpans] = useState(false); // State to control span movement

    // Automatically show the image and move spans after 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setMoveSpans(true); // Move the spans to left and right
            setShowImage(true); // Show the image after spans move
        }, 2000); // Wait 2 seconds to start the animation
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <>
            <section className="hero-section fix hero-1 bg-cover" style={{
                backgroundColor: '#DBF2FF',
                position: 'relative',
                flexDirection: 'column',
                overflow: 'hidden', // Ensure nothing overflows the container
            }}>
                <div className="container" style={{
                    width:'auto'
                }}>
                    <div className="g-4 align-items-center">
                        <div className="warrapper" style={{
                            maxWidth: '1200px', // Set a max-width for the wrapper
                            margin: '0 auto', // Center the wrapper horizontally
                            padding: '0 20px', // Optional: Add padding to give some space around
                        }}>
                            <div className="hero-content" style={{
                                display: 'flex',
                                flexDirection: 'column', // Stack the text vertically
                                alignItems: 'center',
                                position: 'relative',
                                paddingTop: '100px',
                                paddingBottom:"8rem"
                            }}>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{
                                    textAlign: 'center',
                                    minHeight: '469px',
                                    fontSize: '7.5rem',
                                    textDecoration: 'uppercase',
                                    lineHeight: '.9 !important',
                                    letterSpacing: '-0.15rem',
                                    fontWeight: '900',
                                    display: 'flex',
                                    flexDirection: 'column', // Stack divs vertically
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {/* 1fir div (stacked vertically) */}
                                    <div className="1fir" style={{
                                        position: 'relative',
                                        zIndex: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '1rem',
                                        textDecoration: 'uppercase',
                                        color: '#0047FF',
                                        lineHeight: '24px',
                                        fontWeight: '900',
                                        fontStyle: 'normal',
                                        marginBottom: '80px', // Increased space between divs
                                    }}>
                                        {/* First span moves to left */}
                                        <span style={{
                                            transform: moveSpans ? 'translateX(-25%)' : 'translateX(0)', // Reduced move left
                                            transition: 'transform 1s ease',
                                        }}>
                                            BUILD
                                        </span>
                                        {/* Second span moves to right */}
                                        <span style={{
                                            transform: moveSpans ? 'translateX(25%)' : 'translateX(0)', // Reduced move right
                                            transition: 'transform 1s ease',
                                        }}>
                                            ING
                                        </span>
                                    </div>

                                    {/* Image that will pop up between the divs */}
                                    {showImage && (
                                        <div className="image-container" style={{
                                            position: 'absolute',
                                            top: '30%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            transition: 'all 1s ease-in-out',
                                            opacity: showImage ? 1 : 0,
                                            zIndex: 1,
                                            maxWidth: '100%',  // Ensure image doesn't exceed container width
                                            overflow: 'hidden',
                                        }}>
                                            <img src="/assets/img/hero/bird.avif" alt="Popped Image" style={{
                                                width: '100%', // Image takes 100% of its container width
                                                maxWidth: '968px',  // Set max width
                                                height: 'auto',  // Maintain aspect ratio
                                                objectFit: 'cover', // Cover the area without stretching
                                            }} />
                                        </div>
                                    )}

                                    {/* 2sec div (stacked vertically) */}
                                    <div className="2sec" style={{
                                        position: 'relative',
                                        zIndex: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textDecoration: 'uppercase',
                                        color: '#0047FF',
                                        lineHeight: '24px',
                                        fontWeight: '900',
                                        fontStyle: 'normal',
                                        marginBottom: '69px'
                                    }}>
                                        {/* First span moves to left */}
                                        <span style={{
                                            transform: moveSpans ? 'translateX(-20%)' : 'translateX(0)', // Move left
                                            transition: 'transform 1s ease',
                                        }}>
                                            BRANDS
                                        </span>
                                        {/* Second span moves to right */}
                                        <span style={{
                                            transform: moveSpans ? 'translateX(20%)' : 'translateX(0)', // Move right
                                            transition: 'transform 1s ease',
                                        }}>
                                            AT THE
                                        </span>
                                    </div>
                                    <span style={{
                                        position: 'relative',
                                        zIndex: '10',
                                        display: 'block',
                                        color: '#0047FF',
                                    }} >FOREFRONT</span>

                                    <span style={{
                                        position: 'relative',
                                        zIndex: '0',
                                        display: 'block',
                                        color: '#0047FF',
                                    }} >
                                        <span style={{
                                            opacity: '1',
                                            transform: 'none',
                                            marginRight: '0.1rem'
                                        }}>OF</span>
                                        <span
                                            style={{
                                                opacity: '1',
                                                transform: 'none',
                                                marginRight: '0rem'
                                            }}
                                        >SOCIAL</span>
                                    </span>

                                </h1>
                                <p
                                    style={{
                                        marginTop: '3.5rem',
                                        fontSize: '1.25rem',
                                        lineHeight: '1.3',
                                        letterSpacing: '-.02em',
                                        opacity: '0.8',
                                        maxWidth: '750px',
                                        color: '#0047FF',
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        margin: '0',
                                        marginRight: '0',
                                        marginLeft: "0"
                                    }}>
                                    Your customers are waiting in the places where we already are. We don't make work that just put brands on social. What we do puts them at the forefront of it. Check out some examples of how we've turned social media moments into impactful global conversations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
