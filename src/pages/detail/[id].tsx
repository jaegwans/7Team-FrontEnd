import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <HeaderCss>
        <Image src="/professor/logo.png" alt="logo" width={30} height={30} />
        <span>professor rate</span>
      </HeaderCss>
      <SectionCss></SectionCss>
      <button
        onClick={() => {
          router.push({ pathname: "/ProfessorRate", query: { id: id } });
        }}
      >
        평가하기
      </button>
    </>
  );
};
export default Detail;

const HeaderCss = styled.header`
  width: 100vw;
  padding: 0.7em 1em;
  display: flex;
  align-items: end;
  box-shadow: 0 0.1rem 0.5rem lightgray;
`;
const SectionCss = styled.section``;
