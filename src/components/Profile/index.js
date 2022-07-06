import React from "react";
import * as S from "./styled";

function Profile() {
  return <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/72048177?v=4" alt="Avatar" />
            <S.WrapperInfosUser>
              <div>
                <h1>Celio Jr</h1>
                <S.WrapperUserName>
                  <h3>username</h3>
                  <a href="https://github.com/celiovjunior" target="_blank" rel="noreferrer">celiovjunior</a>
                </S.WrapperUserName>
              </div>
              <S.WrapperStatusCount>
              <div>
                <h4>Followers</h4>
                <span>15</span>
              </div>
              <div>
                <h4>Starred</h4>
                <span>15</span>
              </div>
              <div>
                <h4>Following</h4>
                <span>15</span>
              </div>
              </S.WrapperStatusCount>
            </S.WrapperInfosUser>
  </S.Wrapper>
};

export default Profile;