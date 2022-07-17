import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
import routeConfig from '~/config/routes';

const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
