import _axios from "@/plugins/axios";

export const randomQuote = () => {
  return _axios.get('/quote/random')
}
