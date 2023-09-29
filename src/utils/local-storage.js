const ACCESS_TOKEN = "ACCESS_TOKEN";
// มาหา key ACCESS_TOKEN ในตัวแปรอีกที

// ใส่ค่า token ไปผ่าน key ACCESS_TOKEN
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
// read ค่าจะ token
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
// ลบ token
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
