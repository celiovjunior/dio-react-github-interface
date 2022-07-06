import React, { createContext, useState } from "react";
import { useCallback } from "react";
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
});



function GithubProvider ({ children }) {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      company: undefined,
      location: undefined,
      blog: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  });

  const getUser = (username) => {
    api.get(`/users/${username}`)
    .then(({ data }) => {
      console.log(data);
      setGithubState(prevState =>({...prevState, user: {
        login: data.login,
        avatar: data.avatar_url,
        name: data.name,
        html_url: data.html_url,
        company: data.company,
        location: data.location,
        blog: data.blog,
        followers: data.followers,
        following: data.following,
        public_gists: data.public_gists,
        public_repos: data.public_repos
      }}))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), [])
  }

  return(
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  ) 
};

export default GithubProvider;