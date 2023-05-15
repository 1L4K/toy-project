# [InoCam] 2조 미니 프로젝트 SA

### 1. 프로젝트 제목 : 김 사이에 낀 이 ( 추후 수정 )

#### 1-1 간단한 설명 : 팀원의 정보를 소개하고, 방명록을 작성할 수 있는 웹사이트 제작

> - 조원 :  
>    **김** 광일 ( 팀장 )

    **김** 정우
    **이** 성목
    **김** 진우
    **김** 승수

---

### 2. 와이어프레임

#### 2-1 메인 페이지

![image](https://github.com/1L4K/toy-project/assets/57711744/4ecfb3a7-836d-44b4-92a6-7e1ef701bb64)

#### 2-2 개인 페이지

![image](https://github.com/1L4K/toy-project/assets/57711744/55ecfec7-31f7-4850-a367-5d3ee1de12e7)

---

### 3. 개발해야 하는 기능들

| 기능           | Method | URL          | request       | response    |
| -------------- | ------ | ------------ | ------------- | ----------- |
| 방명록 조회    | GET    | /board       |               | 방명록 data |
| 방명록 작성    | POST   | /board       | name, content |             |
| 팀원 정보 조회 | GET    | /member/{id} | id            | 팀원 정보   |

### 4. local 환경 개발

1. python -m venv venv
2. source venv/bin/activate
3. pip install -r
4. python app.py
