import { format, render, cancel, register } from "timeago.js";

export function setSessionStorageItem(value, expiryInDays = 20) {
  const now = new Date();
  // Set the expiration time in milliseconds
  const expiryTime = now.getTime() + expiryInDays * 24 * 60 * 60 * 1000;

  const item = {
    value: value,
    expiry: expiryTime,
  };

  sessionStorage.setItem("blogifyAuth", JSON.stringify(item));
}

export function getSessionStorageItem(key = "blogifyAuth") {
  const itemStr = sessionStorage.getItem(key);
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (!itemStr) {
    return null;
  }

  // Compare the expiry time with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, remove it from storage and return null
    sessionStorage.removeItem(key);
    return null;
  }

  return item.value;
}

export function removeSessionStorageItem(key = "blogifyAuth") {
  sessionStorage.removeItem(key);
}

export const extractDate = (date) => {
  return format(new Date(date));
};
