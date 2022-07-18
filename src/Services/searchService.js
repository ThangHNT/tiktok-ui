import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    // .get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.log('co loi');
    }
};
