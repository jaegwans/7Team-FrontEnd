import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styled from "styled-components";

const ProfessorRate = () => {
  interface IProfessor {
    professorName: string;
    comments: Comment[];
    ability: any;
  }
  const router = useRouter();
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

  const [commentContent, setcommentContent] = useState("");
  const [assignmentScore, setassignmentScore] = useState(0);
  const [kindness, setkindness] = useState(0);
  const [teaching, setteaching] = useState(0);
  const [humanity, sethumanity] = useState(0);
  const [sensibility, setsensibility] = useState(0);
  // const comment = ["#ff7e7e", "#ffc07e", "#ffff76", "#8be175", "#75b6e1"];

  const [assginmentColor, setassginmentColor] = useState([
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
  ]);
  const [kindnessColor, setkindnessColor] = useState([
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
  ]);
  const [teachingColor, setteachingColor] = useState([
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
  ]);
  const [humanityColor, sethumanityColor] = useState([
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
  ]);
  const [sensibilityColor, setsensibilityColor] = useState([
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
    "lightgray",
  ]);

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
        <h1>{professor?.professorName} 교수님</h1>
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
              bg={assginmentColor[0]}
              onClick={() => {
                setassignmentScore(20);
                setassginmentColor([
                  "#ff7e7e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={assginmentColor[1]}
              onClick={() => {
                setassignmentScore(40);
                setassginmentColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={assginmentColor[2]}
              onClick={() => {
                setassignmentScore(60);
                setassginmentColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={assginmentColor[3]}
              onClick={() => {
                setassignmentScore(80);
                setassginmentColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={assginmentColor[4]}
              onClick={() => {
                setassignmentScore(100);
                setassginmentColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "#75b6e1",
                ]);
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
              bg={kindnessColor[0]}
              onClick={() => {
                setkindness(20);
                setkindnessColor([
                  "#ff7e7e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={kindnessColor[1]}
              onClick={() => {
                setkindness(40);
                setkindnessColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={kindnessColor[2]}
              onClick={() => {
                setkindness(60);
                setkindnessColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={kindnessColor[3]}
              onClick={() => {
                setkindness(80);
                setkindnessColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={kindnessColor[4]}
              onClick={() => {
                setkindness(100);
                setkindnessColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "#75b6e1",
                ]);
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
              bg={teachingColor[0]}
              onClick={() => {
                setteaching(20);
                setteachingColor([
                  "#ff7e7e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={teachingColor[1]}
              onClick={() => {
                setteaching(40);
                setteachingColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={teachingColor[2]}
              onClick={() => {
                setteaching(60);
                setteachingColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={teachingColor[3]}
              onClick={() => {
                setteaching(80);
                setteachingColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={teachingColor[4]}
              onClick={() => {
                setteaching(100);
                setteachingColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "#75b6e1",
                ]);
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
              bg={humanityColor[0]}
              onClick={() => {
                sethumanity(20);
                sethumanityColor([
                  "#ff7e7e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={humanityColor[1]}
              onClick={() => {
                sethumanity(40);
                sethumanityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={humanityColor[2]}
              onClick={() => {
                sethumanity(60);
                sethumanityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={humanityColor[3]}
              onClick={() => {
                sethumanity(80);
                sethumanityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={humanityColor[4]}
              onClick={() => {
                sethumanity(100);
                sethumanityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "#75b6e1",
                ]);
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
              bg={sensibilityColor[0]}
              onClick={() => {
                setsensibility(20);
                setsensibilityColor([
                  "#ff7e7e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={sensibilityColor[1]}
              onClick={() => {
                setsensibility(40);
                setsensibilityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "lightgray",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={sensibilityColor[2]}
              onClick={() => {
                setsensibility(60);
                setsensibilityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "lightgray",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={sensibilityColor[3]}
              onClick={() => {
                setsensibility(80);
                setsensibilityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "lightgray",
                ]);
              }}
            ></ProgressbarButton>
            <ProgressbarButton
              bg={sensibilityColor[4]}
              onClick={() => {
                setsensibility(100);
                setsensibilityColor([
                  "#ff7e7e",
                  "#ffc07e",
                  "#ffff76",
                  "#8be175",
                  "#75b6e1",
                ]);
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
    margin-top: 1em;
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
    min-width: fit-content;
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
  margin-top: 1em;
  input {
    height: 10em;
    border: none;
    box-shadow: 0.1em 0.1em 1em lightgray;
    min-width: 610px;
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
    width: 6.5em;
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
  &:first-child {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(2) {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(3) {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(4) {
    background-color: ${(Props) => Props.bg};
  }
  &:nth-child(5) {
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
