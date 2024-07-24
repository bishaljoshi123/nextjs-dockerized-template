import { baseURLFastAPI, baseURLNestJS } from "@/constants/constants";

export async function healthCheckNestJs() {
  try {
    const response = await fetch(`${baseURLNestJS}/api/health-check`);
    if (response.ok) {
      console.log("Success:", response.status);
    } else {
      console.log("Failed:", response.status);
    }
    return response;
  } catch (e) {
    console.log("error", e);
  }
}

export async function healthCheckFastAPI() {
  try {
    const response = await fetch(`${baseURLFastAPI}/healthcheck`);

    if (response.ok) {
      console.log("Success:", response.status);
    } else {
      console.log("Failed:", response.status);
    }
    return response;
  } catch (e) {
    console.log("error", e);
  }
}
