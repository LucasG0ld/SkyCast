# SkyCast Environment Setup

## 🔐 Security Note

The file `app.config.js` contains a hardcoded API key fallback and is **excluded from Git** via `.gitignore`.

## 🚀 Quick Setup for New Developers

### 1. Copy the template file:
```bash
cp app.config.js.template app.config.js
```

### 2. Add your API key:
Edit `app.config.js` line 51 and replace `YOUR_API_KEY_HERE` with your WeatherAPI key.

### 3. Start developing:
```bash
npx expo start
```

---

## 📋 Files in Version Control

✅ **Tracked** (in Git):
- `app.config.js.template` - Safe template without real API key
- `.gitignore` - Excludes `app.config.js`
- `ENV_SETUP.md` - This documentation

❌ **Not Tracked** (personal):
- `app.config.js` - Contains your personal API key
- `.env` - Alternative for environment variables

---

## 🔑 Getting a WeatherAPI Key

1. Sign up at https://www.weatherapi.com/
2. Get your free API key from the dashboard
3. Add it to your `app.config.js` (line 51)

---

## 🏭 Production Builds

For production builds via EAS, the API key is securely stored as an **EAS Secret** and automatically injected during the build process. You don't need to modify anything!

```bash
eas build --platform android
```
