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
    .then(({ data: {user}}) => {
      setGithubState(prevState =>({...prevState, user: {
        login: user.login,
        name: user.name,
        html_url: user.html_url,
        company: user.company,
        location: user.location,
        blog: user.blog,
        followers: user.followers,
        following: user.following,
        public_gists: user.public_gists,
        public_repos: user.public_repos
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