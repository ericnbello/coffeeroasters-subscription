import redirect from 'nextjs-redirect'

const DashboardRedirect = redirect('/account');

export default () => (
    <DashboardRedirect>
        <iframe className='h-full'>
            <h1 className='text-black text-3xl'>
                You are logged in! Redirecting to your account dashboard.
            </h1>
        </iframe>
    </DashboardRedirect>
)