# WhatsApp Clone with Tauri, NextJS, TailwindCSS

## Local Development

Make sure you have cargo installed first <https://www.rust-lang.org/learn/get-started>

Run in Localhost

```bash
pnpm wa dev
```

Run in App

```bash
pnpm wa tauri dev
```

## Build for Mac

[Read more for other different binary target](https://tauri.app/v1/guides/distribution/macos#binary-targets)

```bash
npx nx run whatsapp-clone-tauri-next:tauri build --target universal-apple-darwin
```
