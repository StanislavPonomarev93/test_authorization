import { createContext } from "react";

type AuthType = [boolean, (v: boolean) => void]

export const Auth = createContext<AuthType>([false, () => {}]);