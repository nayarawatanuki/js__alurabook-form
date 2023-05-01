import { zipCode } from "./base/variable.js";

import { fetchAddress } from "./components/Address.js"


zipCode.addEventListener("focusout", () => fetchAddress(zipCode.value));