import axios from 'axios';

const token = {
  set(token: string | null): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset(): void {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default token;
