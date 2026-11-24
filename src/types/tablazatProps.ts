import type { Dispatch, SetStateAction } from "react"
import type { Cipo } from "./cipo"

export type TablazatProps = {
    cipo: Cipo
    beallitas: (id: string) => void;
    setModified: Dispatch<SetStateAction<boolean>>;
}