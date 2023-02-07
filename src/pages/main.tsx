import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';

interface IProfessor {
    id: number;
    professorName: string;
    major: string;
}
type departmentType = {
    [key: string]: string;
};

const department: departmentType = {
    SOFT: '소프트웨어공학과',
    CE: '컴퓨터공학과',
    INFO_AND_COMM: '정보통신공학과',
    AI: '인공지능학과',
};

const Professor = ({ props }: any) => {
    const router = useRouter();

    const onClickProfessor = () => {
        router.push(`/detail/${props.id}`);
    };
    return (
        <StyledProfessor onClick={onClickProfessor}>
            <StyledImageSpan>
                <Image
                    src={`/professor/${props.id}.png`}
                    width={100}
                    height={200}
                    alt={props.professorName}
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
            </StyledImageSpan>
            <div className="detail">
                <div>{props.professorName}</div>
                <div>{department[props.major]}</div>
            </div>
        </StyledProfessor>
    );
};

const Main = () => {
    const [professor, setProfessor] = useState<IProfessor[] | null>(null);
    useEffect(() => {
        console.log(professor);
        axios
            .get(`https://dugeun.duckdns.org/`)
            .then((data) => {
                setProfessor(data.data.data);
                console.log(professor);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);

    return (
        <StyledMain>
            <div className="logo">
                <Image
                    src="/professor/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                두근두근 교수님 평가
            </div>

            <StyledProfessorList>
                {professor !== null
                    ? professor.map((data) => (
                          <Professor key={data.id} props={data} />
                      ))
                    : null}
            </StyledProfessorList>
        </StyledMain>
    );
};

export default Main;
const StyledImageSpan = styled.div`
    margin: 10px;
`;

const StyledProfessor = styled.div`
    display: flex;
    width: 350px;
    height: 200px;
    box-shadow: 0 26px 40px -10px rgba(50, 50, 93, 0.25),
        0 16px 24px -16px rgba(0, 0, 0, 0.3),
        0 -12px 24px -12px rgba(0, 0, 0, 0.025);
    border-radius: 10px;
    justify-content: space-between;
    .detail {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        justify-content: center;
        font-size: 20px;
        align-items: flex-end;
    }
    &:hover {
        transform: translateY(-3px);
        cursor: pointer;
    }
`;
const StyledProfessorList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 10px;
`;

const StyledMain = styled.div`
    display: flex;
    .logo {
        font-size: 50px;
        border-bottom: 1.5px solid black;
    }
    box-shadow: 0 12px 26px -4px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    width: 85vw;
    height: wrap-content;
    padding: 15px;
    flex-direction: column;
    align-items: center;
`;
