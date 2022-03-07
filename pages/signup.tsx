import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import Logo from 'components/icons/Logo';
import { User } from '@supabase/gotrue-js';
import { Auth } from "@supabase/ui";
import { supabase } from "utils/supabase-client";

const SignUp = () => {
  const [newUser] = useState<User | null>(null);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (newUser || user) {
      router.replace('/account');
    }
  }, [newUser, user]);

  return (
    <div className="flex justify-center height-screen-helper bg-lightCream">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          <Logo width="64px" height="64px" />
        </div>
        
        <Auth providers={['facebook', 'google']} supabaseClient={supabase} magicLink={true} view={'sign_up'} redirectTo={'/account'}/>

      </div>
    </div>
  );
};

export default SignUp;