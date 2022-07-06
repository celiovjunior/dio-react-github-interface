import React from "react";
import RepositoryItem from "../RepositoryItem";
import * as S from "./styled";

function Repositories() {
  return <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
  >

    <S.WrapperTabList>
      <S.WrapperTab>Repositories</S.WrapperTab>
      <S.WrapperTab>Starred</S.WrapperTab>
    </S.WrapperTabList>
    <S.WrapperTabPanel>
      <RepositoryItem
       name="repo 1"
       linkToRepo="https://github.com/celiovjunior/js-calc" 
       fullName="Js Calc" 
      />
    </S.WrapperTabPanel>
    <S.WrapperTabPanel>
      <RepositoryItem
      name="repo 2"
      linkToRepo="https://github.com/celiovjunior/js-crud" 
      fullName="Js Crud"/>
    </S.WrapperTabPanel>
  </S.WrapperTabs>
};

export default Repositories;