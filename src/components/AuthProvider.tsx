
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { loginSuccess } from '@/store/slices/authSlice';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // التحقق من وجود بيانات المستخدم في localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch(loginSuccess(user));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}
