/**
 * Recup all data from .json
 */

import {
  getFetch
} from "./data";

/**
 * @description link the fetch with the call api for all elements 
 * @param {String} id 
 * @param {Const} setUser 
 * @param {Const} setUserActivity 
 * @param {Const} setUserPerformance 
 * @param {Const} setUserSessions 
 * @param {Const} setError 
 * @returns function
 */
export function fetchering(id, setUser, setUserActivity, setUserPerformance, setUserSessions, setError) {
  async function init() {
    try {
      let response = await getFetch(id, "");
      let responseActivity = await getFetch(id, "activity");
      let responseSessions = await getFetch(id, "average-sessions");
      let responsePerformance = await getFetch(id, "performance");
      setUser(response.data);
      setUserActivity(responseActivity.data);
      setUserSessions(responseSessions.data);
      setUserPerformance(responsePerformance.data);
    } catch (err) {
      console.log("===== error =====", err);
      setError(true);
    }
  }
  init();
}