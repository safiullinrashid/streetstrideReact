import {Address, Header, Header_search} from "../../components";
import {DescriptionNike, SneakersNike} from "../../features";
import {sneakerData} from "../../features/Nike/sneackers";

export const NikePage = () => {
    return (
        <div>
            <Header/>
            <Header_search/>
            <DescriptionNike/>
            <SneakersNike sneakers={sneakerData} />
            <SneakersNike sneakers={sneakerData} />
            <Address/>

        </div>
    );
};
