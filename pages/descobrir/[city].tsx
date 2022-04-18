import { PageTemplate, Dishe } from "@/components";
import { useRouter } from "next/router";

import Styles from "../../styles/discovery.module.css";

export default function Descobrir() {
    const router = useRouter();
    const city = router.query.city;

    return (
        <PageTemplate>
           <div className={Styles.content}>
                <h1>Opções na região de {city} </h1>
                <p>Encontramos x opções</p>

                <div className={Styles.items}>
                    <Dishe />
                    <Dishe />
                    <Dishe />
                    <Dishe />
                </div>

           </div>
        </PageTemplate>
    );
}