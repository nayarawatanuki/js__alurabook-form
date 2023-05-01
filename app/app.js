import { zipCode } from "./base/variable.js";

import { fetchAddress } from "./components/fetchAddress.js";


zipCode.addEventListener("focusout", () => fetchAddress(zipCode.value));