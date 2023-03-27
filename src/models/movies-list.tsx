export type Movies = {
    id: number
    year: number
    title: string
    winner: boolean
}
export type MoviesResponse = {
    movies: Movies[]
    last: boolean
    totalPages: number
    totalElements: number
    size: number
    first: boolean
    empty: boolean
}
