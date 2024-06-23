import {Address, Header, Header_search} from "../../components";
import {DescriptionNewbalance, SneakersNewbalance} from "../../features";
import {sneakerData} from "../../features/Nike/sneackers";

export const NewbalancePage = () => {
    return (
        <div>
            <Header/>
            <Header_search/>
            <DescriptionNewbalance/>
            <SneakersNewbalance sneakers={sneakerData}/>
            <SneakersNewbalance sneakers={sneakerData}/>
            <Address/>

        </div>
    );
};
