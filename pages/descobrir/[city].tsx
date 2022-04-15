import { PageTemplate } from "@/components";
import { useRouter } from "next/router";

export default function Descobrir() {
    const router = useRouter();
    const city = router.query.city;

    return (
        <PageTemplate>
            <h1>Descobriu - {city} </h1>
        </PageTemplate>
    );
}