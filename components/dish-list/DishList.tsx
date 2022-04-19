import Styles from "./DishList.module.css";

import { Dish } from "@/components";
import { api } from "@services";
import { useQuery } from "react-query";
import { DishType } from "core/types";

export function DishList() {

    const fetchDishes = async () => {
        const response = await api.get<DishType[]>("/deliveries?city=sao-paulo-sp");
        return response.data;
    }

    const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

    return (
        <div className={Styles.list}>
           {isFetching ? (
               <div>Carregando...</div>
           ) : (
               data?.map((dish, index) => <Dish key={dish.id} { ...dish} /> )
           )}
        </div>
    );
}