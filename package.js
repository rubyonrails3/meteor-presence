Package.describe({
  summary: "A package to help track users' presence"
});

Package.on_use(function (api) {
  api.add_files('presence_client.js', 'client');
  api.add_files('presence_server.js', 'server');
});