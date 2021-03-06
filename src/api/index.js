import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};
function getNewsContentList() {
  return axios.get(`${config.baseUrl}/news/1.json`);
}
function getAskList() {
  return axios.get(`${config.baseUrl}/ask/1.json`);
}
function getJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
}
function getUserPage(userPage) {
  return axios.get(`${config.baseUrl}/user/${userPage}.json`);
}
function getAskPage(AskPage) {
  return axios.get(`${config.baseUrl}/item/${AskPage}.json`);
}
// getNewsContentList, getAskList, getJobsList 통합 API
function getList(pageName) {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export {
  getNewsContentList,
  getAskList,
  getJobsList,
  getUserPage,
  getAskPage,
  getList,
};
