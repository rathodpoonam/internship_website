import Link from "next/link";

export default function Footer3() {
  return (
    <footer className=" py-4" style={{
      paddingLeft: '32px',
      paddingRight: '32px',
      display: 'flex',
      gap: '20px',
      // justifyContent:'space-between'
    }}>
      <div className="row" style={{
        display: 'flex',
        flex: '1 1 1080px'
      }}>
        {/* First Grid: 3 Columns */}

        <div className="col-md-4">
          <h5 style={{
            color: '#CCCCCC',
            lineHeight: '20px',
            fontSize: '18px',
            fontWeight: '900',
            fontStyle: 'normal',
            marginBottom: '3rem',
            textTransform: 'uppercase'

          }}>For brands</h5>
          <ul className="list-unstyled">

            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >Social and Community</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >Influencer and Creator</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >Creative and production</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >Data and Strategy</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >Paid and Performance</Link>
            </li>

          </ul>
        </div>


        <div className="col-md-4">
          <h5 style={{
            color: '#CCCCCC',
            lineHeight: '20px',
            fontSize: '18px',
            fontWeight: '900',
            fontStyle: 'normal',
            marginBottom: '3rem',
            textTransform: 'uppercase'

          }}>for creators</h5>
          <ul className="list-unstyled">

            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >For creators</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >Creator Roster
              </Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >Case Studies</Link>
            </li>

          </ul>
        </div>
        <div className="col-md-4">
          <h5 style={{
            color: '#CCCCCC',
            lineHeight: '20px',
            fontSize: '18px',
            fontWeight: '900',
            fontStyle: 'normal',
            marginBottom: '3rem',
            textTransform: 'uppercase'

          }}>Company</h5>
          <ul className="list-unstyled">

            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >about</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',

                }}
              >careers</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >feed</Link>
            </li>
            <li style={{ marginTop: '15px' }}>
              <Link href=""

                style={{
                  color: 'black',
                  lineHeight: '15px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                }}
              >contact</Link>
            </li>

          </ul>
        </div>

      </div>

      <div className="row mt-4">
  {/* Social Media Icons */}
  <div className="text-center mt-4">
  <ul className="flex justify-center gap-4 list-none p-0 m-0" style={{display:'flex'}}>
    <li className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter text-black text-4xl"></i> {/* Increased icon size */}
      </a>
    </li>
    <li className="flex items-center justify-center bg-gray-200 rounded-full">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-black text-4xl"></i> {/* Increased icon size */}
      </a>
    </li>
    <li className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok text-black text-4xl"></i> {/* Increased icon size */}
      </a>
    </li>
    <li className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-black text-4xl"></i> {/* Increased icon size */}
      </a>
    </li>
  </ul>
</div>


  {/* Heading
  <div className="col text-center" style={{ color: 'black', fontSize: '50px' }}>
    <h3
      style={{
        lineHeight: '20px',
        fontWeight: '500',
        fontStyle: 'normal',
      }}
    >
      NewGen
    </h3>
  </div> */}
</div>



    </footer>
  );
}
