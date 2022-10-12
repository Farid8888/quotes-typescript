export type Props ={
    children:React.ReactNode,
    cl:string
}

export type Items ={
    id?:string,
    index?:number | undefined,
    text:string,
    author:string,
}

export type Comment ={
    comment:string,
    id?:string,
    ID?:string
}