import { defineStore } from "pinia";
import type { UserInfo, CorpData } from "common-api";
import { sendRequestModel } from "@/common/function/request";
import { permissionApi, userApi } from "common-api";
export default defineStore(
  "thirdUser",
  () => {
    const token = ref(window.microApp.getGlobalData()?.token || "");
    const userInfo = ref<UserInfo>({} as UserInfo);
    const corpData = ref<CorpData | null>();
    // 获取当前用户信息
    async function getUserInfo() {
      if (userInfo.value) return userInfo.value;
      const data = await getCurrentUserFn();
      return data.userInfo;
    }
    async function getCurrentUserFn() {
      const { data } = await sendRequestModel(userApi.getCurrentUser, {
        request: true
      });
      userInfo.value = data.userInfo;
      return data;
    }
    // 获取企业id
    async function getCorpDataFn() {
      if (corpData.value) return corpData.value;
      const { data } = await sendRequestModel(permissionApi.getCorpData);
      if (data) corpData.value = data;
      return data;
    }
    // 小程序登录
    async function setToken(globalToken: string) {
      localStorage.setItem("third-token", globalToken);
      token.value = globalToken;
    }
    // 用户退出
    async function userLogout(): Promise<void> {
      console.log("第三方登出");

      // 清空缓存
      token.value = "";
      corpData.value = null;
      userInfo.value = {} as UserInfo;
      // localStorage.removeItem("third-token");
      // window.microApp.forceDispatch({ type: "logout" });
    }
    return {
      token,
      userInfo,
      setToken,
      userLogout,
      getCurrentUserFn,
      getCorpDataFn,
      getUserInfo
    };
  },
  {
    /* persist: [
      {
        paths: ["token"],
        storage: localStorage
      }
    ] */
  }
);
