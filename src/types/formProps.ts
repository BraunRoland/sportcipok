import type { Dispatch, SetStateAction } from "react"
import type { Cipo } from "./cipo"

export type FormProps  = {
    cipo: Cipo;
    setCipo: Dispatch<SetStateAction<Cipo>>;
    megse: () => void;
}