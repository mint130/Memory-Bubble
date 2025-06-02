# 추억 방울
### SSAFY 12기 특화 프로젝트 - D201 Team 2학년 1반
<img src="https://lab.ssafy.com/s12-ai-image-sub1/S12P21D201/-/raw/master/img/main.gif?ref_type=heads"  height="500"/>

> 가족만의 글씨체로 추억과 일상을 공유하는 디지털 가족 앨범 서비스


<br />

## 목차

1. [**서비스 소개**](#1)
1. [**데모 영상**](#2)
1. [**주요 기능**](#3)
1. [**개발 환경**](#4)
1. [**프로젝트 산출물**](#5)
1. [**프로젝트 진행**](#6)
1. [**모니터링 통계**](#7)
1. [**개발 일정**](#8)
1. [**기타 산출물**](#9)
1. [**팀원 소개**](#10)


<br />

<div id="1"></div>

## 💁 서비스 소개



> 가족만의 글씨체로 추억과 일상을 공유하는 디지털 가족 앨범 서비스

<br />


### 서비스 설명 (주요 기능)

[ 가족과의 소중한 추억을 간직하는 공간, 추억 방울 ]

1. 손글씨 디지털화 시스템
   : 개인 손글씨를 디지털 폰트로 변환하여 자신만의 글씨체 제작 가능

2. 그룹 생성 및 관리
   : 가족 그룹을 만들어 소중한 추억 공유

3. 사진 업로드 및 앨범 관리
   : 가족 사진을 앨범으로 정리하고 관리

4. 텍스트 및 음성 편지 작성
   : 개인의 글씨체가 적용된 편지를 가족에게 전달 가능

5. 캘린더 일정 관리 및 앨범 연동
   : 가족 일정 확인 및 일정과 앨범을 연동하여 추억을 기록
   <br />

### 프로젝트 특장점

1. 개인 손글씨 폰트 생성
- 손글씨로 작성한 템플릿을 제출하여 폰트로 변환
- TTF 파일 다운로드 가능

2. 가족 그룹
- 가족 그룹 생성 및 관리
- 그룹 코드로 간편하게 가입 가능

3. 가족 앨범
- 사진을 업로드하여 앨범으로 관리
- 무한 스크롤을 적용하여 로딩 시간 및 메모리 사용량 감소
- 사진 뒷면에 자신만의 폰트로 감상평 작성 가능

4. 가족 캘린더
- 가족 일정 등록 및 조회 기능
- 일정과 앨범을 연동하여 추억을 쉽게 회상 가능

5. 편지 보내기
- 텍스트 및 음성 편지 전송 기능
- 지정일 이후에 확인할 수 있는 "느린 편지" 기능

6. 관리자 기능
- 폰트 요청 생성 목록 확인 및 업로드한 템플릿 다운로드
- LF-Font 모델을 활용하여 작성한 한글 48자 기반으로 한글 11,172자 이미지 생성 및 제공
- FontForge와 potrace 라이브러리를 활용하여 정교한 폰트 변환 처리 (이미지 → ttf파일)

<br />

### 프로젝트 차별점/독창성

1. Redis를 사용한 그룹 초대 코드 및 JWT 토큰 관리
- 그룹 초대 코드를 실시간으로 생성 및 관리
- JWT 토큰을 Redis에 저장해 빠른 인증 처리 및 세션 관리를 최적화

2. FCM 실시간 알림 구현
- 포그라운드 및 백그라운드에서 동작하는 실시간 푸시 알림 기능
- 폰트 생성 완료, 편지 수신 등 주요 이벤트를 실시간으로 사용자에게 전달

3. CloudFront와 Lambda@Edge를 사용한 이미지 캐싱 및 리사이징 처리
- CloudFront 캐싱을 통한 이미지 로딩 속도 개선
- Lambda@Edge를 통해 이미지 요청 시 리사이징을 수행하여 용량 감소 및 로딩 속도 개선

4. 사진 첨부 및 편집 시 다운 샘플링 적용
- 사진 업로드 및 크롭 단계에서는 다운 샘플링한 이미지를 활용하여 편집 및 업로드 응답 속도를 향상
- 최종 저장 시 원본 이미지를 보관하여 이미지 품질을 유지

5. 무한 스크롤로 스크롤 위치 관리
- 초기 로딩 시간 단축 및 메모리 관리 효율성 증가

6. Blue-Green 무중단 배포
- 배포 중에도 서비스 중단 없이 안정적으로 트래픽 전환 가능
- Health Check를 통해 신규 배포 환경의 안정성을 검증한 후 배포 진행
<div id="2"></div>

## 🎥 데모 영상


[영상 포트폴리오 보러가기](https://www.youtube.com/watch?v=dx62l1ZDnto)

<br /><br />


<div id="3"></div>

## 💡 주요 기능


### 나만의 손글씨

폰트 생성 요청 <br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/폰트생성요청.gif?ref_type=heads" /> 
<br />

폰트 생성 완료 <br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/폰트생성완료.gif?ref_type=heads" />
<br /><br />

### 추억 갤러리
추억 보관함<br />
<img src="\https://github.com/mint130/Memory-Bubble/raw/master/img/추억보관함.gif?ref_type=heads" />

앨범 <br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/앨범.gif?ref_type=heads" />

엽서<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/엽서.gif?ref_type=heads" />

<br /><br />

### 편지
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/편지.gif?ref_type=heads" />
<br /><br />

### 방울 캘린더
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/캘린더.gif?ref_type=heads"  /> 
<br /><br />

### 가입
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/초대코드.gif?ref_type=heads" />

<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/가입.gif?ref_type=heads" />
<br /><br />



### 로그인(카카오)
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/로그인.gif?ref_type=heads" />
<br /><br />

### 로그아웃(카카오)
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/로그아웃.gif?ref_type=heads" />
<br /><br />

### 블루그린 배포
<img src="" />
<br /><br />


<br />


<div id="4"></div>

## 🛠 개발 환경


### 백엔드
![Spring Boot Badge](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=fff&style=flat-square)
![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat-square)
![Redis Badge](https://img.shields.io/badge/redis-FF4438?style=flat-square&logo=redis&logoColor=fff)

### 프론트엔드
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)
![TailwindCSS Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)

### 인프라
![AWS EC2 Badge](https://img.shields.io/badge/AmazonEC2-FF9900?logo=amazonec2&logoColor=fff&style=flat-square)
![Ubuntu Badge](https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=fff&style=flat-square)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)
![Nginx Badge](https://img.shields.io/badge/nginx-009639?style=flat-square&logo=nginx&logoColor=fff)
![Jenkins Badge](https://img.shields.io/badge/jenkins-D24939?style=flat-square&logo=jenkins&logoColor=fff)
![AmazonS3 Badge](https://img.shields.io/badge/AmazonS3-569A31?style=flat-square&logo=amazons3&logoColor=fff)


### 디자인
![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)

### 상태 관리
![Gitlab Badge](https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=gitlab&logoColor=fff)
![Jira Badge](https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff&style=flat-square)
![Mattermost Badge](https://img.shields.io/badge/Mattermost-0058CC?logo=mattermost&logoColor=fff&style=flat-square)


### 모니터링
![Grafana Badge](https://img.shields.io/badge/grafana-F46800?style=flat-square&logo=grafana&logoColor=fff)
![Prometheus Badge](https://img.shields.io/badge/prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=fff)




<br />


<div id="5"></div>

## 🎈 프로젝트 산출물


### 기능 명세서
[📖 기능 명세서](exec/specification.csv)

<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/specification1.png?ref_type=heads" width="700" />
<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/specification2.png?ref_type=heads" width="700" />

<br /><br />

### ERD 다이어그램

<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/erd.png?ref_type=heads" width="700" />


<br /><br />

### 시스템 아키텍처

<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/architecture.png?ref_type=heads" width="700" />


<br /><br />

### API 명세서
[📖 API 명세서](exec/api.csv)

<br />
<br /><br />

<div id="6"></div>

## ✏ 프로젝트 진행

### 프로젝트 전체 관리 방법
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/프로젝트관리방법.png?ref_type=heads" width="700" />

### Git
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/git.gif?ref_type=heads" width="700" />

<br />
<br />
<br />

<div id="7"></div>

## 📊 모니터링 통계

<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/모니터링.png?ref_type=heads" width="700" />
<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/모니터링2.png?ref_type=heads" width="700" />
<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/모니터링3.png?ref_type=heads" width="700" />
<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/모니터링4.png?ref_type=heads" width="700" />
<br />
<img src="https://github.com/mint130/Memory-Bubble/raw/master/img/모니터링5.png?ref_type=heads" width="700" />
<br />

<details>

💻 웹사이트 동시 접속자 수 분석 **보고서**
---------------------------

부하 테스트 도구로 nGrinder를 활용하여 웹사이트의 동시 사용자 수용 능력을 측정하였습니다.

### 1\. 테스트 결과 요약

*   **평균 응답 시간**: 27.6ms ~ 441.0ms
    
    ✅ 빠를 땐 0.03초, 느릴 땐 0.44초 정도 소요됩니다
    
*   **최대 응답 시간**: 441.0ms
    
*   **초당 처리 요청 수 (TPS)**: 약 223.7 ~ 413.1건
    
*   **오류율**: 0.0%
    

### 2\. **동시 접속 가능 인원 계산**

동시 접속 가능 인원은 아래 공식을 기준으로 계산합니다:

> 동시 사용자 수 = TPS × 평균 응답 시간(초)

**1) 평균 응답 시간을 기준으로 계산**

*   **50명 테스트**: 413.1 TPS × 0.1208s = 약 50명
*   **70명 테스트**: 234.0 TPS × 0.2987s = 약 70명
*   **100명 테스트**: 223.7 TPS × 0.441s = 약 99명

✅ 평균 응답 시간을 기준으로 약 50명 정도가 동시에 요청을 보내는 경우 안정적으로 서비스 할 수 있습니다.

**2) 최대 응답 시간을 기준으로 계산**

*   **100명 테스트**: 223.7 TPS × 0.441s = 약 99명

⚠️ 최대 부하 상황에서도 99명까지 수용할 수 있지만, 이 경우 응답 지연(441ms)으로 인해 사용자 불편이 발생할 수 있습니다.

### 3\. 분석 결과 요약

| 사용자 수 | TPS | 평균 응답 시간 (ms) | 안정성 | 비고 |
| --- | --- | --- | --- | --- |
| 10명 | 282.7~358.5 | 27.6~48.0 | 🟢 매우 안정 | 최적의 응답 속도 유지 |
| 30명 | 393.6~406.5 | 73.6~75.9 | 🟢 안정 | 높은 TPS 유지 |
| 50명 | 403.1~413.1 | 120.8~123.7 | 🟢 안정 | 최고 TPS 기록 |
| 70명 | 234.0~404.6 | 172.4~298.7 | 🟡 보통 | 테스트 시간별 성능 차이 있음 |
| 80~100명 | 223.7~231.7 | 344.8~441.0 | 🔴 주의 | TPS 감소, 응답시간 지연 |

### 4\. 권장 사항

*   ✅ **최적 동시 접속자 수**: 50명 (최고 TPS, 안정적인 응답 시간)
*   ✅ **안전 운영 범위**: 70명까지 (응답시간 300ms 이내 유지 가능)
*   ⚠️ **주의 구간**: 80명 이상 (응답 지연, TPS 감소 시작)
*   ⚠️ **한계점**: 100명 (응답시간 441ms, 사용자 불편 가능)

➡️ **50~70명 수준에서 안정적인 서비스 운영이 가능**하며, 80명 이상 예상될 경우에는 서버 증설이나 부하 분산 장치 도입이 필요합니다.
</details>

<div id="8"></div>

## 📅 개발 일정


개발 기간: 2025.02.24 ~ 2025.04.11 <br />
QA  기간: 2025.04.04 ~ 2025.04.10 <br />
모니터링 기간: 2025.04.14 ~ 2025.04.16 <br />

<br />



<div id="9"></div>

## 👷 기타 산출물


[포팅 메뉴얼 보러가기](exec/포팅 매뉴얼.pdf)

[AI 매뉴얼 보러가기](exec/AI_메뉴얼.pdf)

[시연 시나리오 보러가기](exec/시연_시나리오.pdf)

<br />
<br />


<div id="10"></div>

<br />

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/jegyun" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/175270500?v=4" alt="제동균 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/key9425" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/175270534?v=4" alt="김은영 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/rmfosem613" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/51354302?v=4" alt="김미경 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/mint130" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/110026510?v=4" alt="김민주 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/euna-jeong20" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/78011769?v=4" alt="정은아 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/2jin8" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/78083320?v=4" alt="구현진 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/" target="_blank">
        제동균<br />(Frontend & 팀장)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/" target="_blank">
        김은영<br />(Frontend)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/">
        김미경<br />(Frontend)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/" target="_blank">
        김민주<br />(Backend)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/" target="_blank">
        정은아<br />(AI)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/" target="_blank">
        구현진<br />(Infra)
      </a>
    </td>
  </tr>
</table>

<br />

<br />

| 이름  |        역할        | <div align="center">개발 내용</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:---:|:----------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 제동균 | Frontend<br />팀장 | **기술 스택**<br />- React, TypeScript 기반 프론트엔드 개발<br />- Zustand를 활용한 상태 관리<br />- Figma를 활용한 UI/UX 설계<br />**주요 개발 내용**<br />- **폰트 생성 및 관리 시스템**<br />&nbsp;&nbsp;&nbsp;&nbsp;- 진행 단계를 시각화하는 진행 표시줄(Progress Bar) 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 템플릿 업로드 시 용량, 확장자, 파일명 검증 시스템 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 파일명에 따른 순서대로 콘텐츠 배치 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 폰트 제작 상태에 따른 페이지 분기 처리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 생성된 웹폰트를 실시간으로 적용하여 사용자가 체험할 수 있는 기능 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 완성된 폰트 다운로드 기능 구현<br />- **관리자 페이지**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 폰트 제작 의뢰 조회 및 관리 기능 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 폰트 제작에 필요한 파일 다운로드 시스템 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 제작 완료된 폰트 파일(.ttf) 업로드 기능 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 파일 확장자 검증을 통한 보안 강화<br />- **앨범 관리 시스템**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사진 업로드 및 인디케이터 기반 UI 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사진-엽서 간 플립 애니메이션을 적용하여 사용자 경험 향상<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지 프리로딩 적용으로 로딩 시간 최적화<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 앨범 용량에 따른 사진 추가 기능 조건부 활성화<br />- **엽서 시스템**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 그룹 구성원별 맞춤 웹폰트가 적용된 엽서 뷰 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- MediaRecorder API를 활용한 음성 메시지 녹음 및 재생 기능 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 텍스트 입력 유효성 검사 및 오류 처리 최적화<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Zustand를 활용한 폰트 정보 전역 상태 관리<br />- **편지 보관함**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 드래그 앤 드롭 기능을 위한 dnd-kit 라이브러리 활용<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 공간 분산 배치 알고리즘을 적용한 편지 플로팅 효과 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 편지 내용 조회 및 관리 기능 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 편지 작성 시 사용자별 웹폰트 적용 시스템 구현<br />  |
| 김은영 |     Frontend     | - 프론트엔드: React, TypeScript<br />- 상태 관리: Zustand<br />- CSS 프레임워크: Tailwind CSS<br /><br />- Header Component<br />&nbsp;&nbsp;&nbsp;&nbsp;- 반응형에 따른 UI 구현: 드롭다운 네비게이션, 바형태 네비게이션<br />&nbsp;&nbsp;&nbsp;&nbsp;- 사용자 인증(로그인, 관리자, 가입) 상태에 따른 UI 변화<br />&nbsp;&nbsp;&nbsp;&nbsp;- 현재 페이지에 따른 메뉴 활성화 상태 표시<br />&nbsp;&nbsp;&nbsp;&nbsp;- 관련 페이지 외 이동 시 읽지 않은 메시지 상태 갱신 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 초대 코드 클립보드 복사 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 사용자 및 그룹 정보 수정 기능 구현<br />- Modal Component<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 재사용 가능한 컴포넌트 설계<br />  &nbsp;&nbsp;&nbsp;&nbsp;- React Portal을 활용한 DOM 계층 분리 모달 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 모달 상태를 관리하는 useModal(isOpen, Close, Open, Toggle) 훅 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 비동기 작업 중 사용자 상호작용 제한 기능 구현<br />- Calendar Page<br />  &nbsp;&nbsp;&nbsp;&nbsp;- FullCalendar 라이브러리 기반 캘린더 구현 및 커스터마이징<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 단일일정, 연속일정, TodayDate, SelectDate 스타일링<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 계절별 색상 테마 동적 적용 (봄, 여름, 가을, 겨울)<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 날짜 선택에 따른 일정 필터링 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 동일 일정 그룹화 및 카운팅 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 시작일-종료일 간 조정 기능 구현<br />- 보호된 라우팅 시스템<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사용자 인증(로그인, 관리자, 가입) 상태별 라우트 보호 컴포넌트 설계<br />- 사용자 인증 및 정보 관리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Zustand를 활용한 전역 사용자 정보 스토어 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- App 초기화 시 토큰 검증 및 사용자 정보 자동 복구 기능 구현<br />                                                                                                                                                                                                                                                                                                                                                                                   |
| 김미경 |     Frontend     | - 앨범 및 사진 기능<br />&nbsp;&nbsp;&nbsp;&nbsp;- 앨범 목록 슬라이딩 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 앨범 커버 타이틀 투명 애니메이션 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- Intersection Observer API 활용하여 cursor 기반 무한스크롤 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 반응형 그리드 레이아웃 구현<br />- 편지 작성 및 보관함 기능<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사용자 경험 개선을 위한 글자수 제한 및 페이지 이동 시 경고 알림 표시<br />  &nbsp;&nbsp;&nbsp;&nbsp;- MediaRecorder API 활용하여 음성 녹음 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- CSS 애니메이션을 활용한 파도 및 카세트 릴 회전 애니메이션 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 편지 오픈 애니메이션 적용<br />- 이미지 자르기 및 업로드<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지 업로드 기능 구현: 파일 유효성 검사 및 크기 제한<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지 크롭 기능 구현: 원본 유지하며 미리보기용 다운샘플링 및 WebP 변환 처리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 업로드 시 WebP 형식 변환<br />- UI/UX 요소<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Tailwind CSS 기반 반응형 디자인 적용<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 커스텀 Alert 메시지 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 로딩 애니메이션 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 버튼 컴포넌트 분리하여 재사용 가능하게 구현<br />- 랜딩 페이지 및 인트로 애니메이션<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 글자가 채워지는 진행도 기반 그라데이션 효과<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 페이지 간 자연스러운 전환을 위한 커튼 애니메이션 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 스크롤에 따라 확대되는 원형 클리핑 마스크 애니메이션<br />- 성능 최적화<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Zustand 기반 상태 관리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 점진적 이미지 로딩 구현: 고화질 이미지를 불러오기 전 저화질 이미지를 우선 로드하여 사용자 경험 개선<br />                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 김민주 |     Backend      | - DB 설계 및 API 명세 작성<br />- Swagger UI를 활용한 API 문서 자동화<br />- 인증/인가 구현(Spring Security, JWT, OAuth2.0)<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Spring Security 기반 인증/인가 시스템 구축<br />  &nbsp;&nbsp;&nbsp;&nbsp;- JWT 기반 토큰 인증 시스템 설계 및 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Redis를 활용한 JWT 블랙 리스트 구현, JWT 토큰 관리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- OAuth2.0 사용 카카오 소셜 로그인 연동<br />- 그룹 관련 기능 API 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 24시간 유효한 가입 코드 생성 및 Redis에 저장, 조회 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 그룹 생성 및 가입 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 그룹 정보 수정 및 조회 기능 구현<br />- 앨범, 사진, 감상평 관련 기능 API 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- S3 Presigned URL을 이용한 사진 업로드 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- CloudFront Signed URL을 통한 사진 조회 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 클라이언트에서 쿼리파라미터로 이미지 리사이징<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 앨범 썸네일 변경, 앨범 이동 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사진에 텍스트, 음성 감상평 작성하는 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 음성의 경우 S3 Presigned URL을 이용한 업로드 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- CloudFront Signed URL을 통한 조회 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 사진 상세(감상평) 조회 시 발생하는 N+1 문제 해결<br />- 일정 관련 기능 API 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 일정 수정, 조회, 삭제, 앨범 연결 기능 구현<br />- 편지 관련 기능 API 개발<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 텍스트, 음성 편지 전송 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 음성의 경우 S3 Presigned URL을 이용한 업로드 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- CloudFront Signed URL을 통한 조회 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 편지 목록 조회, 상세 조회 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 편지 상세 조회 시 발생하는 N+1 문제 해결<br />- FCM 백그라운드, 포그라운드 알림 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 새로운 편지 도착 및 폰트 생성 요청, 생성 완료, 생성 요청 거절 시 알림 발송<br />- 기타 QA 과정 중 Back, Front 에러 수정<br /> |
| 정은아 |        AI        | - font generation task 조사<br />- 모델 학습을 위한 데이터셋 수집<br />- DM-Font model<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 논문 정리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 코드 뜯어보기<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 학습<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 추론<br />- LF-Font model<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 논문 정리<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 코드 뜯어보기<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 학습<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 추론<br />- 폰트 생성 설명서 만들기<br />- 템플릿 전처리 코드 작성<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지 픽셀값 보정<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 각 문자별 이미지 파일 저장<br />- 훈련 step별 결과 비교 후 최종 모델 LF-Font로 선정<br />- 생성된 이미지로 ttf 만드는 코드 작성<br />  &nbsp;&nbsp;&nbsp;&nbsp;- fontforge, potrace 라이브러리 이용<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지에서 딴 선 후처리<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 구현진 |      Infra       | - **DB 설계 및 API 명세서 작성**<br />&nbsp;&nbsp;&nbsp;&nbsp;- 도메인 기반 데이터 모델링 및 ERD 설계<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Swagger 기반 REST API 명세서 작성 및 자동 문서화<br />- **폰트 기능 구현**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 폰트 생성 요청 및 조회 API 개발<br /> &nbsp;&nbsp;&nbsp;&nbsp;- 가족 단위 폰트 조회 시 발생하는 N+1 문제 해결 (Fetch Join 적용)<br />  &nbsp;&nbsp;&nbsp;&nbsp;- S3 Presigned URL을 활용한 템플릿 업로드 기능 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- CloudFront Signed URL을 통해 TTF 파일 보안 조회 기능 구현- **AWS 클라우드 인프라 구축**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- EC2(Ubuntu) 인스턴스를 이용한 애플리케이션 서버 구성<br />  &nbsp;&nbsp;&nbsp;&nbsp;- S3를 이용한 미디어 리소스 저장소 구성<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Docker, Docker Compose를 이용한 백엔드 애플리케이션 컨테이너화<br />- **CI/CD 파이프라인 및 무중단 배포**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Jenkins 기반 빌드/테스트/배포 자동화 구축<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Nginx 리버스 프록시 설정 및 배포 안정성 강화<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Blue-Green 배포 전략 적용으로 무중단 배포 지원<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 신규 컨테이너 헬스 체크 기반 트래픽 전환<br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 빌드 실패 시 자동 롤백 시스템 구현<br />- **모니터링 및 성능 테스트**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Prometheus + Grafana를 통한 실시간 시스템 모니터링 대시보드 구축  &nbsp;&nbsp;&nbsp;&nbsp;- ngrinder를 통한 부하 테스트 및 병목 구간 식별<br />- **이미지 최적화**<br />  &nbsp;&nbsp;&nbsp;&nbsp;- Lambda@Edge를 활용한 서버리스 실시간 이미지 리사이징 구현<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 쿼리 파라미터 기반 이미지 크기 조절로 트래픽 및 속도 최적화<br />  &nbsp;&nbsp;&nbsp;&nbsp;- 이미지 크롭 및 미리보기 시 다운샘플링된 손실 압축 이미지 제공<br />  |
