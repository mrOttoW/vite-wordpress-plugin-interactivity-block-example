import {ViteWordPress} from 'vite-wordpress';

export default {
    plugins: [
        ViteWordPress({
            base: '/wp-content/plugins/create-vite-block-interactivity',
            input: ['index.js', 'view.js', 'style.pcss', 'block.json', 'render.php'],
        }),
    ],
};
