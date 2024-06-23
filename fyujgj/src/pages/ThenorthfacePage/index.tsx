import {Address, Header, Header_search} from "../../components";
import {sneakerData, SneakersTheNorthFace} from "../../features/ThenorthfacePage/sneackers";
import {DescriptionTheNorthFace} from "../../features";

export const TheNorthFacePage = () => {
    return (
        <div>
            <Header/>
            <Header_search/>
            <DescriptionTheNorthFace/>
            <SneakersTheNorthFace sneakers={sneakerData}/>
            <SneakersTheNorthFace sneakers={sneakerData}/>
            <Address/>
        </div>
    );
};
