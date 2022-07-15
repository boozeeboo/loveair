import { configure } from "mobx"

/**
 * State could be changed only by actions for more explicity.
 */
const mobxConfig = (): void => {
    configure({
        enforceActions: "always",
    })
};

export default mobxConfig;
