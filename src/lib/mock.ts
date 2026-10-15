// 화면을 만들 때 쓰는 가짜 데이터. Supabase를 연결하면 이 파일 대신 실제 조회 함수로 바꾼다.

export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (crypto.randomUUID() 형태)
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

export const mockInvitation: Invitation = {
  id: "3f9c1a52-7b8e-4d06-a1c4-9e2d5b7f08aa",
  title: "허들링 클럽 2번째\n오프라인 밋업",
  date: "2026년 11월 14일 (토) 09:00",
  location: "세종 남극 기지",
  body: "두 번째 오프라인 밋업에 초대해요.\n편한 복장으로 오셔서 함께 이야기 나눠요.",
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
