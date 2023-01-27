import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import Chart from "../../components/Chart";
interface Comment {
  username: string;
  content: string;
}

type Department = "SOFT" | "CE" | "INFO_AND_COMM" | "AI";

interface IProfessor {
  professorName: string;
  major: Department;
  comments: Comment[];
  ability: any;
}

type DepartmentObj = {
  [key in Department]: string;
};

const department: DepartmentObj = {
  SOFT: "소프트웨어공학과",
  CE: "컴퓨터공학과",
  INFO_AND_COMM: "정보통신공학과",
  AI: "인공지능학과",
};

const Rating = ({ count }: any) => {
  console.log(count);
  const stars = [0, 0, 0, 0, 0];
  for (let i = 0; i < count; i++) {
    stars[i] = 1;
  }

  // return <ImStarFull size={30} color="#e9cf25" />;
  return (
    <>
      {stars.map((data, index) =>
        data === 1 ? (
          <ImStarFull key={index} size={30} color="#e9cf25" />
        ) : (
          <ImStarEmpty key={index} size={30} color="#e9cf25" />
        )
      )}
    </>
  );
};

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const ready = router.isReady;

  const [professor, setProfessor] = useState<IProfessor>();
  useEffect(() => {
    axios
      .get(`http://dugeun.duckdns.org/professors/${id}`)
      .then((data) => {
        console.log(data.data.data);
        setProfessor(data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [ready]);

  return (
    <StyledDetail>
      <StyledLogo>
        <Image src="/professor/logo.png" width={30} height={30} alt="logo" />
        professor rate
      </StyledLogo>
      <div className="profile">
        <Image
          src={`/professor/${id}.png`}
          width={200}
          height={256}
          quality={100}
          alt="profilePhoto"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <div className="nameAndDepartment">
          <div className="department">
            {professor?.major && department[professor.major]}
          </div>
          <div className="name">{professor?.professorName}</div>
        </div>
      </div>
      <div className="chartAndRating">
        {professor && <Chart data={professor?.ability} />}

        <div className="rating">
          <div className="title2">별점</div>
          <div className="ratingNum">
            <span>{professor?.ability.rating}</span>.0
          </div>
          <div>
            <Rating count={professor?.ability.rating} />
          </div>
        </div>
      </div>

      <div className="comment">
        <div className="title">최근 강의평</div>
        {professor?.comments.map((data, index) => (
          <div key={index}>
            {data.username} | {data.content}
          </div>
        ))}
      </div>
    </StyledDetail>
  );
};

const StyledDetail = styled.div`
  display: flex;

  box-shadow: 0 12px 26px -4px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  width: 85vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  .profile {
    display: flex;

    flex-direction: row;
    align-items: center;
    width: 500px;
    margin: 30px;
    gap: 20px;
    .nameAndDepartment {
      align-self: flex-end;
      display: flex;
      flex-direction: column;
    }
    .name {
      font-size: 30px;
      color: #51a7bf;
      font-weight: 700;
    }
  }
  .title {
    font-size: 20px;
    margin-right: 300px;
    color: #51a7bf;
    font-weight: 700;
  }
  .comment {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    width: 500px;
  }
  .rating {
    display: flex;
    width: 300px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    .ratingNum {
      font-size: 35px;
      span {
        font-size: 80px;
      }
    }
    .title2 {
      display: flex;
      font-size: 20px;
      color: #51a7bf;
      align-self: start;
    }
  }
  .chart {
    height: 300px;
  }
  .chartAndRating {
    display: flex;
    width: 600px;
    justify-content: center;
    gap: 100px;
    flex-direction: row;
  }
`;
const StyledLogo = styled.div`
  gap: 5px;
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 0px 26px 0px rgba(50, 50, 93, 0.25);
`;
export default Detail;

const HeaderCss = styled.header`
  width: 100vw;
  padding: 0.7em 1em;
  display: flex;
  align-items: end;
  box-shadow: 0 0.1rem 0.5rem lightgray;
`;
const SectionCss = styled.section``;
