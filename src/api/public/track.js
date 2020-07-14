import request from "../../utils/request";

export function track(data) {
  return request({
    url: `/api/public/track`,
    method: "post",
    data,
  });
}
