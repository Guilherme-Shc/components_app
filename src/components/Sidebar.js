import Link from "./Link";

function Sidebar(){
    const Links = [
        {label:'Dropdown', path: '/'},
        {label:'Accordion', path: '/accordion'},
        {label:'Buttons', path: '/buttons'},
        {label:'Modal', path: '/modal'},
        {label:'Table', path: '/table'},
        {label:'Counter', path: '/counter'},
        {label:'Counter 2.0', path: '/counter_2.0'},
        {label:'Midia', path: '/midia'}
    ];

    const renderedLinks = Links.map((link) =>{
        return <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    })
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;