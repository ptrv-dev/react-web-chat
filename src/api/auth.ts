import { $axios } from '@/axios';
import { ISignInResponse } from './interfaces/auth';

export async function signIn(
  email: string,
  password: string
): Promise<boolean> {
  try {
    const { data } = await $axios.post<ISignInResponse>('/auth/sign-in', {
      email,
      password,
    });
    window.localStorage.setItem('accessToken', data.token);
    return true;
  } catch {
    return false;
  }
}
