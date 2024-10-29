// my-music-player/tailwind.config.js
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                // カスタムカラー設定を削除し、Tailwindデフォルトのカラーを使用します
                background: '#ffffff',  // 必要に応じてカラーを指定
                foreground: '#333333'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};