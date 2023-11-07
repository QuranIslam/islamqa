const fetchBanner = async () => {
  const container = document.getElementById('advertiseContainer');
  const url = new URL(container.getAttribute('data-link'));
  const params = {
    language: container.getAttribute('data-language'),
    size:  container.getAttribute('data-size'),
    is_home: container.getAttribute('data-is_home'),
    page: container.getAttribute('data-page')
  };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  const data = await response.json();

  AMP.setState({ banner: data.banner, fallback: !data.banner });
}

fetchBanner();
