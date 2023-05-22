/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import Q1Image from 'src/assets/images/join_______.png';
import Q2Image from 'src/assets/images/join________1.png';
import Q3Image from 'src/assets/images/join_________.png';
import { styled } from '@mui/material/styles';
import Id from 'src/components/Id/Id';

const Join1 = styled('div')({
  backgroundColor: `rgba(255, 184, 188, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `844px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Pw = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `DNF Bit Bit TTF`,
  fontWeight: `400`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  WebkitTextStroke: `1.2999999523162842px rgba(21, 50, 28, 1)`,
  position: `absolute`,
  left: `63px`,
  top: `348px`,
});

const Id1 = styled(Id)(({ theme }) => ({
  width: `290px`,
  height: `36px`,
  position: `absolute`,
  left: `63px`,
  top: `278px`,
}));

const Pw1 = styled(Id)(({ theme }) => ({
  width: `290px`,
  height: `36px`,
  position: `absolute`,
  left: `63px`,
  top: `396px`,
}));

const Pw2 = styled(Id)(({ theme }) => ({
  width: `290px`,
  height: `36px`,
  position: `absolute`,
  left: `63px`,
  top: `460px`,
}));

const Q = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `PFStardust`,
  fontWeight: `500`,
  fontSize: `17px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `136px`,
  height: `32px`,
  position: `absolute`,
  left: `145px`,
  top: `550px`,
});

const Q1 = styled('img')({
  height: `54.55px`,
  width: `240px`,
  position: `absolute`,
  left: `76px`,
  top: `610px`,
});

const Id2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `DNF Bit Bit TTF`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  WebkitTextStroke: `1.2999999523162842px rgba(21, 50, 28, 1)`,
  position: `absolute`,
  left: `63px`,
  top: `233px`,
});

const Q2 = styled('img')({
  height: `49px`,
  width: `155px`,
  position: `absolute`,
  left: `118px`,
  top: `101px`,
});

const Q3 = styled('img')({
  height: `54.55px`,
  width: `240px`,
  position: `absolute`,
  left: `75px`,
  top: `714px`,
});

function Join(props) {
  return (
    <Join1 className={props.className}>
      <Pw>{`PW`}</Pw>
      <Id1 />
      <Pw1 />
      <Pw2 />
      <Q>{`회원가입 완료!`}</Q>
      <Q1 src={Q1Image} loading="lazy" alt={'계정만들기'} />
      <Id2>{`ID`}</Id2>
      <Q2 src={Q2Image} loading="lazy" alt={'회원 가입'} />
      <Q3 src={Q3Image} loading="lazy" alt={'로그인하러가기'} />
    </Join1>
  );
}

export default Join;