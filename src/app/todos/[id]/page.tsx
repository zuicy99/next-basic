import React from "react";
type Props = {
  params: {
    id: string;
  };
};
// Next.js 의 fetch 사용

// Open API 호출하기
const getTodoDetail = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (res.status !== 200) {
    throw new Error("상세 할일 정보를 가지고 오는데 실패하였습니다.");
  } else {
    return res.json();
  }
};

const TodoDetail = async ({ params }: Props) => {
  //   console.log(params.id);
  const res = await getTodoDetail(params.id);
  console.log(res);
  return (
    <div>
      할일 상세페이지 {res.id} : {res.title}{" "}
    </div>
  );
};

export default TodoDetail;
