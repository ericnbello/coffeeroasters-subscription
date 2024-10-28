import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { Auth } from "@supabase/ui";
import { supabase } from "utils/supabase-client";

import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';

const SignIn = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)
    return (
      <div className="flex justify-center height-screen-helper bg-lightCream text-black">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
          <div className="flex justify-center pb-12 ">
            <Logo width="64px" height="64px" />
          </div>
          <Auth providers={['google']} supabaseClient={supabase} view={'sign_in'}/>
        </div>
      </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
