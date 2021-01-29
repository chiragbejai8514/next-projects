import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};
const HeaderIcon = () => (
    <div className="header-icon">
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <div className="header-icons" style={{ backgroundImage: `url(image/icon11.png)` }}></div>
        <div className="header-icons" style={{ backgroundImage: `url(image/icon10.png)` }}></div>
    </div>
)


const Header = () => {
    return (<div >
        <div className="container-header">
            <div className="header-text">OVERVIEW</div>
            <HeaderIcon />
        </div>
        <style jsx global>{`
        a{
            color:white;
        }
        .container-header{
            display: flex;
            justify-content: space-between;
            padding-left: 130px;
            background-image: linear-gradient(-135deg,#3B244A 0%,#2E3166 100%);
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.30);
          }
        
          .header-text{
            color: white;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 20px;
            font-family: JosefinSans-Regular;
          
          }
          .header-icons{
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: 42px;
            height: 27px;
            filter: opacity(0.5);
            display:inline-block;
            
          
          }
        
          .header-icon {
            margin-top: 20px;
            margin-right: 20px;
          }
        
          .header-icons:hover{
            filter: none
            display: flex;
            
          }`}
        </style>
    </div>
    );
};








// const Header = () => (
//     <div>
//         <Link href="/">
//             <a style={linkStyle}>Home</a>
//         </Link>
//         <Link href="/about">
//             <a style={linkStyle}>About</a>
//         </Link>
//     </div>
// );
export default Header;






