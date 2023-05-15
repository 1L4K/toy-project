# [InoCam] 2조 미니 프로젝트 SA

### 1. 프로젝트 제목 : 김 사이에 낀 이 ( 추후 수정 )
#### 1-1 간단한 설명 : 팀원의 정보를 소개하고, 방명록을 작성할 수 있는 웹사이트 제작
 > - 조원 :  
 		**김** 광일 ( 팀장 )  
    **김** 정우   
    **이** 성목  
    **김** 진우  
    **김** 승수  
 
--- 
### 2. 와이어프레임

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fah4NkV9rDNer0znHwqajom%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DF3yTBJESif0zfqPk-1" allowfullscreen></iframe>

---

### 3. 개발해야 하는 기능들

|기능|Method|URL|request|response|
|---|------|---|-------|--------|
|방명록 조회|GET|/board||방명록 data|
|방명록 작성|POST|/board|name, content||
|팀원 정보 조회|GET|/member/{id}|id|팀원 정보|

 
