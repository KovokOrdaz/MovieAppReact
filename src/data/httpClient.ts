const API: string = "https://api.themoviedb.org/3";

export function get(path: string) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTYwODcyNGY3MTI5NDY3YmRjMDQ1OWU5NTZkYzZkMyIsInN1YiI6IjYzNmZjOWI3Nzk4ZTA2MDA3ZmU1YzFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6B-29abJEy26HFaOHSEaG6714GT3KQsKQD8dE75iQ2E",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((x: any) => x.json());
}

export function search(search: string) {
  return fetch(API + "/search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTYwODcyNGY3MTI5NDY3YmRjMDQ1OWU5NTZkYzZkMyIsInN1YiI6IjYzNmZjOWI3Nzk4ZTA2MDA3ZmU1YzFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6B-29abJEy26HFaOHSEaG6714GT3KQsKQD8dE75iQ2E",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((x: any) => x.json());
}
