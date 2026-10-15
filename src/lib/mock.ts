// 화면을 만들 때 쓰는 가짜 데이터. Supabase를 연결하면 이 파일 대신 실제 조회 함수로 바꾼다.

export type Invitation = {
  id: string; // 가짜 데이터라 짧은 이름을 쓴다. 실제 발행에서는 추측하기 어려운 값(crypto.randomUUID())을 쓴다.
  title: string;
  date: string; // 화면에 보여줄 글자 그대로
  location: string; // 주소를 글자로만 표시 (지도 없음)
  body: string; // 줄바꿈(\n)은 화면에 그대로 보여준다
};

export type Response = {
  id: string;
  invitationId: string;
  name: string;
  status: "yes" | "no"; // yes = 참석, no = 불참
  companions: number; // 본인을 제외한 동반 인원. 불참이면 0
};

// /i/demo — 응답이 3개 있는 초대장
export const mockInvitation: Invitation = {
  id: "demo",
  title: "하준이의 여덟 번째\n생일잔치",
  date: "2026년 11월 14일 (토) 14:00",
  location: "행복 키즈카페 2층 파티룸",
  body: "친구들아 안녕! 🎂\n하준이의 생일 파티에 놀러 와!\n\n맛있는 케이크도 먹고\n신나게 같이 놀자 🎈\n\n꼭 와서 같이 축하해 줘!",
};

// /i/empty — 응답이 0건인 초대장 (응답 현황의 빈 화면 확인용)
export const mockEmptyInvitation: Invitation = {
  ...mockInvitation,
  id: "empty",
};

export const mockResponses: Response[] = [
  {
    id: "a1b2c3d4-0001-4000-8000-000000000001",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companions: 1,
  },
  {
    id: "a1b2c3d4-0002-4000-8000-000000000002",
    invitationId: mockInvitation.id,
    name: "박펭귄",
    status: "yes",
    companions: 0,
  },
  {
    id: "a1b2c3d4-0003-4000-8000-000000000003",
    invitationId: mockInvitation.id,
    name: "이남극",
    status: "no",
    companions: 0,
  },
];

export function getInvitation(id: string): Invitation | undefined {
  return [mockInvitation, mockEmptyInvitation].find((invitation) => invitation.id === id);
}

export function getResponses(invitationId: string): Response[] {
  return mockResponses.filter((response) => response.invitationId === invitationId);
}
