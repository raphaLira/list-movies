export type Movies = {
   id : number
   year: number
   title: string 
   winner: boolean //Falta studios e producers
}
export type MoviesResponse = {
    movies: Movies[]
    last: boolean
    totalPages: number
    totalElements: number
    size: number
    first: boolean
    empty: boolean
    // Falta o pageable e o sort
}
