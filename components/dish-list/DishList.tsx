import Styles from "./DishList.module.css";

import { Dish } from "@/components";
import { api } from "@services";
import { useQuery } from "react-query";
import { DishType } from "core/types";
import { DishListProps } from "./type";
import { DishSkeleton } from "@/components";

export function DishList(props: DishListProps) {

    const fetchDishes = async () => {
        const response = await api.get<DishType[]>(`/deliveries?city=${props.citySlug}`);
        return response.data;
    }

    const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

    return (
        <div className={Styles.list}>
           {isFetching ? (
               <DishSkeleton />
           ) : (
               data?.map((dish, index) => <Dish key={dish.id} { ...dish} /> )
           )}
        </div>
    );
}