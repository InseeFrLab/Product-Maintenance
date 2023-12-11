#!/bin/sh
echo "window._env_['VITE_PRODUCT'] = `$VITE_PRODUCT`;" >> /usr/share/nginx/html/env-config.js
echo "window._env_['VITE_EMAIL_BUSINESS'] = `$VITE_EMAIL_BUSINESS`;" >> /usr/share/nginx/html/env-config.js
echo "window._env_['VITE_EMAIL_INFO'] = `$VITE_EMAIL_INFO`;" >> /usr/share/nginx/html/env-config.js
echo "window._env_['VITE_MAINTENANCE_REASON'] = `$VITE_MAINTENANCE_REASON`;" >> /usr/share/nginx/html/env-config.js
exec "$@"