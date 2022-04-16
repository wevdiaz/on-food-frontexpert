import { DisheDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews} from "@/icons";

import Styles from "DisheDetails.module.css";

export function DisheDetails({ type, title , subtitle }: DisheDetailsProps) {
    const Icon = type === "delivery" ? IconDelivery : type === "category" ? IconCategory : IconReviews;

    return (
        <div className={Styles.detail}>
            <div className={Styles.icon}><Icon /></div>
            
            {subtitle} && <span>{subtitle}</span>
            {title}
        </div>
    );
}