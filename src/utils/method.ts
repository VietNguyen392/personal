import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.defaults.xsrfHeaderName = 'X-CSRFToken';
instance.defaults.xsrfCookieName = 'csrftoken';

export async function POST(url: string, data: object) {
  return await instance.post(url, data);
}
export async function GET(url: string) {
  return await instance.get(url);
}
export async function DELETE(url: string) {
  return await instance.delete(url);
}
