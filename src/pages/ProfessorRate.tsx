import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styled from "styled-components";

const ProfessorRate = () => {
  const [commentContent, setcommentContent] = useState("");
  const [assignmentScore, setassignmentScore] = useState(0);
  const [kindness, setkindness] = useState(0);
  const [teaching, setteaching] = useState(0);
  const [humanity, sethumanity] = useState(0);
  const [sensibility, setsensibility] = useState(0);
  const router = useRouter();

  const onChangeScore = (e: any) => {
    const name = e.target.name;
    if (name === "assignment") {
      setassignmentScore(e.target.value);
    } else if (name === "kindness") {
      setkindness(e.target.value);
    } else if (name === "teaching") {
      setteaching(e.target.value);
    } else if (name === "humanity") {
      sethumanity(e.target.value);
    } else {
      setsensibility(e.target.value);
    }
  };

  const onChangeComment = (e: any) => {
    setcommentContent(e.target.value);
    console.log(commentContent);
  };

  const { id } = router.query;
  const WriteRate = () => {
    axios
      .post(`http://dugeun.duckdns.org/professors/${id}/assessment`, {
        commentContent: commentContent,
        assignment: assignmentScore,
        kindness: kindness,
        teaching: teaching,
        humanity: humanity,
        sensibility: sensibility,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert(error);
      });

    router.push(`/detail/${id}`);
  };

  return (
    <>
      <FormCss>
        <h1>교수님</h1>
        <ProgressBarContainer>
          <label htmlFor="assignment">과제량</label>
          <input
            onChange={onChangeScore}
            type="range"
            id="assignment"
            name="assignment"
            min="0"
            max="100"
            step="20"
            value={assignmentScore}
          />
          {/* 여기서부터 progress bar */}
          <ProgressBar>
            <ProgressbarButton
              bg="#ff7e7e"
              onClick={() => {
                setassignmentScore(20);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffc07e"
              onClick={() => {
                setassignmentScore(40);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffff76"
              onClick={() => {
                setassignmentScore(60);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#8be175"
              onClick={() => {
                setassignmentScore(80);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#75b6e1"
              onClick={() => {
                setassignmentScore(100);
              }}
            ></ProgressbarButton>
          </ProgressBar>
        </ProgressBarContainer>

        <ProgressBarContainer>
          <label htmlFor="kindness">친절도</label>
          <input
            onChange={onChangeScore}
            type="range"
            id="kindness"
            name="kindness"
            min="0"
            max="100"
            step="20"
            value={kindness}
          />
          <ProgressBar>
            <ProgressbarButton
              bg="#ff7e7e"
              onClick={() => {
                setkindness(20);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffc07e"
              onClick={() => {
                setkindness(40);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffff76"
              onClick={() => {
                setkindness(60);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#8be175"
              onClick={() => {
                setkindness(80);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#75b6e1"
              onClick={() => {
                setkindness(100);
              }}
            ></ProgressbarButton>
          </ProgressBar>
        </ProgressBarContainer>

        <ProgressBarContainer>
          <label htmlFor="teaching">강의력</label>
          <input
            onChange={onChangeScore}
            type="range"
            id="teaching"
            name="teaching"
            min="0"
            max="100"
            step="20"
            value={teaching}
          />
          <ProgressBar>
            <ProgressbarButton
              bg="#ff7e7e"
              onClick={() => {
                setteaching(20);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffc07e"
              onClick={() => {
                setteaching(40);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffff76"
              onClick={() => {
                setteaching(60);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#8be175"
              onClick={() => {
                setteaching(80);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#75b6e1"
              onClick={() => {
                setteaching(100);
              }}
            ></ProgressbarButton>
          </ProgressBar>
        </ProgressBarContainer>

        <ProgressBarContainer>
          <label htmlFor="humanity">인간성</label>
          <input
            onChange={onChangeScore}
            type="range"
            id="humanity"
            name="humanity"
            min="0"
            max="100"
            step="20"
            value={humanity}
          />
          <ProgressBar>
            <ProgressbarButton
              bg="#ff7e7e"
              onClick={() => {
                sethumanity(20);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffc07e"
              onClick={() => {
                sethumanity(40);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffff76"
              onClick={() => {
                sethumanity(60);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#8be175"
              onClick={() => {
                sethumanity(80);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#75b6e1"
              onClick={() => {
                sethumanity(100);
              }}
            ></ProgressbarButton>
          </ProgressBar>
        </ProgressBarContainer>

        <ProgressBarContainer>
          <label htmlFor="sensibility">감수성</label>
          <input
            onChange={onChangeScore}
            type="range"
            id="sensibility"
            name="sensibility"
            min="0"
            max="100"
            step="20"
            value={sensibility}
          />
          <ProgressBar>
            <ProgressbarButton
              bg="#ff7e7e"
              onClick={() => {
                setsensibility(20);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffc07e"
              onClick={() => {
                setsensibility(40);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#ffff76"
              onClick={() => {
                setsensibility(60);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#8be175"
              onClick={() => {
                setsensibility(80);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg="#75b6e1"
              onClick={() => {
                setsensibility(100);
              }}
            ></ProgressbarButton>
          </ProgressBar>
        </ProgressBarContainer>

        <br />

        <InputTextContainer>
          <label>한 줄 평가</label>
          <input
            name="commentContent"
            onChange={onChangeComment}
            value={commentContent}
          />
        </InputTextContainer>
      </FormCss>
      <ButtonCss onClick={WriteRate} type="submit">
        작성 완료
      </ButtonCss>
    </>
  );
};
export default ProfessorRate;
const FormCss = styled.form`
  width: 50vw;
  h1 {
    font-weight: 100;
  }
`;
const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 2em;
  label {
    margin-right: 3em;
    font-size: 1em;
    font-family: "S-CoreDream-3Light";
  }
  input {
    display: none;
  }
`;
const InputTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2em;
  font-family: "S-CoreDream-3Light";
  input {
    height: 10em;
    border: none;
    box-shadow: 0.1em 0.1em 1em lightgray;
  }
`;
const ProgressBar = styled.div`
  display: flex;
`;

interface Props {
  bg: string;
}
const ProgressbarButton = styled.div<Props>`
  & {
    background-color: lightgray;
    cursor: pointer;
    width: 5.8em;
    height: 2em;
    margin: 0.1em;
    transition: background 0.5s;
  }
  &:first-child {
    border-radius: 1em 0em 0em 1em;
  }
  &:last-child {
    border-radius: 0em 1em 1em 0em;
  }
  &:first-child:hover {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(2):hover ~ &:nth-child(1),
  &:nth-child(2):hover {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(3):hover {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(4):hover {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(5):hover {
    background-color: ${(Props) => Props.bg};
  }
`;
const ButtonCss = styled.button`
  float: right;
  padding: 1em 3em;
  border: none;
  border-radius: 1em;
  font-size: 1em;
  font-family: "S-CoreDream-3Light";
`;
