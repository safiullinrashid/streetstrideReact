import {Address, Header, Header_search} from "../../components";
import {DescriptionAdidas, SneakersAdidas} from "../../features";
import {sneakerData} from "../../features/Nike/sneackers";

export const AdidasPage = () => {
    return (
        <div>
            <Header/>
            <Header_search/>
            <DescriptionAdidas/>
            <SneakersAdidas sneakers={sneakerData} />
            <SneakersAdidas sneakers={sneakerData} />

            <Address/>
        </div>
    );
};