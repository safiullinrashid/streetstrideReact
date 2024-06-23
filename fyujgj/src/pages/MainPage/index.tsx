import {Address, Header, Header_search} from "../../components";
import {Advantages, Brands, Top} from "../../features";
import {Discount} from "../../components/Discount15";

export const MainPage = () => {
    return (
        <div>
            <Header/>
            <Header_search/>
            <Brands/>
            <Top/>
            <Advantages/>
            <Discount discountValue={15}/>
            <Address/>
        </div>
    );
};
