# 我的Express練習：短網址產生器
使用Node.js & Express 製作短網址產生頁面

## 功能
+ 由首頁輸入網址，提交後可獲得一縮短網址。
+ 輸入相同網址時，產生一樣的縮址。
+ 不可輸入空白內容

## 使用方式
1. 確認安裝node.js & npm。
2. 將專案 clone 至本地位置： `git clone https://github.com/cheese736/url_shortener.git`
3. 開啟Terminal並移至專案資料夾安裝使用套件： `npm install`
4. 新增環境變數 名稱: MONGODB3_URI 值: `mongodb+srv://alpha:<password>@cluster0.n6ecgan.mongodb.net/url-shortener?retryWrites=true&w=majority`
5. 執行專案： `npm run dev`
6. 開啟瀏覽器輸入網址 http://localhost:3000 進入首頁。


## 開發工具
+ [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
+ [Node.js@14.16.0](https://nodejs.org/en/)
+ [Express@4.18.2](https://www.npmjs.com/package/express)
+ [Express-Handlebars@6.0.6](https://www.npmjs.com/package/express-handlebars)
+ [Bootstrap@v5.2](https://getbootstrap.com/)
+ [Font-awesome@6.2.0](https://fontawesome.com/)
+ [mongoose@6.6.5](https://mongoosejs.com)
