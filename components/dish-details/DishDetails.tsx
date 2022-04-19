import { DishDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews} from "@/icons";

import Styles from "./DishDetails.module.css";

export function DishDetails({ type, title , subtitle }: DishDetailsProps) {
    const Icon = type === "delivery" ? IconDelivery : type === "category" ? IconCategory : IconReviews;

    return (
        <div className={Styles.detail}>
            <div className={Styles.icon}><Icon /></div>
            
            {subtitle && <span>{subtitle}</span>}
            {title}
        </div>
    );
}