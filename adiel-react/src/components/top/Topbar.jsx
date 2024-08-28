import "./topbar.css"
import {Search, Person} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbarContainer"></div>
    <div className="topbarLeft">
        <span className="logo">Instatalk</span>
    </div>
    <div className="topbarCenter">
        <div className="serchbar">
        <Search />
            <input placeholder= "Serch for friend, post or video" className="serchInput"/>
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">TimeLine</span>
            </div>
        </div>

    )
}