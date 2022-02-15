import { useUserStore } from "~/stores"

export default async ({ $pinia}) => {
    useUserStore($pinia).logout()
}