# 🐹Hamchi

사람과 햄스터를 이어주는 분양 및 입양 모바일 앱입니다.

## 🔗Links

**Frontend**

- [https://github.com/Project-Hamchi/hamchi-frontend](https://github.com/Project-Hamchi/hamchi-frontend)

**Backend**

- [https://github.com/Project-Hamchi/hamchi-backend](https://github.com/Project-Hamchi/hamchi-backend)

## 프로젝트 동기

- 햄스터는 우리나라에서 가장 많이 키우는 애완동물 3위입니다. 그에 비해 햄스터를 분양하고 입양할 수 있는 모바일 앱이 없어서 햄스터를 입양 또는 분양할 수 있는 앱을 제작하게 되었습니다.
- 햄스터 분양시 이용되는 기존 플랫폼인 네이버 카페를 사용하면서 게시글 필터 기능, 햄스터 사육환경 인증 기능 및 메시지 기능 등 소 동물을 분양 및 입양하는 사용자들의 편의성을 개선할 수 있는 기능을 만들었습니다.

## 기술스택

**Frontend**

- ES7
- React-Native
- Redux(toolkit)
- Redux-Thunk

**Backend**

- Nodejs
- Express
- MongoDB

**Third Party Stack**

- Git
- Socket.io
- Json Web Token

## 작업 기간

개발 기간: 2021. 5. 3(월) ~ 2021.5.21(금) 3주

[Mockup](https://www.figma.com/file/FHRm3wsq9JjfLpVhqCxVSC/%ED%96%84%EC%B0%8C?node-id=0%3A1)

[Task Card](https://www.notion.so/82f0005a7e5b46be81dfd23999954007?v=9c7041dd61ac46b883242ff21028ce75)

## 주요 기능

- 메인 화면

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8680959f-8053-4629-a0f6-3d960a78ef5d/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.20.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8680959f-8053-4629-a0f6-3d960a78ef5d/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.20.28.png)

- 분양글 필터

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5d472bd-19f4-4d81-9b35-a840d5d7928b/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.23.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5d472bd-19f4-4d81-9b35-a840d5d7928b/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.23.21.png)

- 분양글에 대한 입양 신청서 현황

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e05f6848-412e-4249-b73a-7ada243b30ea/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.22.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e05f6848-412e-4249-b73a-7ada243b30ea/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.22.56.png)

- 내 신청서 현황

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cb2d2bd-4f8a-4e77-aeae-3feb96b58b84/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.23.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cb2d2bd-4f8a-4e77-aeae-3feb96b58b84/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.23.56.png)

- 채팅방 리스트 및 미리보기

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c92f5a0d-d7af-4994-9f4d-657f27611b3e/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.24.04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c92f5a0d-d7af-4994-9f4d-657f27611b3e/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.24.04.png)

- 실시간 채팅

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcb43fd2-2cbe-4183-92ab-0913f4f8b184/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.24.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcb43fd2-2cbe-4183-92ab-0913f4f8b184/Simulator_Screen_Shot_-_iPhone_6s_-_2021-05-27_at_16.24.10.png)

## 고민했던 지점

### Redux 사용 이유

- **전역적으로 사용되는 state를 관리**

하나의 state에 대해서 여러개의 컴포넌트에서 사용할 때 redux를 적용하면 props로 상태를 넘겨줄 필요 없이 전역으로 관리할 수 있기 때문에 사용했습니다. 전역적인 state관리가 안될 경우 너무 많은 state를 props로 넘겨주어야 하기 때문입니다.

첫 번째로 서버에 userId를 필요로 하는 GET요청이 여러 컴포넌트에서 사용되기 때문에 redux를 사용하였습니다. 두번째로 앱 안에서는 사용자에게 에러를 띄워줄 때 에러의 종류와 발생한 위치에 상관 없이 일괄적으로 모달로 에러를 띄워주기 때문에 사용하게 되었습니다.

- **DB와 Client 사이의 징검다리 역할**

피드 데이터에 대한 state는 피드 화면에서만 필요하기 때문에 이를 전역으로 관리할 필요가 없다고 생각하여 redux를 사용하지 않고 컴포넌트 내부에서 피드에 대한 상태관리를 했습니다. 하지만 프로젝트가 진행됨에 따라 관심사의 분리를 위해 컴포넌트 내부에서 직접 데이터를 fetch하는 비동기 함수를 redux 구조에서 thunk함수로 관리할 수 있도록하였습니다.

또한 항상 피드 화면으로 전환될 때 마다 새로운 데이터로 갱신된다면 사용자 입장에서도 불편할 것이라고 생각되었습니다. 사용자는 다른 화면에 갔다가 다시 피드 페이지로 돌아와도 자신이 보고있던 화면을 보고싶어하고 사용자가 직접 새로고침을 할 수 있도록 만든다면 더 좋은 앱이 될 것이라고 생각되었습니다.

### Redux 구조

- **ducks 패턴 적용**

기존에 redux를 사용할 때 action creator, reducer, container로 파일을 모두 나눠서 사용했을 때 state의 흐름을 확인하기가 번거로웠습니다. 그래서 redux의 state관리에 대한 모든 내용이 하나의 파일에 같이 존재하는 ducks 패턴을 적용해서 state의 흐름을 편하게 추적할 수 있도록 만들었습니다.

- **redux toolkit**

또한 toolkit을 사용하여 reducer안에 간단하게 actionCreator를 정의해서 하나의 slice안에서 initialState, reducer, actionCreator 및 비동기 state를 다루는 extraReducer를 사용할 수 있도록 했습니다.

## 프로젝트를 마친 소감

제가 현재 키우고 있는 햄스터를 네이버 카페에서 몇 달 씩이나 입양신청을 시도했을 당시 제목을 보고 일일히 나의 조건에 맞는 분양글을 직접 찾는 것, 신청 댓글을 달고 분양자의 댓글이나 개인 쪽지를 무작정 기다리는 불편함 등 햄스터를 분양하는 과정에서 겪었던 불편함이 많았습니다. 이러한 개인적인 경험으로 햄스터를 분양할 때 있으면 편리하겠다 싶은 기능을 구현할 수 있어서 뿌듯했습니다.
