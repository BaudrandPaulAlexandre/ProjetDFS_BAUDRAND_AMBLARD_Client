export interface Project {
    id: number,
    name: string,
    desc: string,
    nbOfMembers: number,
    maxNbOfMembers: number,
    manager: number,
    members: number[]
}
