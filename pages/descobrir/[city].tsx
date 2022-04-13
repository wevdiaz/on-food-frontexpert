import { useRouter } from "next/router";

export default function Descobrir() {
    const router = useRouter();
    const city = router.query.city;

    return (
        <h1>Descobriu - {city} </h1>
    );
}