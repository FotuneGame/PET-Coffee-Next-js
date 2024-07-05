type Email = string;
type Phone = string;

export interface IItemForm{
    id:number | null,
    count:number,
    sugar:number,
    place:string,
    time:string,
    date:string,
    feedback:Email | Phone,
}

export interface ITeamFrom{
    name:string,
    message:string,
    feedback:Email | Phone,
}

export interface ISpecialForm{
    message:string,
    count:number,
    place:string,
    time:string,
    date:string,
    feedback:Email | Phone,
}