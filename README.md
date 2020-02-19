###

GraphQL 첫 코스 연습

### graphql-yoga

npm i graphql-yoga

### 그래프큐엘 장점

앤드 포인트를 줄일 수 있다
ex) /users/ GET에서 이름 , 성별, 나이 등을 보낼거고 사용하지 않을 영역까지 다 보내버리는데 그래프큐엘에선 필요한 필드만 호출가능.
Over-fetcing없이 코드를 짤 수 있다고 한다.

/feed/
/notifications/
/user/1/
페이스북 기준 앱을 시작하려고 3가지 요청을 해야함 이것이 바로 Under-fetching없이 코딩이 가능하다는 점.

예를들어
query {
feed {
comments
likeNumber
}
notifications {
isRead
}
user {
username
profilePic
}
}

### nodemon

npm i -g nodemon

### babel-node

npm i -g babel-cli
npm i --save-dev @babel/core @babel/node
npm i babel-cli babel-preset-env babel-preset-stage-3 --dev

### node-fetch

npm i node-fetch
