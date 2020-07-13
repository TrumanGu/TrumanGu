import axios from "axios";
import { Message } from "iview";

const service = axios.create({
  timeout: 5000,
});

// response interceptor
service.interceptors.response.use(
  (res) => {
    if (!res) {
      return Promise.reject(res.data);
    }

    if (res.status !== 200) {
      Message.info({
        content: "出现错误，请检查接口",
        duration: 10,
        closable: true,
      });
      return Promise.reject(res.data);
    }
    return res.data;
  },
  // eslint-disable-next-line no-unused-vars
  (error) => {
    Message.info({
      content: "出现错误，请检查接口",
      duration: 10,
      closable: true,
    });
  }
);

export default service;
