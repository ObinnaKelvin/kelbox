import React from 'react'
import { Link } from 'react-router-dom';
// import { SubNavData } from './SubNavData';
import { SubNavDataAdmin } from './SubNavDataAdmin';
import '../css/SubNav.css';

function SubNav() {
    return (
        <div className="subnav">
            {
                SubNavDataAdmin.map((item, key) => {
                    return (
                        <div className="subnavbox" key={item.id}>
                            <Link to={item.path} className="subnavboxlink">
                                <div className="subnavbox__icon">{item.icon}</div>
                                <div className={item.cName}>{item.title}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubNav
