{{flutter_js}}
{{flutter_build_config}}

const serviceWorkerSettings = {
  serviceWorkerVersion: {{flutter_service_worker_version}}
};

_flutter.loader.load({
  serviceWorkerSettings,
});

const splash = document.querySelector('#splash');

_initSplashTheme();

window.addEventListener('flutter-first-frame', () => {
  splash.classList.add('done');

  setTimeout(() => splash.remove(), 500);
});

async function _initSplashTheme() {
  const queryParams = new URLSearchParams(window.location.search);
  const queryTheme = queryParams.get('theme');
  const theme = ['light', 'dark'].includes(queryTheme) ? queryTheme : 'dark';

  splash.classList.add(theme);
}
