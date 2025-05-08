const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // Windows
      config: {
        mono: '/usr/bin/mono',
        wine: '/user/bin/wine',
      },
    },
    {
      name: '@electron-forge/maker-zip', // macOS
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb', // Debian based distros
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm', // Red hat based distros
      config: {},
    },
    // {
    //   name: '@electron-forge/maker-flatpak', // Flatpak
    //   config: {},
    // }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
