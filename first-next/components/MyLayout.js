import Header from './Header';
import Menu from './Menu';


const layoutStyle = {
    // margin: 20,
    // padding: 20,
    // border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <Menu />
        {props.children}
    </div>
);

export default Layout;




/**
 * import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default Layout;
 */