# 아:경 (Front-end)
아:경 Front-end repository 입니다.

---

### 프로젝트 구조
```
├── README.md
├── package.json
├── public
│         ├── favicon.ico
│         ├── image
│         │         ├── start_page_background.jpeg
│         │         └── start_page_background.png
│         ├── index.html
│         ├── logo192.png
│         ├── logo512.png
│         ├── manifest.json
│         └── robots.txt
├── src
│         ├── App.css
│         ├── App.test.tsx
│         ├── App.tsx
│         ├── asset
│         │         ├── image
│         │         └── style
│         ├── component
│         │         ├── GradientBar.tsx
│         │         ├── GradientCalendarBar.tsx
│         │         ├── LoadingEmoji.tsx
│         │         ├── Router.tsx
│         │         └── TypingTextComponent.tsx
│         ├── font
│         │         ├── Title_Light.otf
│         │         └── Title_Medium.otf
│         ├── index.css
│         ├── index.tsx
│         ├── logo.svg
│         ├── page
│         │         ├── AnonymousGalleryPage.tsx
│         │         ├── AxiosTest.tsx
│         │         ├── DiaryInputPage.tsx
│         │         ├── DiaryPage.tsx
│         │         ├── DiaryViewPage.tsx
│         │         ├── GalleryPage.tsx
│         │         ├── LoginPage.tsx
│         │         ├── MainPage.tsx
│         │         ├── MyProfilePage.tsx
│         │         ├── SignUpPage.tsx
│         │         └── StartPage.tsx
│         ├── react-app-env.d.ts
│         ├── recoil
│         │         ├── menu
│         │         └── place
│         ├── reportWebVitals.ts
│         ├── setupTests.ts
│         ├── type
│         └── util
│             └── api.ts
├── tree-front.txt
├── tsconfig.json
└── yarn.lock


```
###

---

### 기술 명세서
Recoil : 전역 상태 관리

react-router-dom : navigate 및 route 관리

UI Library : ant design


###

---

### Component 명세서
LoadingEmoji  : 로딩 중 상태 창


GradientCalendarBar : 일 별 emotion color bar


TypingTextComponent : text typing animation component


###

---
### 배포 관련 설정
REACT_APP_API_URL: server api url

###
---
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
